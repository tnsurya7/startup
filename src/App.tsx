import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Services from './pages/Services'
import Team from './pages/Team'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import CustomCursor from './components/CustomCursor'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen custom-cursor">
          <CustomCursor />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <FloatingWhatsApp />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
