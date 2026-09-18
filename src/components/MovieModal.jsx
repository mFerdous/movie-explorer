import { useEffect } from 'react'
import { stripHtml } from '../services/tvmaze.js'

export default function MovieModal({ show, onClose }) {
  useEffect(() => {
    if (!show) return undefined

    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [show, onClose])

  if (!show) return null

  const backdrop = show.image?.original || show.image?.medium
  const rating = show.rating?.average ?? 'N/A'
  const year = show.premiered ? show.premiered.slice(0, 4) : 'Unknown'
  const genres = show.genres?.length ? show.genres.join(', ') : 'Not listed'
  const network = show.network?.name || show.webChannel?.name || 'Unknown'

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Details for ${show.name}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="thin-scroll max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-reel-line bg-reel-surface"
      >
        <div className="relative">
          {backdrop ? (
            <img
              src={backdrop}
              alt=""
              className="h-56 w-full object-cover sm:h-72"
            />
          ) : (
            <div className="h-40 w-full bg-reel-surface2" />
          )}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-reel-bg/80 text-reel-text transition-colors hover:bg-reel-red"
          >
            ✕
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <h2 className="font-display text-3xl font-medium text-reel-text">
            {show.name}
          </h2>
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-reel-muted">
            <span>⭐ Rating: {rating}</span>
            <span>📅 Release: {year}</span>
            <span>🎭 Genre: {genres}</span>
            <span>📡 Network: {network}</span>
          </div>

          <h3 className="mt-6 font-display text-base font-medium text-reel-text">
            Overview
          </h3>
          <p className="mt-2 text-reel-muted">
            {stripHtml(show.summary) || 'No summary available for this movie.'}
          </p>

          <button
            onClick={onClose}
            className="mt-8 ml-auto block rounded-full bg-reel-surface2 px-5 py-2.5 text-sm font-medium text-reel-text transition-colors hover:bg-reel-line"
          >
            ❌ Close
          </button>
        </div>
      </div>
    </div>
  )
}
