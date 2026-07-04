'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, SITE_NAME } from '@/lib/data'
import { useScrollPosition } from '@/hooks/useScrollPosition'

export default function Navbar() {
  const scrollY = useScrollPosition()
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = scrollY > 10

  useEffect(() => {
    if (!menuOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [menuOpen])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease',
        backgroundColor: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 1px 8px rgba(0,0,0,0.08)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('#home')}
          className="text-lg font-bold tracking-tight"
          style={{ color: scrolled ? '#111827' : '#ffffff' }}
          aria-label="Go to home"
        >
          {SITE_NAME}
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium transition-colors hover:text-[#2563EB]"
              style={{ color: scrolled ? '#374151' : 'rgba(255,255,255,0.9)' }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            className="ml-2 px-4 py-2 rounded-lg text-sm font-semibold bg-[#2563EB] text-white hover:bg-[#1d4ed8] transition-colors min-h-[44px] min-w-[44px]"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-md min-h-[44px] min-w-[44px] flex items-center justify-center"
          style={{ color: scrolled ? '#111827' : '#ffffff' }}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-white z-40 flex flex-col pt-20 px-6 gap-4"
          style={{ top: '64px' }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setMenuOpen(false)
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-base font-medium text-left py-3 border-b border-gray-100 text-[#374151] hover:text-[#2563EB] transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            className="mt-4 px-4 py-3 rounded-lg text-base font-semibold bg-[#2563EB] text-white hover:bg-[#1d4ed8] transition-colors min-h-[44px]"
          >
            Book Now
          </button>
        </div>
      )}
    </header>
  )
}
