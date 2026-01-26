"use client"

import { Pill } from "@/components/pill"

export function Tour() {
  const upcomingShows = [
    {
      date: "TBA",
      venue: "Coming Soon",
      city: "Coimbatore, India",
      status: "upcoming"
    },
    {
      date: "TBA",
      venue: "Coming Soon", 
      city: "Chennai, India",
      status: "upcoming"
    },
    {
      date: "TBA",
      venue: "Coming Soon",
      city: "Pondicherry, India",
      status: "upcoming"
    },
  ]

  return (
    <section id="tour" className="relative min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-3xl mx-auto w-full">
        <div className="text-center mb-12">
          <Pill className="mb-6">LIVE SHOWS</Pill>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-sentient mb-4">
            Tour <i className="font-light">Dates</i>
          </h2>
          <p className="text-lg text-foreground/60 max-w-xl mx-auto">
            Catch me live. New shows coming soon.
          </p>
        </div>

        <div className="space-y-4">
          {upcomingShows.map((show, index) => (
            <div
              key={index}
              className="group flex items-center justify-between p-5 border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-6">
                <div className="text-center min-w-[60px]">
                  <div className="text-2xl font-sentient text-primary">{show.date}</div>
                </div>
                <div>
                  <h3 className="font-sentient text-lg group-hover:text-primary transition-colors">{show.venue}</h3>
                  <p className="text-foreground/60 font-mono text-sm">{show.city}</p>
                </div>
              </div>
              <div>
                <span className="px-4 py-2 text-xs font-mono uppercase border border-primary/50 text-primary rounded-full">
                  {show.status === "upcoming" ? "Coming Soon" : "Get Tickets"}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-foreground/50 font-mono text-sm mb-4">Want me to perform at your event?</p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 font-mono text-sm uppercase border border-border rounded-full hover:border-primary hover:text-primary transition-colors"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  )
}
