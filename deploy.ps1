# Portfolio Deploy Script — Oracle Cloud (Free Tier)
# Usage: .\deploy.ps1 -Host "your.oracle.ip" -User "ubuntu" -KeyPath "~\.ssh\id_rsa"

param(
    [Parameter(Mandatory=$true)]
    [string]$OracleHost,

    [string]$OracleUser = "ubuntu",

    [Parameter(Mandatory=$true)]
    [string]$KeyPath,

    [string]$ImageName = "portfolio",
    [string]$ImageTag = "latest"
)

$ErrorActionPreference = "Stop"
$FullImage = "${ImageName}:${ImageTag}"
$TarFile = "${ImageName}.tar"

Write-Host ""
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "  Portfolio Deployment — Oracle Cloud " -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Build Docker image
Write-Host "[1/5] Building Docker image: $FullImage ..." -ForegroundColor Yellow
docker build -t $FullImage .
if ($LASTEXITCODE -ne 0) { Write-Error "Docker build failed."; exit 1 }
Write-Host "      Build complete." -ForegroundColor Green

# Step 2: Export image to tar
Write-Host "[2/5] Exporting image to $TarFile ..." -ForegroundColor Yellow
docker save -o $TarFile $FullImage
if ($LASTEXITCODE -ne 0) { Write-Error "Docker save failed."; exit 1 }
Write-Host "      Export complete." -ForegroundColor Green

# Step 3: Copy files to Oracle server
Write-Host "[3/5] Uploading image and config to $OracleHost ..." -ForegroundColor Yellow
scp -i $KeyPath -o StrictHostKeyChecking=no `
    $TarFile `
    docker-compose.yml `
    nginx.conf `
    "${OracleUser}@${OracleHost}:~/portfolio/"
if ($LASTEXITCODE -ne 0) { Write-Error "SCP upload failed."; exit 1 }
Write-Host "      Upload complete." -ForegroundColor Green

# Clean up local tar
Remove-Item $TarFile -Force

# Step 4: Load and deploy on Oracle server
Write-Host "[4/5] Loading image and starting containers on server ..." -ForegroundColor Yellow
$remoteCmd = @"
set -e
cd ~/portfolio
docker load -i ${TarFile}
rm -f ${TarFile}
docker compose down --remove-orphans
docker compose up -d
"@

ssh -i $KeyPath -o StrictHostKeyChecking=no "${OracleUser}@${OracleHost}" $remoteCmd
if ($LASTEXITCODE -ne 0) { Write-Error "Remote deploy failed."; exit 1 }
Write-Host "      Deploy complete." -ForegroundColor Green

# Step 5: Health check
Write-Host "[5/5] Health check ..." -ForegroundColor Yellow
Start-Sleep -Seconds 5
try {
    $response = Invoke-WebRequest -Uri "http://${OracleHost}" -UseBasicParsing -TimeoutSec 10
    if ($response.StatusCode -eq 200) {
        Write-Host "      Site is live at http://$OracleHost" -ForegroundColor Green
    }
} catch {
    Write-Host "      Could not reach site yet — check firewall/security group rules." -ForegroundColor DarkYellow
    Write-Host "      Make sure port 80 is open in Oracle's Security List." -ForegroundColor DarkYellow
}

Write-Host ""
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "  Deployment Finished!" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""
