import Hero from '../components/Hero.jsx'

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          <Feature
            title="Search anything"
            body="Look up a title and get matching movies back instantly, powered by TVMaze's search."
          />
          <Feature
            title="Real ratings"
            body="See audience ratings and release years right on the card, before you click in."
          />
          <Feature
            title="Full details on demand"
            body="Open a movie for its overview, genres, and network — without leaving the grid."
          />
        </div>
      </section>
    </main>
  )
}

function Feature({ title, body }) {
  return (
    <div className="border-t border-reel-line pt-5">
      <h3 className="font-display text-lg font-medium text-reel-text">
        {title}
      </h3>
      <p className="mt-2 text-sm text-reel-muted">{body}</p>
    </div>
  )
}
