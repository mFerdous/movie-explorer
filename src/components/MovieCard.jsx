export default function MovieCard({ show, onSelect }) {
  const poster = show.image?.medium
  const year = show.premiered ? show.premiered.slice(0, 4) : '—'
  const rating = show.rating?.average ?? null

  return (
    <button
      onClick={() => onSelect(show)}
      className="group flex flex-col overflow-hidden rounded-lg border border-reel-line bg-reel-surface text-left transition-colors hover:border-reel-gold/60"
    >
      <div className="aspect-[2/3] w-full overflow-hidden bg-reel-surface2">
        {poster ? (
          <img
            src={poster}
            alt={`Poster for ${show.name}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-reel-muted">
            No image
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-display text-lg font-medium leading-snug text-reel-text">
          {show.name}
        </h3>
        <div className="flex items-center gap-3 text-sm text-reel-muted">
          <span>⭐ {rating ?? 'N/A'}</span>
          <span>📅 {year}</span>
        </div>
        <span className="mt-auto pt-2 text-sm font-semibold text-reel-gold">
          See details →
        </span>
      </div>
    </button>
  )
}
