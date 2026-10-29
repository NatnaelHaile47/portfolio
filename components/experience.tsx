"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  projectsData,
  ProjectItem,
} from "@/lib/projects-data"
import {
  Globe,
  Smartphone,
  ArrowRight,
  Building2,
  CheckCircle2,
} from "lucide-react"

export function Experience() {
  const [activeTab, setActiveTab] = useState<"all" | "web" | "app">("all")

  const tabs: { id: "all" | "web" | "app"; label: string; count: number }[] = [
    { id: "all", label: "All", count: projectsData.length },
    { id: "web", label: "Web", count: projectsData.filter((p) => p.platformType === "web").length },
    { id: "app", label: "App", count: projectsData.filter((p) => p.platformType === "app").length },
  ]

  const filteredProjects =
    activeTab === "all"
      ? projectsData
      : projectsData.filter((project) => project.platformType === activeTab)

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge
            variant="outline"
            className="mb-3 px-3 py-1 text-xs uppercase tracking-wider font-semibold border-primary/30 text-primary"
          >
            Engineering Portfolio
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Projects &amp; Deployments
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-pretty">
            Production systems engineered and deployed across banking, government, enterprise, and mobile platforms.
            Click any project to view its full dedicated page with architecture, deployment specs, and screenshots.
          </p>
        </div>

        {/* Tab Division: All | Web | App */}
        <div className="flex justify-center items-center gap-2 mb-10">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab(tab.id)}
              className="rounded-full px-6 transition-all duration-200"
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

        {/* Compact Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
            >
              <Card className="h-full border border-border/80 hover:border-primary/60 bg-card hover:shadow-lg transition-all duration-200 flex flex-col justify-between overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs font-semibold px-2.5 py-0.5">
                      <Building2 className="w-3 h-3 mr-1 inline" />
                      {project.organization}
                    </Badge>
                    <span className="text-[11px] font-medium text-muted-foreground flex items-center gap-1">
                      {project.platformType === "app" ? (
                        <Smartphone className="w-3 h-3 text-primary" />
                      ) : (
                        <Globe className="w-3 h-3 text-primary" />
                      )}
                      {project.platformLabel}
                    </span>
                  </div>

                  <CardTitle className="text-lg font-heading group-hover:text-primary transition-colors line-clamp-1">
                    {project.title}
                  </CardTitle>

                  <CardDescription className="text-xs text-muted-foreground line-clamp-2 pt-1 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 space-y-3">
                  {/* Tech Chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-medium px-2 py-0.5 rounded bg-muted text-foreground border border-border/60"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-[10px] font-medium px-1.5 py-0.5 text-muted-foreground">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Dedicated Page Link Indicator */}
                  <div className="pt-2 border-t border-border/40 flex items-center justify-between text-xs font-semibold text-primary group-hover:translate-x-0.5 transition-transform">
                    <span>View Project Details &amp; Screenshots</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
