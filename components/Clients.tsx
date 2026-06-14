"use client";

import { clients } from "@/data/portfolio";

export default function Clients() {
  const doubled = [...clients, ...clients];

  return (
    <section className="py-16 border-y border-white/5 overflow-hidden">
      <div className="flex animate-marquee gap-16 whitespace-nowrap">
        {doubled.map((client, i) => {
          const isLocal = client.icon?.startsWith("/");

          return (
            <div
              key={i}
              className="flex items-center gap-3 shrink-0 text-white/30 hover:text-white/70 transition-colors duration-300 group"
            >
              {client.icon && (
                <div className="w-5 h-5 flex items-center justify-center shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={isLocal ? client.icon : `https://cdn.simpleicons.org/${client.icon}`}
                    alt={client.logo}
                    width={20}
                    height={20}
                    className="opacity-40 group-hover:opacity-80 transition-opacity duration-300"
                    style={(!isLocal || client.forceWhite) ? { filter: "brightness(0) invert(1)" } : undefined}
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                  />
                </div>
              )}
              <span className="text-sm font-medium tracking-wide uppercase">
                {client.logo}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
