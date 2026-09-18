import MovieCard from './MovieCard.jsx'

export default function MovieGrid({ shows, loading, error, onSelect }) {
  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="aspect-[2/3] animate-pulse rounded-lg border border-reel-line bg-reel-surface"
          />
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <p className="rounded-lg border border-reel-red/40 bg-reel-red/10 px-5 py-4 text-reel-text">
        Couldn't load movies right now. Check your connection and try again.
      </p>
    )
  }

  if (shows.length === 0) {
    return (
      <p className="rounded-lg border border-reel-line bg-reel-surface px-5 py-8 text-center text-reel-muted">
        No movies match that search. Try a different title.
      </p>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
      {shows.map((show) => (
        <MovieCard key={show.id} show={show} onSelect={onSelect} />
      ))}
    </div>
  )
}
