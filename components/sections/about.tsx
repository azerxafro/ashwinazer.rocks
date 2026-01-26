"use client"

import { Pill } from "@/components/pill"

export function About() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Pill className="mb-6">BIOGRAPHY</Pill>
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-sentient mb-12">
          About <i className="font-light">Ashwin</i>
        </h2>

        <div className="space-y-8 text-lg text-foreground/80 leading-relaxed">
          <p>
            <strong className="text-primary">Ashwin Azer</strong> is an independent music artist from Coimbatore, India, 
            blending Hip-Hop, Rap, and Indie styles to create a unique sonic identity. Known for raw, authentic lyrics 
            and infectious beats, he represents a new wave of South Indian independent music.
          </p>

          <p>
            Collaborating with artists like <em>Wa&apos;Cali</em>, <em>Lucid ASH</em>, <em>Saileshxafro</em>, and <em>Iffath</em>, 
            Ashwin has released multiple tracks and albums including <strong>DESTINY</strong>, <strong>DEMON SMILE</strong>, 
            and the viral single <strong>Pikachu (NEW ERA)</strong>.
          </p>

          <p>
            As the founder of <strong>Monadelta Productions</strong>, Ashwin is not just an artist but a creative force 
            shaping the independent music scene. His music captures the streets, the culture, and the raw emotion of 
            everyday life.
          </p>

          <p className="text-foreground/60 italic">
            &quot;Whether I&apos;m dropping bars or crafting beats, I keep it real and push boundaries.&quot;
          </p>

          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-3xl font-sentient text-primary mb-2">6+</div>
              <p className="text-foreground/60 font-mono text-sm">Albums & EPs</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-sentient text-primary mb-2">20+</div>
              <p className="text-foreground/60 font-mono text-sm">Released Tracks</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-sentient text-primary mb-2">5+</div>
              <p className="text-foreground/60 font-mono text-sm">Collaborators</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
