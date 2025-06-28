"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Calendar, Menu, X } from "lucide-react"

const Header = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleBookCall = () => {
    window.open("https://calendly.com/angusdev-aeworks/30min", "_blank")
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo/Name */}
          <div className="flex-shrink-0 min-w-0 max-w-[200px] sm:max-w-none">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent truncate">
              {user.fullName || "Portfolio"}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#about"
              className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
            >
              Contact
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
            <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm font-medium whitespace-nowrap">{user.phone}</span>
            </div>
            <Button
              onClick={handleBookCall}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
              Book a Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex-shrink-0"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200 dark:border-slate-700">
            <nav className="flex flex-col space-y-4">
              <a
                href="#about"
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#skills"
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="#portfolio"
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 mb-3 px-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm font-medium">{user.phone || "+234 810 995 9313"}</span>
                </div>
                <Button
                  onClick={handleBookCall}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full"
                >
                  <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                  Book a Call
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
