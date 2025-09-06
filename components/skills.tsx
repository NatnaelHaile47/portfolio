import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: ["JavaScript", "TypeScript", "React", "React Native", "HTML5", "CSS3","ExtJS"],
      color: "bg-blue-500/10 text-blue-700 border-blue-200 dark:text-blue-300 dark:border-blue-800",
    },
    {
      category: "Backend Development",
      skills: ["Node.js",  "Java", ".NET", "API Development", "Microservices", "PHP"],
      color: "bg-green-500/10 text-green-700 border-green-200 dark:text-green-300 dark:border-green-800",
    },
    {
      category: "Database & Storage",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Database Design"],
      color: "bg-purple-500/10 text-purple-700 border-purple-200 dark:text-purple-300 dark:border-purple-800",
    },
    {
      category: "DevOps & Tools",
      skills: ["Docker", "Git", "CI/CD", "AWS", "Linux", "Nginx"],
      color: "bg-orange-500/10 text-orange-700 border-orange-200 dark:text-orange-300 dark:border-orange-800",
    },
    {
      category: "Fintech & Banking",
      skills: ["Core Banking Systems", "Payment Gateways", "Mobile Money", "Financial APIs", "Compliance"],
      color: "bg-emerald-500/10 text-emerald-700 border-emerald-200 dark:text-emerald-300 dark:border-emerald-800",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4 text-balance">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A comprehensive toolkit spanning frontend, backend, databases, and specialized fintech solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <h3 className="font-heading text-lg font-semibold mb-4 text-center group-hover:text-primary transition-colors">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      className={`text-xs px-3 py-1 hover:scale-105 transition-all duration-200 ${category.color}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">3+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">15+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">6+</div>
            <div className="text-sm text-muted-foreground">Major Projects</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}
