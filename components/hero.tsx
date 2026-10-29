"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const primaryGithubUrl = "https://github.com/NatnaelHaile47"
  const additionalGithubUrl = "https://github.com/NatnaelWalletbirr"
  const linkedinUrl = "https://www.linkedin.com/in/natnael-haile-72614b255/"
  const emailUrl = "mailto:natihaile6568@gmail.com"

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/Natnael_Haile CV.pdf"
    link.download = "Natnael_Haile_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-16 pt-24 pb-16 overflow-hidden">
      {/* Animated gradient background from GitHub design */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-gradient" />

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="text-center lg:text-left space-y-6">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Natnael Haile
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl text-foreground font-semibold flex items-center justify-center lg:justify-start gap-2 flex-wrap">
            <span>Senior Software Developer</span>
            <span className="text-primary font-bold hidden sm:inline">•</span>
            <span className="text-primary">Full-Stack &amp; Deployment Engineer</span>
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed text-pretty">
            Engineering scalable systems for the{" "}
            <strong className="text-foreground font-semibold">Commercial Bank of Ethiopia (CBE)</strong>,{" "}
            <strong className="text-foreground font-semibold">Mackmil P.L.C</strong>,{" "}
            <strong className="text-foreground font-semibold">Binget Microfinance</strong>, and{" "}
            <strong className="text-foreground font-semibold">Eaglist</strong> with 4 years of proven production delivery.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start items-center">
            <Button
              size="lg"
              className="group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full"
              asChild
            >
              <a href="#experience" className="flex items-center">
                View Projects
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="hover:scale-105 transition-all duration-300 border-2 rounded-full bg-card/60 backdrop-blur-sm"
              asChild
            >
              <a href="#contact" className="flex items-center">
                Contact Me
                <Mail className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <Button
              variant="secondary"
              size="lg"
              className="hover:scale-105 transition-all duration-300 shadow-md rounded-full"
              onClick={handleDownload}
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          {/* Quick Metrics Bar with 4 Years Experience */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/40 max-w-lg mx-auto lg:mx-0">
            <div className="p-3 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 text-center">
              <div className="font-heading text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                4
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">Years Experience</div>
            </div>
            <div className="p-3 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 text-center">
              <div className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground">
                10+
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">Production Systems</div>
            </div>
            <div className="p-3 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 text-center">
              <div className="font-heading text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                100%
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">Production Deployed</div>
            </div>
          </div>
        </div>

        {/* Right side profile image + socials */}
        <div className="flex flex-col items-center lg:items-end space-y-6">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-primary/40 animate-float bg-muted">
            <Image
              src="/profile.jpg"
              alt="Natnael Haile"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Social icons under image */}
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href={primaryGithubUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Primary GitHub: NatnaelHaile47"
              className="h-12 w-12 flex items-center justify-center rounded-full bg-background/70 backdrop-blur-md shadow-md border border-border hover:scale-110 hover:border-primary transition-all text-foreground"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={additionalGithubUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Additional GitHub: NatnaelWalletbirr"
              className="h-12 w-12 flex items-center justify-center rounded-full bg-background/70 backdrop-blur-md shadow-md border border-border hover:scale-110 hover:border-primary transition-all text-muted-foreground hover:text-foreground"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              className="h-12 w-12 flex items-center justify-center rounded-full bg-background/70 backdrop-blur-md shadow-md border border-border hover:scale-110 hover:border-primary transition-all text-foreground"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={emailUrl}
              title="Direct Email (natihaile6568@gmail.com)"
              className="h-12 w-12 flex items-center justify-center rounded-full bg-background/70 backdrop-blur-md shadow-md border border-border hover:scale-110 hover:border-primary transition-all text-foreground"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
