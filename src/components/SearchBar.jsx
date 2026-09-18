export default function SearchBar({ value, onChange, resultCount, hasQuery }) {
  return (
    <div>
      <label htmlFor="movie-search" className="sr-only">
        Search for a movie
      </label>
      <div className="flex items-center gap-3 rounded-full border border-reel-line bg-reel-surface px-5 py-3.5 focus-within:border-reel-gold">
        <span aria-hidden="true" className="text-reel-muted">
          🔍
        </span>
        <input
          id="movie-search"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search for a movie..."
          className="w-full bg-transparent text-reel-text placeholder:text-reel-muted focus:outline-none"
        />
      </div>
      {hasQuery && (
        <p className="mt-2 px-2 text-sm text-reel-muted">
          {resultCount} result{resultCount === 1 ? '' : 's'} for “{value}”
        </p>
      )}
    </div>
  )
}
