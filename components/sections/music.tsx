"use client"

import { Pill } from "@/components/pill"
import { Disc, Headphones, Youtube, Music as MusicIcon } from "lucide-react"

export function Music() {
  // Ashwin Azer discography
  const ashwinAlbums = [
    {
      title: "DESTINY",
      year: "2024",
      type: "Album",
      collaborators: "with Wa'Cali, Lucid ASH",
    },
    {
      title: "DEMON SMILE",
      year: "2024",
      type: "Album",
      collaborators: "with Wa'Cali",
    },
    {
      title: "Pikachu (NEW ERA)",
      year: "2023",
      type: "Single",
      collaborators: "with Saileshxafro",
    },
    {
      title: "VALJAM (To Pondy Streets)",
      year: "2023",
      type: "Single",
      collaborators: "with Wa'Cali, Iffath",
    },
    {
      title: "LOW LOVE (Remastered)",
      year: "2023",
      type: "EP",
      collaborators: "with Suryaa Azer, Lucid ASH",
    },
    {
      title: "BAD BOY",
      year: "2022",
      type: "Single",
      collaborators: "",
    },
  ]

  // Lucid ASH discography (alter-ego)
  const lucidAshAlbums = [
    {
      title: "808s and Heartbeats",
      year: "2024",
      type: "Single",
      collaborators: "",
    },
    {
      title: "H!ghway",
      year: "2024",
      type: "Single",
      collaborators: "",
    },
    {
      title: "TR!PPY JODI",
      year: "2024",
      type: "Single",
      collaborators: "",
    },
    {
      title: "Flix N' Pills",
      year: "2024",
      type: "Single",
      collaborators: "",
    },
  ]

  const ashwinPlatforms = [
    { name: "Spotify", url: "https://open.spotify.com/artist/4qSmbN4VuMODJnTNxAFvti" },
    { name: "Apple Music", url: "https://music.apple.com/in/artist/ashwin-azer/1526462423" },
    { name: "JioSaavn", url: "https://www.jiosaavn.com/artist/ashwin-azer-songs/S3ZwUi13P50_" },
  ]

  const lucidAshPlatforms = [
    { name: "Spotify", url: "https://open.spotify.com/artist/5aHEYAeQkjg7DT1CiH6l3t" },
    { name: "Apple Music", url: "https://music.apple.com/in/artist/lucid-ash/1862575275" },
  ]

  return (
    <section id="music" className="relative min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto w-full">
        {/* Main Artist Section */}
        <div className="text-center mb-12">
          <Pill className="mb-6">DISCOGRAPHY</Pill>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-sentient mb-4">
            The <i className="font-light">Music</i>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Hip-Hop, Rap, and Indie vibes. Two personas, one artist.
          </p>
        </div>

        {/* Spotify Embed - Ashwin Azer */}
        <div id="listen" className="mb-16 overflow-hidden rounded-xl">
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/album/4eipwaoJfbKEuwdZdaORQT?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl"
          />
        </div>

        {/* Ashwin Azer Discography */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl font-sentient">Ashwin Azer</h3>
            <div className="flex gap-2">
              {ashwinPlatforms.map((p, i) => (
                <a
                  key={i}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-foreground/50 hover:text-primary transition-colors"
                >
                  [{p.name}]
                </a>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ashwinAlbums.map((album) => (
              <div
                key={album.title}
                className="group border border-border rounded-lg p-5 hover:border-primary/50 transition-all duration-300 hover:bg-foreground/5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                    <Disc className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-mono text-primary uppercase">{album.type} • {album.year}</span>
                </div>
                <h4 className="text-lg font-sentient mb-1 group-hover:text-primary transition-colors">{album.title}</h4>
                {album.collaborators && (
                  <p className="text-foreground/50 text-sm font-mono">{album.collaborators}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Lucid ASH Section (Alter-Ego) */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl font-sentient">Lucid ASH</h3>
            <span className="text-xs font-mono text-foreground/40 uppercase border border-border px-2 py-1 rounded">Alter-Ego</span>
            <div className="flex gap-2">
              {lucidAshPlatforms.map((p, i) => (
                <a
                  key={i}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-foreground/50 hover:text-primary transition-colors"
                >
                  [{p.name}]
                </a>
              ))}
            </div>
          </div>
          
          {/* Spotify Embed - Lucid ASH */}
          <div className="mb-8 overflow-hidden rounded-xl">
            <iframe
              src="https://open.spotify.com/embed/artist/5aHEYAeQkjg7DT1CiH6l3t?utm_source=generator&theme=0"
              width="100%"
              height="180"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-xl"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {lucidAshAlbums.map((album) => (
              <div
                key={album.title}
                className="group border border-border rounded-lg p-4 hover:border-primary/50 transition-all duration-300 hover:bg-foreground/5"
              >
                <span className="text-xs font-mono text-primary uppercase">{album.year}</span>
                <h4 className="text-base font-sentient mt-1 group-hover:text-primary transition-colors">{album.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Stream Everywhere */}
        <div className="p-6 border border-border rounded-lg bg-foreground/5 text-center">
          <h3 className="text-lg font-sentient mb-4">Stream Everywhere</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Spotify", url: "https://open.spotify.com/artist/4qSmbN4VuMODJnTNxAFvti", icon: <MusicIcon className="h-4 w-4" /> },
              { name: "Apple Music", url: "https://music.apple.com/in/artist/ashwin-azer/1526462423", icon: <Headphones className="h-4 w-4" /> },
              { name: "YouTube", url: "https://youtube.com/c/ashwinazer", icon: <Youtube className="h-4 w-4" /> },
              { name: "JioSaavn", url: "https://www.jiosaavn.com/artist/ashwin-azer/R,u7V5F4o,U_", icon: <Headphones className="h-4 w-4" /> },
              { name: "Deezer", url: "https://www.deezer.com/en/artist/16120121", icon: <Headphones className="h-4 w-4" /> },
            ].map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-foreground/10 px-4 py-2 text-sm font-mono text-foreground hover:bg-primary hover:text-background transition-colors"
              >
                {platform.icon}
                {platform.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
