import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck, Users, Server, Smartphone } from "lucide-react"

export function Achievements() {
  const achievements = [
    {
      icon: <ShieldCheck className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />,
      title: "Commercial Bank of Ethiopia (CBE)",
      description:
        "Engineered and deployed enterprise-grade Workflow Management and Property Lease Approval systems with dynamic RBAC, meeting coordination, and Oracle / SQL Server databases.",
    },
    {
      icon: <Users className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />,
      title: "Mackmil P.L.C (OPP & Kebele)",
      description:
        "Architected and deployed the Oromia Prosperity Party Membership platform with integrated Jitsi Meet video conferencing and the municipal Kebele Management System.",
    },
    {
      icon: <Server className="h-7 w-7 text-blue-600 dark:text-blue-400" />,
      title: "Binget Microfinance (Core Banking)",
      description:
        "Developed central Core Banking and BingetBirr Mobile Money platform with real-time transactional processing, financial ledgering, and administrative CMS.",
    },
    {
      icon: <Smartphone className="h-7 w-7 text-amber-600 dark:text-amber-400" />,
      title: "Eaglist Mobile Application",
      description:
        "Designed, built, and launched the Eaglist mobile app for vehicle, apartment, and electronics commerce, connecting buyers and sellers with real-time comparisons.",
    },
  ]

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="outline" className="mb-3 px-3 py-1 text-xs uppercase tracking-wider font-semibold border-primary/30 text-primary">
            Key Impact
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Proven Delivery &amp; Results
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-pretty">
            Proven track record delivering reliable, secure, and production-tested systems for national banks, government entities, and mobile users.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <Card
              key={index}
              className="text-left border-border/80 hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card/60 backdrop-blur-sm flex flex-col justify-between"
            >
              <CardHeader className="pb-3">
                <div className="p-2.5 rounded-xl bg-muted/80 border border-border/60 w-fit mb-3">
                  {item.icon}
                </div>
                <CardTitle className="text-base sm:text-lg font-heading leading-snug">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
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
