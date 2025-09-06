import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, Zap } from "lucide-react"

export function Achievements() {
  const achievements = [
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: "Production-Level Systems",
      description: "Delivered fintech systems used by thousands of customers daily",
    },
    {
      icon: <Zap className="h-8 w-8 text-secondary" />,
      title: "API Integrations",
      description: "Successfully integrated multiple third-party APIs and payment gateways",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-secondary" />,
      title: "Digital Transformation",
      description: "Contributed to digital transformation in finance and real estate sectors",
    },
  ]

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-12">Key Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-center mb-4">{achievement.icon}</div>
                <CardTitle className="text-lg font-heading">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-pretty">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
