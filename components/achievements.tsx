"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, Zap } from "lucide-react"

export function Achievements() {
  const achievements = [
    {
      icon: <Users className="h-10 w-10 text-secondary" />,
      title: "Production-Level Systems",
      description: "Delivered fintech systems used by thousands of customers daily, membership management systems, and socio-economic management systems currently in use.",
    },
    {
      icon: <Zap className="h-10 w-10 text-secondary" />,
      title: "API Integrations",
      description: "Successfully integrated multiple third-party APIs and payment gateways.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-secondary" />,
      title: "Digital Transformation",
      description: "Contributed to digital transformation in finance and real estate sectors.",
    },
  ]

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-background via-background/90 to-background/95">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Key Achievements
        </h2>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="group border-0 bg-card/50 backdrop-blur-md rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <CardHeader className="flex flex-col items-center mb-4">
                <div className="mb-4">{achievement.icon}</div>
                <CardTitle className="text-lg font-heading text-center group-hover:text-primary transition-colors">
                  {achievement.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-pretty text-muted-foreground leading-relaxed">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
