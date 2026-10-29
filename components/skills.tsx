"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Server, Smartphone, Database, Terminal, ShieldCheck } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      category: "Backend & Enterprise APIs",
      icon: Server,
      skills: [
        ".NET Core / ASP.NET",
        "Node.js",
        "Next.js API Routes",
        "Express.js",
        "Java",
        "RESTful APIs",
        "Jitsi Meet Video API",
        "Dynamic RBAC",
      ],
      color: "bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border-emerald-400/40",
    },
    {
      category: "Frontend & Mobile Development",
      icon: Smartphone,
      skills: [
        "React Native",
        "Next.js (App Router)",
        "React",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "Cross-Platform Mobile (Android/iOS)",
      ],
      color: "bg-blue-500/15 text-blue-800 dark:text-blue-300 border-blue-400/40",
    },
    {
      category: "Databases & Architecture",
      icon: Database,
      skills: [
        "PostgreSQL",
        "Oracle DB (CBE Workflow)",
        "Microsoft SQL Server (CBE Lease)",
        "MySQL",
        "MongoDB",
        "Database Migrations",
        "ACID Transactions",
      ],
      color: "bg-purple-500/15 text-purple-800 dark:text-purple-300 border-purple-400/40",
    },
    {
      category: "DevOps & Cloud Deployment",
      icon: Terminal,
      skills: [
        "Docker & Docker Compose",
        "CI/CD Pipelines",
        "Linux Server Administration",
        "Nginx Reverse Proxy",
        "Git & GitHub Workflows",
        "SSL/TLS Hardening",
      ],
      color: "bg-orange-500/15 text-orange-800 dark:text-orange-300 border-orange-400/40",
    },
    {
      category: "Fintech, Banking & Public Systems",
      icon: ShieldCheck,
      skills: [
        "CBE Workflow & Lease Systems",
        "Core Banking Architecture",
        "BingetBirr Mobile Money",
        "OPP Membership Platform",
        "Kebele Resident Registry",
        "Eaglist Marketplace",
      ],
      color: "bg-amber-500/15 text-amber-800 dark:text-amber-300 border-amber-400/40",
    },
  ]

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-background via-background/90 to-background/95">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with GitHub Gradient Text */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Skills &amp; Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Enterprise toolkit utilized in production across banking platforms, public registries, and mobile applications.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group border border-border/40 bg-card/50 backdrop-blur-md rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-0 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform text-primary border border-primary/20">
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-4 text-center group-hover:text-primary transition-colors text-foreground">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className={`text-xs px-3 py-1 font-semibold hover:scale-105 transition-all duration-200 border ${category.color}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics with 4 Years Experience */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-12 pt-8 border-t border-border/40">
          <div className="space-y-1.5 p-4 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/40">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              4
            </div>
            <div className="text-sm font-medium text-muted-foreground">Years Experience</div>
          </div>
          <div className="space-y-1.5 p-4 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/40">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              20+
            </div>
            <div className="text-sm font-medium text-muted-foreground">Technologies &amp; Tools</div>
          </div>
          <div className="space-y-1.5 p-4 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/40">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              10+
            </div>
            <div className="text-sm font-medium text-muted-foreground">Production Systems</div>
          </div>
          <div className="space-y-1.5 p-4 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/40">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              100%
            </div>
            <div className="text-sm font-medium text-muted-foreground">Deployed &amp; Verified</div>
          </div>
        </div>
      </div>
    </section>
  )
}
