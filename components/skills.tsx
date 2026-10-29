import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Server,
  Smartphone,
  Database,
  Terminal,
} from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Backend & Enterprise APIs",
      icon: <Server className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      skills: [
        ".NET Core / ASP.NET",
        "Node.js",
        "Next.js API Routes",
        "Express.js",
        "Java",
        "Python",
        "RESTful APIs",
        "Jitsi Meet Integration",
        "Role-Based Access Control (RBAC)",
      ],
    },
    {
      title: "Frontend & Mobile Development",
      icon: <Smartphone className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      skills: [
        "React Native",
        "Next.js (App Router)",
        "React",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "Mobile App Packaging (Android/iOS)",
        "Responsive UI/UX",
        "State Management",
      ],
    },
    {
      title: "Databases & Data Architecture",
      icon: <Database className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      skills: [
        "PostgreSQL",
        "Oracle Database (CBE Workflow)",
        "Microsoft SQL Server (CBE Lease)",
        "MySQL",
        "MongoDB",
        "Database Migrations",
        "Query Optimization",
        "ACID Transactions",
      ],
    },
    {
      title: "DevOps, Containerization & Deployment",
      icon: <Terminal className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      skills: [
        "Docker & Docker Compose",
        "CI/CD Pipelines",
        "Linux Server Administration",
        "Nginx Reverse Proxy",
        "Git & GitHub Workflows",
        "Production Server Hardening",
        "Automated Backup Scripts",
        "SSL/TLS & Domain Setup",
      ],
    },
  ]

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/70 dark:bg-slate-900/40 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge
            variant="outline"
            className="mb-3 px-3 py-1 text-xs uppercase tracking-wider font-semibold border-primary/30 text-primary"
          >
            Technical Stack
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">
            Skills &amp; Technologies
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 text-pretty">
            Battle-tested technologies utilized across banking systems, government registries, and high-performance mobile applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <Card
              key={idx}
              className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-sm hover:border-indigo-500/50 transition-colors"
            >
              <CardHeader className="pb-3 flex flex-row items-center space-x-3 space-y-0">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  {cat.icon}
                </div>
                <CardTitle className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                  {cat.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition-colors duration-150"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
