"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X, Github, ExternalLink } from "lucide-react"
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
    { href: "/#about", label: "About" },
    { href: "/#skills", label: "Skills" },
    { href: "/#experience", label: "Projects" },
    { href: "/#achievements", label: "Achievements" },
    { href: "/#contact", label: "Contact" },
  ]

  const primaryGithub = "https://github.com/NatnaelHaile47"
  const additionalGithub = "https://github.com/NatnaelWalletbirr"

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-sm py-3"
          : "bg-background/60 backdrop-blur-sm border-b border-border/40 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo / Monogram */}
          <a href="/" className="flex items-center space-x-2.5 group">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-secondary text-primary-foreground font-heading font-extrabold flex items-center justify-center text-sm shadow-md group-hover:scale-105 transition-transform">
              NH
            </span>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg tracking-tight leading-none group-hover:text-primary transition-colors">
                Natnael Haile
              </span>
              <span className="text-[11px] text-muted-foreground font-normal leading-tight hidden sm:inline">
                Senior Software Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all duration-150"
              >
                {item.label}
              </a>
            ))}

            {/* GitHub Links */}
            <div className="flex items-center space-x-1.5 pl-3 border-l border-border/60">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="rounded-full text-xs font-semibold px-3 h-8 shadow-sm"
                title="Primary GitHub: NatnaelHaile47"
              >
                <a href={primaryGithub} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5" />
                  <span>NatnaelHaile47</span>
                </a>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full h-8 w-8 text-muted-foreground hover:text-foreground"
                title="Additional GitHub: NatnaelWalletbirr"
              >
                <a href={additionalGithub} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            </div>

            {/* Theme Toggle */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full h-8 w-8 ml-1"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4 text-amber-400" />
                ) : (
                  <Moon className="h-4 w-4 text-slate-700" />
                )}
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full h-8 w-8"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            )}

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full h-9 w-9"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden border-t border-border mt-3 pt-3 pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-border/50 flex flex-col gap-2">
              <a
                href={primaryGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-lg text-xs font-semibold text-primary hover:bg-muted/50 flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub: NatnaelHaile47 (Primary)
              </a>
              <a
                href={additionalGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-lg text-xs font-semibold text-muted-foreground hover:bg-muted/50 flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub: NatnaelWalletbirr (Additional)
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
