"use client"

import Image from "next/image"

export function EpkDiscography() {
  const albums = [
    { 
      title: "DESTINY", 
      year: "2025", 
      type: "Album", 
      role: "Artist, Producer",
      image: "https://i.scdn.co/image/ab67616d00001e0207c1def0f4d50712ce377f48"
    },
    { 
      title: "DEMON SMILE", 
      year: "2025", 
      type: "EP", 
      role: "Artist, Producer",
      image: "https://i.scdn.co/image/ab67616d00001e022fc7329d950638b7e83c18ca"
    },
    { 
      title: "Raatchasi", 
      year: "2024", 
      type: "Single", 
      role: "Artist",
      image: "https://i.scdn.co/image/ab67616d00001e02cea49efb91781c217dcb5581"
    },
    { 
      title: "BAD BOY", 
      year: "2024", 
      type: "Single", 
      role: "Artist",
      image: "https://i.scdn.co/image/ab67616d00001e024923cbc82d66188e486ab81b"
    },
    { 
      title: "Pikachu", 
      year: "2020", 
      type: "Single", 
      role: "Artist",
      image: "https://i.scdn.co/image/ab67616d00001e02bbcb47dd8693f27a39a47222"
    }
  ]

  return (
    <section className="py-20 bg-foreground/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-sentient mb-12 text-center">Selected <span className="text-primary italic">Works</span></h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Featured Embed */}
          <div className="space-y-6">
            <h3 className="text-xl font-mono uppercase tracking-widest opacity-60">Latest Release</h3>
            <div className="relative aspect-square md:aspect-video w-full overflow-hidden rounded-xl border border-border/50">
               <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/album/4eipwaoJfbKEuwdZdaORQT?utm_source=generator"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>

          {/* Discography List */}
          <div className="space-y-6">
            <h3 className="text-xl font-mono uppercase tracking-widest opacity-60">Catalog Highlight</h3>
            <div className="space-y-4">
              {albums.map((album, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-background border border-border rounded-lg group hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 relative rounded-md overflow-hidden shrink-0 border border-border/30">
                      <Image 
                        src={album.image} 
                        alt={album.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <h4 className="font-sentient text-lg group-hover:text-primary transition-colors">{album.title}</h4>
                      <p className="text-xs font-mono text-foreground/60">{album.type} • {album.year}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono border border-foreground/20 px-2 py-1 rounded text-foreground/60 hidden sm:inline-block">{album.role}</span>
                </div>
              ))}
            </div>
            
            <a 
              href="https://open.spotify.com/artist/4qSmbN4VuMODJnTNxAFvti"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm font-mono text-primary hover:underline underline-offset-4"
            >
              View Full Discography via Spotify →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
