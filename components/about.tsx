import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Users, Zap, Award } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Expertise",
      description: "End-to-end development from frontend interfaces to backend systems and database architecture",
    },
    {
      icon: Zap,
      title: "Fintech Specialist",
      description: "Deep experience in banking systems, payment gateways, and financial technology solutions",
    },
    {
      icon: Users,
      title: "Enterprise Scale",
      description: "Built systems serving thousands of users with high-volume transaction processing",
    },
    {
      icon: Award,
      title: "Quality Focused",
      description: "Committed to secure, scalable, and maintainable code with comprehensive testing",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4 text-balance">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Passionate about building innovative solutions that transform businesses and improve user experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border-0 shadow-lg">
              <p className="text-lg leading-relaxed text-card-foreground text-pretty mb-6">
                I am a <span className="text-primary font-semibold">senior software developer</span> with 3+ years of
                experience building
                <span className="text-primary font-semibold"> fintech platforms</span>, mobile money systems, core
                banking solutions, enterprise applications, and system integrations for businesses and organizations.
              </p>
              <p className="text-lg leading-relaxed text-card-foreground text-pretty mb-6">
                My expertise spans across <span className="text-primary font-semibold">full-stack development</span>,
                with a particular focus on creating scalable, secure, and user-friendly solutions that drive digital
                transformation in the financial and enterprise sectors.
              </p>
              <p className="text-lg leading-relaxed text-card-foreground text-pretty">
                I have successfully delivered{" "}
                <span className="text-primary font-semibold">production-level systems</span> that serve thousands of
                customers, integrating complex third-party APIs and building robust architectures that can handle
                high-volume transactions and data processing requirements.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-4 py-2">
                3+ Years Experience
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Fintech Expert
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Full-Stack Developer
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Enterprise Solutions
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
