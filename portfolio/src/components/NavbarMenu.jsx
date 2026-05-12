import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const navLinks = [
  { label: 'Home',           href: '#home' },
  { label: 'About',          href: '#about' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Graphic Design', href: '#design' },
  { label: 'Contact',        href: '#contact' },
]

const scrollToSection = (e, href) => {
  e.preventDefault()
  const target = document.querySelector(href)
  if (!target) return
  const navHeight = 72
  const top = target.getBoundingClientRect().top + window.scrollY - navHeight
  window.scrollTo({ top, behavior: 'smooth' })
}

const NavbarMenu = () => {
  const [scrolled, setScrolled] = useState(false)
  const [active,   setActive]   = useState('#home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map(l => document.querySelector(l.href)).filter(Boolean)
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { threshold: 0.35 }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <Navbar $scrolled={scrolled}>
      <Brand>SS</Brand>

      <Links>
        {navLinks.map(({ label, href }) => (
          <NavLink
            key={href}
            href={href}
            $active={active === href}
            onClick={e => scrollToSection(e, href)}
          >
            {label}
          </NavLink>
        ))}
      </Links>

      <Hamburger onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
        <span />
        <span />
        <span />
      </Hamburger>

      <MobileMenu $open={menuOpen}>
        {navLinks.map(({ label, href }) => (
          <MobileLink
            key={href}
            href={href}
            $active={active === href}
            onClick={e => { scrollToSection(e, href); setMenuOpen(false) }}
          >
            {label}
          </MobileLink>
        ))}
      </MobileMenu>
    </Navbar>
  )
}

export default NavbarMenu


const Navbar = styled.nav`
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ $scrolled }) => ($scrolled ? '14px 6%' : '22px 6%')};
  background: ${({ $scrolled }) => $scrolled ? 'rgba(11, 29, 58, 0.88)' : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(14px)' : 'none')};
  box-shadow: ${({ $scrolled }) => $scrolled ? '0 2px 24px rgba(0,0,0,0.45)' : 'none'};
  transition: padding 0.3s ease, background 0.35s ease, box-shadow 0.35s ease;
`

const Brand = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: #38bdf8;
  letter-spacing: 2px;
  cursor: default;
  user-select: none;
`

const Links = styled.div`
  display: flex;
  gap: clamp(20px, 4vw, 50px);

  @media (max-width: 768px) { display: none; }
`

const NavLink = styled.a`
  color: ${({ $active }) => ($active ? '#38bdf8' : 'white')};
  font-size: clamp(14px, 1.4vw, 17px);
  font-weight: ${({ $active }) => ($active ? '600' : '400')};
  position: relative;
  transition: color 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px; left: 0;
    width: ${({ $active }) => ($active ? '100%' : '0%')};
    height: 2px;
    background: #38bdf8;
    transition: width 0.3s ease;
  }

  &:hover { color: #38bdf8; }
  &:hover::after { width: 100%; }
`

const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;

  span {
    display: block;
    width: 24px; height: 2px;
    background: white;
    border-radius: 2px;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  @media (max-width: 768px) { display: flex; }
`

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%; left: 0; right: 0;
    background: rgba(11, 29, 58, 0.97);
    backdrop-filter: blur(16px);
    padding: ${({ $open }) => ($open ? '20px 0' : '0')};
    max-height: ${({ $open }) => ($open ? '400px' : '0')};
    overflow: hidden;
    transition: max-height 0.35s ease, padding 0.35s ease;
  }
`

const MobileLink = styled.a`
  color: ${({ $active }) => ($active ? '#38bdf8' : 'white')};
  font-size: 17px;
  font-weight: ${({ $active }) => ($active ? '600' : '400')};
  padding: 14px 8%;
  border-bottom: 1px solid rgba(255,255,255,0.07);
  transition: color 0.2s ease, background 0.2s ease;

  &:hover {
    color: #38bdf8;
    background: rgba(56, 189, 248, 0.06);
  }
`