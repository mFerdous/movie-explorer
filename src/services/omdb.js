const BASE_URL = 'https://www.omdbapi.com/'
const API_KEY = import.meta.env.VITE_OMDB_API_KEY
const featuredSearches = [
  'star wars',
  'batman',
  'spider man',
  'mission impossible',
  'toy story',
  'matrix',
]

function buildUrl(params) {
  if (!API_KEY) {
    throw new Error('Missing VITE_OMDB_API_KEY environment variable')
  }

  const searchParams = new URLSearchParams({ ...params, apikey: API_KEY })
  return `${BASE_URL}?${searchParams.toString()}`
}

function normalizeMovie(movie) {
  return {
    id: movie.imdbID,
    name: movie.Title,
    image: movie.Poster && movie.Poster !== 'N/A'
      ? { medium: movie.Poster, original: movie.Poster }
      : null,
    premiered: movie.Released && movie.Released !== 'N/A'
      ? movie.Released
      : movie.Year && movie.Year !== 'N/A'
        ? movie.Year
        : null,
    rating: {
      average: movie.imdbRating && movie.imdbRating !== 'N/A'
        ? movie.imdbRating
        : null,
    },
    genres: movie.Genre && movie.Genre !== 'N/A' ? movie.Genre.split(', ') : [],
    network: movie.Production && movie.Production !== 'N/A'
      ? { name: movie.Production }
      : null,
    summary: movie.Plot && movie.Plot !== 'N/A' ? movie.Plot : '',
  }
}

async function fetchMovie(params) {
  const response = await fetch(buildUrl({ ...params, plot: 'full', type: 'movie' }))
  if (!response.ok) throw new Error('Failed to load movies')

  const data = await response.json()
  if (data.Response === 'False') throw new Error(data.Error || 'Movie not found')
  return normalizeMovie(data)
}

async function searchMoviePage(query, page = 1) {
  const response = await fetch(
    buildUrl({ s: query, page: String(page), type: 'movie' })
  )
  if (!response.ok) throw new Error('Failed to search movies')

  const data = await response.json()
  if (data.Response === 'False') throw new Error(data.Error || 'No movies found')

  return data.Search.map((movie) => normalizeMovie(movie))
}

export function stripHtml(text) {
  if (!text) return ''
  return text.replace(/<[^>]+>/g, '')
}

export async function searchMovies(query) {
  const firstPage = await searchMoviePage(query, 1)
  const additionalPages = await Promise.allSettled([
    searchMoviePage(query, 2),
    searchMoviePage(query, 3),
  ])

  return [
    ...firstPage,
    ...additionalPages
      .filter((result) => result.status === 'fulfilled')
      .flatMap((result) => result.value),
  ]
}

export async function getAllMovies() {
  const results = await Promise.allSettled(
    featuredSearches.map((query) => searchMoviePage(query))
  )
  const movies = results
    .filter((result) => result.status === 'fulfilled')
    .flatMap((result) => result.value)

  return [...new Map(movies.map((movie) => [movie.id, movie])).values()]
}

export async function getMovieById(id) {
  return fetchMovie({ i: id })
}