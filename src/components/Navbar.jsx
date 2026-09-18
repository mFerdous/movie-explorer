import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-reel-line/70 bg-reel-bg/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-xl font-medium tracking-tight text-reel-text"
        >
          <span aria-hidden="true" className="text-reel-gold">
            ●
          </span>
          MovieExplorer
        </Link>

        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `hidden text-sm sm:block ${
                isActive ? 'text-reel-text' : 'text-reel-muted hover:text-reel-text'
              } transition-colors`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-reel-gold text-reel-bg'
                  : 'bg-reel-surface text-reel-text hover:bg-reel-surface2'
              }`
            }
          >
            Browse movies
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
