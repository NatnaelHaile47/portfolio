"use client"

import { Button } from "@/components/ui/button"
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
} from "lucide-react"

export function Hero() {
  const primaryGithubUrl = "https://github.com/NatnaelHaile47"
  const additionalGithubUrl = "https://github.com/NatnaelWalletbirr"
  const linkedinUrl = "https://www.linkedin.com/in/natnael-haile-72614b255/"
  const emailUrl = "mailto:natihaile6568@gmail.com"

  return (
    <section className="relative min-h-[88vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 overflow-hidden">
      {/* Subtle modern background gradient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-secondary/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Avatar / Monogram */}
        <div className="relative mb-6 mx-auto w-28 h-28 sm:w-32 sm:h-32">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary via-accent to-secondary opacity-70 blur-sm" />
          <div className="relative w-full h-full rounded-full bg-card border-2 border-border flex items-center justify-center shadow-xl">
            <span className="font-heading text-3xl sm:text-4xl font-extrabold bg-gradient-to-br from-foreground via-foreground/90 to-primary bg-clip-text text-transparent">
              NH
            </span>
          </div>
        </div>

        {/* Main Heading & Titles */}
        <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 text-balance">
          Natnael Haile
        </h1>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-foreground/80 mb-6 flex items-center justify-center gap-2 flex-wrap">
          <span>Senior Software Developer</span>
          <span className="text-primary font-bold hidden sm:inline">•</span>
          <span className="text-primary">Full-Stack &amp; Deployment Engineer</span>
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10 text-pretty">
          Engineering and deploying production systems for the{" "}
          <strong className="text-foreground font-semibold">Commercial Bank of Ethiopia (CBE)</strong>,{" "}
          <strong className="text-foreground font-semibold">Mackmil P.L.C</strong>,{" "}
          <strong className="text-foreground font-semibold">Binget Microfinance</strong>, and{" "}
          <strong className="text-foreground font-semibold">Eaglist</strong>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="w-full sm:w-auto rounded-full shadow-lg group" asChild>
            <a href="#experience" className="inline-flex items-center">
              Explore Projects &amp; Deployments
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </Button>

          <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full bg-card/60 backdrop-blur-sm" asChild>
            <a href="#contact">Contact Me</a>
          </Button>

          {/* GitHub Links */}
          <div className="flex gap-2 w-full sm:w-auto justify-center">
            <Button variant="secondary" size="lg" className="rounded-full flex-1 sm:flex-initial" asChild>
              <a href={primaryGithubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                <Github className="mr-2 h-4 w-4" />
                NatnaelHaile47
                <ExternalLink className="ml-1.5 h-3.5 w-3.5 opacity-60" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full" asChild title="Additional GitHub (NatnaelWalletbirr)">
              <a href={additionalGithubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                <Github className="h-4 w-4" />
                <span className="sr-only">Additional GitHub (NatnaelWalletbirr)</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Quick Metrics Bar with 4 Years Experience */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-6 border-t border-border/60">
          <div className="p-3 rounded-xl bg-card/40 border border-border/40">
            <div className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground">4</div>
            <div className="text-xs text-muted-foreground mt-0.5">Years Experience</div>
          </div>
          <div className="p-3 rounded-xl bg-card/40 border border-border/40">
            <div className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground">9+</div>
            <div className="text-xs text-muted-foreground mt-0.5">Production Systems</div>
          </div>
          <div className="p-3 rounded-xl bg-card/40 border border-border/40">
            <div className="font-heading text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">100%</div>
            <div className="text-xs text-muted-foreground mt-0.5">Production Deployed</div>
          </div>
          <div className="p-3 rounded-xl bg-card/40 border border-border/40">
            <div className="font-heading text-2xl sm:text-3xl font-extrabold text-primary">CBE</div>
            <div className="text-xs text-muted-foreground mt-0.5">Workflow &amp; Lease</div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center space-x-4 mt-8">
          <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10 hover:text-primary" title="Primary GitHub: NatnaelHaile47">
            <a href={primaryGithubUrl} target="_blank" rel="noopener noreferrer" aria-label="Natnael's Primary GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10 hover:text-primary" title="Additional GitHub: NatnaelWalletbirr">
            <a href={additionalGithubUrl} target="_blank" rel="noopener noreferrer" aria-label="Natnael's Additional GitHub">
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10 hover:text-primary" title="LinkedIn Profile">
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="Natnael's LinkedIn Profile">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10 hover:text-primary" title="Direct Email">
            <a href={emailUrl} aria-label="Email Natnael directly">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
