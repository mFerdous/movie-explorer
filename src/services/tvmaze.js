const BASE_URL = 'https://api.tvmaze.com'

// Strips the HTML tags TVMaze embeds in its summary/overview fields.
export function stripHtml(html) {
  if (!html) return ''
  return html.replace(/<[^>]+>/g, '')
}

export async function searchShows(query) {
  const res = await fetch(`${BASE_URL}/search/shows?q=${encodeURIComponent(query)}`)
  if (!res.ok) throw new Error('Failed to search shows')
  const data = await res.json()
  // The search endpoint wraps each result as { score, show }. Unwrap it so
  // callers always work with a plain array of show objects.
  return data.map((entry) => entry.show)
}

export async function getAllShows(page = 0) {
  const res = await fetch(`${BASE_URL}/shows?page=${page}`)
  if (!res.ok) throw new Error('Failed to load shows')
  return res.json()
}

export async function getShowById(id) {
  const res = await fetch(`${BASE_URL}/shows/${id}`)
  if (!res.ok) throw new Error('Failed to load show details')
  return res.json()
}
