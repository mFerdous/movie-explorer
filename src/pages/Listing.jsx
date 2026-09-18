import { useEffect, useMemo, useState } from 'react'
import SearchBar from '../components/SearchBar.jsx'
import MovieGrid from '../components/MovieGrid.jsx'
import MovieModal from '../components/MovieModal.jsx'
import { getAllShows, searchShows } from '../services/tvmaze.js'

export default function Listing() {
  const [allShows, setAllShows] = useState([])
  const [searchResults, setSearchResults] = useState(null)
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [selected, setSelected] = useState(null)

  // Load the default browse grid once.
  useEffect(() => {
    let cancelled = false
    setLoading(true)
    getAllShows()
      .then((data) => {
        if (!cancelled) setAllShows(data)
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  // Debounced search whenever the query changes.
  useEffect(() => {
    const trimmed = query.trim()
    if (!trimmed) {
      setSearchResults(null)
      setError(false)
      if (allShows.length > 0) setLoading(false)
      return
    }
    let cancelled = false
    const handle = setTimeout(() => {
      setLoading(true)
      searchShows(trimmed)
        .then((data) => {
          if (!cancelled) {
            setSearchResults(data)
            setError(false)
          }
        })
        .catch(() => {
          if (!cancelled) setError(true)
        })
        .finally(() => {
          if (!cancelled) setLoading(false)
        })
    }, 350)
    return () => {
      cancelled = true
      clearTimeout(handle)
    }
  }, [query, allShows.length])

  const shows = useMemo(
    () => (searchResults !== null ? searchResults : allShows),
    [searchResults, allShows]
  )

  return (
    <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
      <h1 className="font-display text-3xl font-medium text-reel-text">
        Browse movies
      </h1>
      <p className="mt-2 text-reel-muted">
        Search by title, or scroll the full movie catalog below.
      </p>

      <div className="mt-8 max-w-xl">
        <SearchBar
          value={query}
          onChange={setQuery}
          resultCount={shows.length}
          hasQuery={query.trim().length > 0}
        />
      </div>

      <div className="mt-10">
        <MovieGrid
          shows={shows}
          loading={loading}
          error={error}
          onSelect={setSelected}
        />
      </div>

      <MovieModal show={selected} onClose={() => setSelected(null)} />
    </main>
  )
}
