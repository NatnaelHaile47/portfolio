"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Users, Zap, Award } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Expertise",
      description:
        "End-to-end development from frontend interfaces to backend systems and database architecture",
    },
    {
      icon: Zap,
      title: "Fintech Specialist",
      description:
        "Deep experience in banking systems, payment gateways, and financial technology solutions",
    },
    {
      icon: Users,
      title: "Enterprise Scale",
      description:
        "Built systems serving thousands of users with high-volume transaction processing",
    },
    {
      icon: Award,
      title: "Quality Focused",
      description:
        "Committed to secure, scalable, and maintainable code with comprehensive testing",
    },
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-background via-background/90 to-background/95">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
       <div className="text-center mb-20">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Passionate about building innovative solutions that transform businesses and improve user experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: About text + badges */}
          <div className="space-y-8">
            <div className="bg-card/50 backdrop-blur-md rounded-3xl p-8 border border-card/10 shadow-lg hover:shadow-xl transition-all duration-300">
              <p className="text-lg leading-relaxed text-card-foreground text-pretty mb-6">
                I am a <span className="text-primary font-semibold">senior software developer</span> with 3+ years of
                experience building <span className="text-primary font-semibold">fintech platforms</span>, mobile money systems, core banking solutions, enterprise applications, and system integrations.
              </p>
              <p className="text-lg leading-relaxed text-card-foreground text-pretty mb-6">
                My expertise spans <span className="text-primary font-semibold">full-stack development</span>, focused on creating scalable, secure, and user-friendly solutions driving digital transformation.
              </p>
              <p className="text-lg leading-relaxed text-card-foreground text-pretty">
                I have delivered <span className="text-primary font-semibold">production-level systems</span> serving thousands of users, integrating complex APIs, and handling high-volume transactions and data processing.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Badge variant="secondary" className="px-4 py-2 hover:scale-105 transition-all duration-200">
                3+ Years Experience
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 hover:scale-105 transition-all duration-200">
                Fintech Expert
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 hover:scale-105 transition-all duration-200">
                Full-Stack Developer
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 hover:scale-105 transition-all duration-200">
                Enterprise Solutions
              </Badge>
            </div>
          </div>

          {/* Right: Highlights cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="group border-0 bg-card/50 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-tr from-primary/10 via-secondary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
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
