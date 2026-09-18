export default function Footer() {
  return (
    <footer className="border-t border-reel-line/70 bg-reel-bg">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-reel-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-display text-base text-reel-text">MovieExplorer</p>
        <p>© 2026 MovieExplorer. Movie data courtesy of TVMaze.</p>
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
