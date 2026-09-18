import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-reel-line/70 bg-reel-bg">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=2000&q=85')",
        }}
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-reel-bg/75" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-reel-bg via-reel-bg/80 to-reel-bg/20" />

      <div className="absolute inset-x-0 top-0 h-6 bg-reel-surface/90 bg-sprocket [background-size:28px_28px] [background-position:14px_center]" />
      <div className="absolute inset-x-0 bottom-0 h-6 bg-reel-surface/90 bg-sprocket [background-size:28px_28px] [background-position:14px_center]" />

      <div className="mx-auto grid min-h-[560px] max-w-6xl items-center gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="hero-reveal max-w-2xl">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-reel-gold">
            <span className="h-px w-10 bg-reel-gold" />
            Your next favorite movie
          </p>
          <h1 className="font-display text-5xl font-medium leading-[0.98] tracking-tight text-reel-text sm:text-7xl">
            Find the story
            <br />
            <span className="text-reel-gold">worth pressing play.</span>
          </h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-reel-text/75 sm:text-lg">
            Search a living catalog of movies, follow the details, and make
            tonight's watch feel like a great choice.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link
              to="/movies"
              className="inline-flex items-center gap-3 rounded-full bg-reel-gold px-6 py-3.5 text-sm font-semibold text-reel-bg transition-transform hover:scale-[1.03]"
            >
              Explore movies
              <ArrowRight aria-hidden="true" size={17} />
            </Link>
            <span className="text-sm text-reel-text/60">Powered by OMDb</span>
          </div>
        </div>

        <div className="hero-reveal-delayed relative mx-auto hidden w-full max-w-sm lg:block">
          <div className="absolute -inset-4 rounded-2xl border border-reel-gold/20" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-reel-text/20 bg-reel-bg/40 shadow-2xl shadow-black/50 backdrop-blur-[2px]">
            <img
              src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=85"
              alt="A movie theater screen glowing in the dark"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-reel-bg/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-reel-bg via-reel-bg/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-reel-gold">
                Tonight's screening
              </p>
              <p className="mt-3 font-display text-3xl text-reel-text">
                One search away.
              </p>
              <div className="mt-5 flex items-center gap-3 text-sm text-reel-text/70">
                <span className="h-2 w-2 rounded-full bg-reel-red shadow-[0_0_12px_#C1443A]" />
                Thousands of stories to discover
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
