import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Listing from './pages/Listing.jsx'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-reel-bg text-reel-text">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Listing />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
