const BASE_URL = 'https://www.omdbapi.com/'
const API_KEY = import.meta.env.OMDB_API_KEY

const featuredTitles = [
  'The Shawshank Redemption',
  'The Godfather',
  'The Dark Knight',
  'Pulp Fiction',
  'Inception',
  'Interstellar',
  'The Matrix',
  'Parasite',
]

function buildUrl(params) {
  if (!API_KEY) {
    throw new Error('Missing OMDB_API_KEY environment variable')
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

export function stripHtml(text) {
  if (!text) return ''
  return text.replace(/<[^>]+>/g, '')
}

export async function searchMovies(query) {
  return [await fetchMovie({ t: query })]
}

export async function getAllMovies() {
  const results = await Promise.allSettled(
    featuredTitles.map((title) => fetchMovie({ t: title }))
  )
  return results
    .filter((result) => result.status === 'fulfilled')
    .map((result) => result.value)
}

export async function getMovieById(id) {
  return fetchMovie({ i: id })
}