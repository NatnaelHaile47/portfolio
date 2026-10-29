"use client"

import { useState } from "react"
import { notFound, useParams } from "next/navigation"
import Link from "next/link"
import {
  projectsData,
  primaryGithub,
  additionalGithub,
  ProjectItem,
} from "@/lib/projects-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Server,
  Layers,
  Cpu,
  CheckCircle2,
  Globe,
  Smartphone,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Calendar,
  Building2,
  Code2,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ProjectDetailPage() {
  const params = useParams()
  const projectId = params?.id as string

  const project = projectsData.find((p) => p.id === projectId)
  if (!project) {
    notFound()
  }

  const currentIndex = projectsData.findIndex((p) => p.id === projectId)
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null
  const nextProject =
    currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null

  const [activeImageIndex, setActiveImageIndex] = useState(0)

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <Navigation />

      <main className="flex-1 pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        {/* Back Link */}
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="rounded-full -ml-3 text-muted-foreground hover:text-foreground">
            <Link href="/#experience" className="inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects</span>
            </Link>
          </Button>
        </div>

        {/* Hero Header */}
        <div className="space-y-4 mb-10 pb-8 border-b border-border">
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge variant="secondary" className="text-xs font-bold px-3 py-1 bg-secondary text-secondary-foreground">
              <Building2 className="w-3.5 h-3.5 mr-1.5 inline" />
              {project.organization}
            </Badge>

            <Badge
              variant="outline"
              className="text-xs font-medium border-emerald-500/40 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10"
            >
              <CheckCircle2 className="w-3 h-3 mr-1 inline" /> Production Deployed
            </Badge>

            <Badge variant="outline" className="text-xs font-medium">
              {project.platformType === "app" ? (
                <Smartphone className="w-3 h-3 mr-1 inline text-primary" />
              ) : (
                <Globe className="w-3 h-3 mr-1 inline text-primary" />
              )}
              {project.platformLabel}
            </Badge>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed text-pretty">
            {project.tagline || project.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild size="sm" className="rounded-full shadow-sm">
              <a href={primaryGithub} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Primary GitHub (NatnaelHaile47)
                <ExternalLink className="w-3.5 h-3.5 ml-1.5 opacity-60" />
              </a>
            </Button>

            <Button asChild variant="outline" size="sm" className="rounded-full">
              <a href={additionalGithub} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Additional GitHub (NatnaelWalletbirr)
                <ExternalLink className="w-3.5 h-3.5 ml-1.5 opacity-60" />
              </a>
            </Button>
          </div>
        </div>

        {/* Screenshots Showcase (if project has screenshots) */}
        {project.screenshots && project.screenshots.length > 0 && (
          <section className="mb-14 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold flex items-center gap-2">
                  <Maximize2 className="w-5 h-5 text-primary" />
                  Application Screenshots
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground pt-0.5">
                  Screenshots from the live production application.
                </p>
              </div>
              <span className="text-xs text-muted-foreground font-medium">
                {activeImageIndex + 1} of {project.screenshots.length}
              </span>
            </div>

            {/* Main Active Image Display */}
            <div className="rounded-2xl border border-border bg-slate-900/5 dark:bg-black/50 p-4 sm:p-8 flex flex-col items-center justify-center relative min-h-[420px] max-h-[650px] overflow-hidden">
              <img
                src={project.screenshots[activeImageIndex].src}
                alt={project.screenshots[activeImageIndex].title}
                className="max-h-[560px] w-auto object-contain rounded-xl shadow-xl transition-all duration-300"
              />

              {/* Prev / Next Floating Arrows */}
              {project.screenshots.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveImageIndex((prev) =>
                        prev === 0 ? project.screenshots!.length - 1 : prev - 1
                      )
                    }
                    className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 hover:bg-background border border-border shadow-md flex items-center justify-center text-foreground transition-all"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveImageIndex((prev) =>
                        prev === project.screenshots!.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 hover:bg-background border border-border shadow-md flex items-center justify-center text-foreground transition-all"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Caption */}
            <div className="text-center space-y-1 max-w-xl mx-auto py-1">
              <h3 className="font-heading text-sm sm:text-base font-bold text-foreground">
                {project.screenshots[activeImageIndex].title}
              </h3>
              {project.screenshots[activeImageIndex].description && (
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {project.screenshots[activeImageIndex].description}
                </p>
              )}
            </div>

            {/* Thumbnails Row */}
            <div className="flex gap-3 overflow-x-auto pb-2 pt-1 justify-center">
              {project.screenshots.map((s, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative rounded-xl overflow-hidden border-2 transition-all shrink-0 w-20 h-20 sm:w-24 sm:h-24 bg-muted ${
                    activeImageIndex === idx
                      ? "border-primary ring-2 ring-primary/30 scale-105"
                      : "border-border opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={s.src} alt={s.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Detailed Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">
                Detailed Overview
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed text-sm sm:text-base">
                {project.detailedOverview?.map((p, idx) => (
                  <p key={idx}>{p}</p>
                )) || <p>{project.description}</p>}
              </div>
            </section>

            {/* Key Capabilities */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                <Layers className="w-6 h-6 text-primary" />
                Delivered Capabilities &amp; Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl border border-border/80 bg-card/60 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-foreground leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Architecture Highlights */}
            {project.architectureHighlights && project.architectureHighlights.length > 0 && (
              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                  <Code2 className="w-6 h-6 text-indigo-500" />
                  Technical Architecture
                </h2>
                <div className="space-y-2.5">
                  {project.architectureHighlights.map((arch, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl border border-border/80 bg-muted/40 text-xs sm:text-sm text-foreground/90 leading-relaxed"
                    >
                      {arch}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-6">
            {/* Role & Deployment Card */}
            <Card className="border-border shadow-sm">
              <CardContent className="p-5 space-y-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                    <Cpu className="w-4 h-4 text-primary" />
                    Role &amp; Responsibility
                  </span>
                  <p className="text-sm font-semibold text-foreground mt-1">
                    {project.role}
                  </p>
                </div>

                <div className="pt-3 border-t border-border">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                    <Server className="w-4 h-4 text-emerald-500" />
                    Production Deployment
                  </span>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                    {project.deployment}
                  </p>
                  {project.deploymentDetails && (
                    <ul className="mt-2.5 space-y-1.5 text-xs text-muted-foreground">
                      {project.deploymentDetails.map((d, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-emerald-500 font-bold">•</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-3 border-t border-border">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Technologies Utilized
                  </span>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-md bg-muted text-foreground border border-border/60 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-border space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    GitHub Links
                  </span>
                  <div className="flex flex-col gap-1.5">
                    {project.githubLinks.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline flex items-center justify-between p-2 rounded-lg bg-muted/40 border border-border/50"
                      >
                        <span className="flex items-center gap-1.5">
                          <Github className="w-3.5 h-3.5" />
                          {link.label}
                        </span>
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Previous / Next Project Navigation */}
        <div className="pt-10 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevProject ? (
            <Button variant="outline" asChild className="rounded-full w-full sm:w-auto">
              <Link href={`/projects/${prevProject.id}`} className="inline-flex items-center gap-2">
                <ChevronLeft className="w-4 h-4" />
                <div className="text-left">
                  <div className="text-[10px] text-muted-foreground uppercase">Previous Project</div>
                  <div className="text-xs font-semibold text-foreground line-clamp-1">
                    {prevProject.title}
                  </div>
                </div>
              </Link>
            </Button>
          ) : (
            <div />
          )}

          {nextProject && (
            <Button variant="outline" asChild className="rounded-full w-full sm:w-auto ml-auto">
              <Link href={`/projects/${nextProject.id}`} className="inline-flex items-center gap-2 text-right">
                <div className="text-right">
                  <div className="text-[10px] text-muted-foreground uppercase">Next Project</div>
                  <div className="text-xs font-semibold text-foreground line-clamp-1">
                    {nextProject.title}
                  </div>
                </div>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
