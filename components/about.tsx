"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Users, Zap, ShieldCheck, Server, Layers, Rocket } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Server,
      title: "Production Deployment Lead",
      description:
        "Full-cycle deployment specialist managing containerized Linux servers, Docker Compose, CI/CD pipelines, and zero-downtime database updates.",
    },
    {
      icon: ShieldCheck,
      title: "CBE Banking Systems",
      description:
        "Engineered CBE's Workflow Management and Lease Management systems with dynamic RBAC, meeting coordination, and Oracle / SQL Server databases.",
    },
    {
      icon: Layers,
      title: "Mackmil Public Platforms",
      description:
        "Delivered Oromia Prosperity Party Membership System with integrated Jitsi video conferencing and the municipal Kebele Management System.",
    },
    {
      icon: Rocket,
      title: "Fintech & Mobile Marketplace",
      description:
        "Developed Core Banking & BingetBirr for Binget Microfinance, and the Eaglist cross-platform marketplace mobile app for vehicles and properties.",
    },
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-background via-background/90 to-background/95">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with GitHub Gradient Text */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Senior Software Developer &amp; Deployment Specialist architecting secure, mission-critical systems across banking, government, and mobile platforms.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: About text + badges */}
          <div className="space-y-8">
            <div className="bg-card/50 backdrop-blur-md rounded-3xl p-8 border border-border/40 shadow-lg hover:shadow-xl transition-all duration-300">
              <p className="text-lg leading-relaxed text-card-foreground text-pretty mb-6">
                I am a <span className="text-primary font-semibold">senior software developer and deployment engineer</span> with{" "}
                <span className="text-primary font-semibold">4 years</span> of dedicated engineering experience architecting and delivering
                high-reliability production solutions.
              </p>
              <p className="text-lg leading-relaxed text-card-foreground text-pretty mb-6">
                My career encompasses building the Workflow and Lease Management systems for the{" "}
                <strong className="text-foreground font-semibold">Commercial Bank of Ethiopia (CBE)</strong>, leading the OPP
                Membership and Kebele systems at <strong className="text-foreground font-semibold">Mackmil P.L.C</strong>,
                implementing Core Banking and Mobile Money for <strong className="text-foreground font-semibold">Binget Microfinance</strong>,
                and developing the <strong className="text-foreground font-semibold">Eaglist</strong> mobile marketplace.
              </p>
              <p className="text-lg leading-relaxed text-card-foreground text-pretty">
                I manage the complete development and operations pipeline: modern frontend interfaces (Next.js, React, React Native), robust backends
                (.NET Core, Node.js), scalable databases (PostgreSQL, Oracle, SQL Server), and automated Linux server deployments.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Badge variant="secondary" className="px-4 py-2 hover:scale-105 transition-all duration-200 text-xs font-semibold">
                4 Years Experience
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 hover:scale-105 transition-all duration-200 text-xs font-semibold">
                Commercial Bank of Ethiopia
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 hover:scale-105 transition-all duration-200 text-xs font-semibold">
                Mackmil P.L.C
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 hover:scale-105 transition-all duration-200 text-xs font-semibold">
                Binget Microfinance
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 hover:scale-105 transition-all duration-200 text-xs font-semibold">
                Eaglist Marketplace
              </Badge>
            </div>
          </div>

          {/* Right: Highlights cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="group border border-border/40 bg-card/50 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="text-center p-0">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-tr from-primary/10 via-secondary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform border border-border/50">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2 group-hover:text-primary transition-colors text-base">
                    {highlight.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground text-pretty leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
