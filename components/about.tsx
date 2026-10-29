import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ShieldCheck, Server, Layers, Rocket } from "lucide-react"

export function About() {
  const pillars = [
    {
      icon: <Server className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />,
      title: "Full Lifecycle & Production Deployment",
      desc: "Hands-on experience taking systems from architecture to containerized production on Linux, Docker, CI/CD pipelines, reverse proxies, and zero-downtime database deployments.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
      title: "Commercial Bank of Ethiopia (CBE)",
      desc: "Engineered CBE's Workflow Management System and Lease Management System with dynamic role-based access control (RBAC), multi-level approvals, and Oracle / SQL Server databases.",
    },
    {
      icon: <Layers className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
      title: "Mackmil P.L.C & Public Systems",
      desc: "Delivered the Oromia Prosperity Party Membership System with integrated Jitsi video conferencing and the municipal Kebele Management System using Next.js, Node.js, and PostgreSQL.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-amber-600 dark:text-amber-400" />,
      title: "Binget Microfinance & Eaglist",
      desc: "Developed Core Banking and BingetBirr Mobile Money for Binget Microfinance, and the Eaglist cross-platform marketplace mobile application for vehicles, properties, and electronics.",
    },
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge
            variant="outline"
            className="mb-3 px-3 py-1 text-xs uppercase tracking-wider font-semibold border-primary/30 text-primary"
          >
            Professional Overview
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            About Natnael Haile
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-pretty">
            Senior Software Developer &amp; Deployment Specialist with 4 years of experience delivering enterprise systems,
            financial applications, and cross-platform mobile apps.
          </p>
        </div>

        {/* Narrative & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-7 bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-sm space-y-4">
            <h3 className="font-heading text-xl sm:text-2xl font-bold">
              Engineering Scalable Systems from Concept to Production
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
              With 4 years of focused engineering experience, I architect, build, and deploy high-reliability software solutions.
              My work includes developing the Workflow and Lease Management systems for the{" "}
              <strong className="text-foreground font-semibold">Commercial Bank of Ethiopia (CBE)</strong>, leading the OPP
              Membership and Kebele systems at <strong className="text-foreground font-semibold">Mackmil P.L.C</strong>,
              implementing Core Banking and Mobile Money for <strong className="text-foreground font-semibold">Binget Microfinance</strong>,
              and building the <strong className="text-foreground font-semibold">Eaglist</strong> mobile marketplace.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
              Across every project, I manage the complete delivery cycle: full-stack development with TypeScript, .NET Core,
              Node.js, Next.js, and React Native, paired with production DevOps, database clustering (PostgreSQL, Oracle, SQL Server),
              and containerized Linux deployments.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, i) => (
              <Card key={i} className="border-border/60 bg-muted/30 hover:bg-card hover:border-primary/40 transition-colors">
                <CardContent className="p-4 flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-background border border-border/60 shrink-0">
                    {pillar.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading font-semibold text-sm text-foreground">{pillar.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{pillar.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
