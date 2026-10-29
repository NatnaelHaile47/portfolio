"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projectsData } from "@/lib/projects-data"
import {
  Globe,
  Smartphone,
  ArrowRight,
  Building2,
  ExternalLink,
} from "lucide-react"

export function Experience() {
  const [activeTab, setActiveTab] = useState<"all" | "web" | "app">("all")

  const tabs: { id: "all" | "web" | "app"; label: string; count: number }[] = [
    { id: "all", label: "All Projects", count: projectsData.length },
    { id: "web", label: "Web Systems", count: projectsData.filter((p) => p.platformType === "web").length },
    { id: "app", label: "Mobile Apps", count: projectsData.filter((p) => p.platformType === "app").length },
  ]

  const filteredProjects =
    activeTab === "all"
      ? projectsData
      : projectsData.filter((project) => project.platformType === activeTab)

  // Map each project to a preview thumbnail
  const getProjectImage = (id: string, screenshots?: { src: string }[]) => {
    if (screenshots && screenshots.length > 0) {
      return screenshots[0].src
    }
    switch (id) {
      case "cbe-workflow":
        return "/images/projects/cbe-workflow/cbe-dashboard.png"
      case "cbe-lease":
        return "/property-management-system-with-listings-and-searc.jpg"
      case "opp-membership":
        return "/opp.png"
      case "kebele-management":
        return "/socio-economic.png"
      case "binget-core-banking":
        return "/corebanking.png"
      case "bingetbirr-wallet":
        return "/bingetbirr.jpg"
      case "bingetbirr-cms":
        return "/cms.png"
      case "one-window-properties":
        return "/property-management-system-with-listings-and-searc.jpg"
      case "eaglist-marketplace":
        return "/images/projects/eaglist/eaglist-home.png"
      default:
        return "/placeholder.jpg"
    }
  }

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-background via-background/90 to-background/95">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with GitHub Gradient Style */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Featured Projects &amp; Deployments
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Production systems engineered and deployed across the Commercial Bank of Ethiopia (CBE), Mackmil P.L.C, Binget Microfinance, and Eaglist.
            Click any project to view its full dedicated page with architecture, deployment specs, and screenshots.
          </p>
        </div>

        {/* Tab Division: All | Web | App */}
        <div className="flex justify-center items-center gap-3 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab(tab.id)}
              className="rounded-full px-5 py-2 transition-all duration-300 font-medium"
            >
              {tab.label}
              <span
                className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                  activeTab === tab.id
                    ? "bg-primary-foreground/20 text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {tab.count}
              </span>
            </Button>
          ))}
        </div>

        {/* Featured Projects Grid with GitHub Card UI */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const projectImg = getProjectImage(project.id, project.screenshots)

            return (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-3xl"
              >
                <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500 border border-border/40 bg-card/50 backdrop-blur-md rounded-3xl flex flex-col justify-between hover:-translate-y-1.5">
                  <div>
                    {/* Project Preview Image */}
                    <div className="relative h-48 w-full overflow-hidden rounded-t-3xl bg-muted/60">
                      <Image
                        src={projectImg}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      {/* Badges on image */}
                      <div className="absolute top-3 left-3 right-3 flex justify-between items-center gap-2">
                        <Badge variant="secondary" className="text-xs font-semibold px-2.5 py-1 bg-background/80 backdrop-blur-md border border-border/50 text-foreground">
                          <Building2 className="w-3 h-3 mr-1 inline" />
                          {project.organization}
                        </Badge>
                        <Badge variant="outline" className="text-[11px] font-medium bg-background/80 backdrop-blur-md border border-border/50 text-foreground">
                          {project.platformType === "app" ? (
                            <Smartphone className="w-3 h-3 text-primary mr-1 inline" />
                          ) : (
                            <Globe className="w-3 h-3 text-primary mr-1 inline" />
                          )}
                          {project.platformLabel}
                        </Badge>
                      </div>

                      {/* View prompt */}
                      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-xs font-semibold text-white bg-primary/90 px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
                          Open Details <ExternalLink className="w-3 h-3" />
                        </span>
                      </div>
                    </div>

                    <CardHeader className="pb-3 pt-5">
                      <CardTitle className="text-xl font-heading group-hover:text-primary transition-colors line-clamp-1">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-xs sm:text-sm text-muted-foreground line-clamp-2 pt-1 leading-relaxed text-pretty">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                  </div>

                  <CardContent className="pt-0 space-y-4">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-muted text-foreground border border-border/60"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-[11px] font-medium px-2 py-0.5 text-muted-foreground">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Dedicated Page Link Indicator */}
                    <div className="pt-3 border-t border-border/40 flex items-center justify-between text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform">
                      <span>View Full Project Page &amp; Screenshots</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
