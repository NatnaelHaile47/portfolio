"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck, Users, Server, Smartphone } from "lucide-react"

export function Achievements() {
  const achievements = [
    {
      icon: ShieldCheck,
      title: "Commercial Bank of Ethiopia (CBE)",
      description:
        "Engineered and deployed enterprise-grade Workflow Management and Property Lease systems with dynamic RBAC, meeting agendas, and Oracle / SQL Server databases.",
    },
    {
      icon: Users,
      title: "Mackmil P.L.C (OPP & Kebele)",
      description:
        "Architected and deployed the Oromia Prosperity Party Membership platform with integrated Jitsi Meet video conferencing and the municipal Kebele Management System.",
    },
    {
      icon: Server,
      title: "Binget Microfinance (Core Banking)",
      description:
        "Developed central Core Banking and BingetBirr Mobile Money platform with real-time transactional processing, general ledgering, and administrative CMS.",
    },
    {
      icon: Smartphone,
      title: "Eaglist Mobile Application",
      description:
        "Designed, built, and launched the Eaglist mobile app for vehicle, apartment, and electronics commerce, connecting buyers and sellers with real-time comparisons.",
    },
  ]

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-background via-background/90 to-background/95">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with GitHub Gradient Text */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Key Achievements &amp; Production Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Proven track record delivering reliable, secure, and production-tested systems for national banks, government entities, and mobile users.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <Card
              key={index}
              className="border border-border/40 bg-card/50 backdrop-blur-md rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <CardHeader className="p-0 pb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-primary/10 via-secondary/20 to-accent/20 flex items-center justify-center mb-4 border border-border/50 text-primary">
                  <item.icon className="h-7 w-7" />
                </div>
                <CardTitle className="text-lg font-heading leading-snug text-foreground">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 pt-1">
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
