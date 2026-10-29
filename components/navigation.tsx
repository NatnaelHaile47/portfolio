"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X, Github, ArrowUpRight } from "lucide-react"
import { useTheme } from "next-themes"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Projects" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" },
  ]

  const primaryGithub = "https://github.com/NatnaelHaile47"
  const additionalGithub = "https://github.com/NatnaelWalletbirr"

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-sm py-3"
          : "bg-background/40 backdrop-blur-sm border-b border-border/40 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo / Monogram */}
          <a href="#" className="flex items-center space-x-2 group">
            <span className="w-8 h-8 rounded-lg bg-primary text-primary-foreground font-heading font-extrabold flex items-center justify-center text-sm shadow-sm group-hover:scale-105 transition-transform">
              NH
            </span>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base sm:text-lg tracking-tight leading-none group-hover:text-primary transition-colors">
                Natnael Haile
              </span>
              <span className="text-[11px] text-muted-foreground font-normal leading-tight hidden sm:inline">
                Senior Software Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-1.5 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all duration-150"
              >
                {item.label}
              </a>
            ))}

            <div className="h-4 w-px bg-border mx-2" />

            {/* GitHub Links */}
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="sm" asChild className="rounded-full text-xs font-medium px-3">
                <a href={primaryGithub} target="_blank" rel="noopener noreferrer" className="inline-flex items-center" title="Primary GitHub (NatnaelHaile47)">
                  <Github className="mr-1.5 h-3.5 w-3.5" />
                  <span>NatnaelHaile47</span>
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-60" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="rounded-full h-8 w-8" title="Additional GitHub (NatnaelWalletbirr)">
                <a href={additionalGithub} target="_blank" rel="noopener noreferrer">
                  <Github className="h-3.5 w-3.5 text-muted-foreground" />
                </a>
              </Button>
            </div>

            {/* Theme Toggle */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full h-9 w-9 text-muted-foreground hover:text-foreground"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            )}

            {/* Quick Contact CTA */}
            <Button size="sm" asChild className="rounded-full px-4 shadow-sm ml-1">
              <a href="#contact">Hire Me</a>
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center space-x-2">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full h-9 w-9"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            )}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg h-9 w-9"
              aria-label="Open menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden py-4 px-2 mt-3 rounded-2xl bg-card border border-border shadow-xl space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2.5 rounded-xl text-sm font-medium text-foreground hover:bg-muted transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <div className="pt-2 border-t border-border/80 flex flex-col gap-2">
              <Button variant="outline" asChild className="w-full justify-center rounded-xl text-xs">
                <a href={primaryGithub} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub: NatnaelHaile47 (Primary)
                </a>
              </Button>
              <Button variant="outline" asChild className="w-full justify-center rounded-xl text-xs">
                <a href={additionalGithub} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub: NatnaelWalletbirr (Additional)
                </a>
              </Button>
              <Button asChild className="w-full justify-center rounded-xl">
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  Get In Touch
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
