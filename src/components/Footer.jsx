import { Link } from 'react-router-dom'
import logo from '../assets/movie-explorer-logo.svg'

export default function Footer() {
  return (
    <footer className="border-t border-reel-line/70 bg-reel-bg">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-reel-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-base text-reel-text transition-opacity hover:opacity-80"
        >
          <img src={logo} alt="MovieExplorer" className="h-10 w-10" />
          <span>MovieExplorer</span>
        </Link>
        <p>© 2026 MovieExplorer. Movie data courtesy of OMDb.</p>
        <a
          href="https://github.com/mFerdous"
          target="_blank"
          rel="noreferrer"
          className="text-reel-muted transition-colors hover:text-reel-gold"
        >
          GitHub
        </a>
      </div>
    </footer>
  )
}
