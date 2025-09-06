import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function Experience() {
  const projects = [
    {
      title: "Core Banking System for Binget Microfinance",
      description:
        "Developed a comprehensive core banking system handling customer accounts, loans, deposits, and financial transactions with real-time processing capabilities.",
      tech: ["Java Spring", "SQL", "API Integration", "Next.js"],
      image: "/corebanking.png",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "BingetBirr Mobile Money Platform",
      description:
        "Built a mobile money platform with integrations to banks, telecom operators, and third-party payment providers, serving thousands of daily transactions.",
      tech: ["React Native", "Java Spring", "MySQL", "Payment APIs"],
      image: "/bingetbirr(1).jpg",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "CMS for BingetBirr",
      description:
        "Created a content management system for the BingetBirr platform, enabling efficient management of user data, transactions, and system configurations.",
      tech: ["React", "Ant Design", "Node.js", "MongoDB"],
      image: "/cms.png",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "One Window Properties System",
      description:
        "Developed a comprehensive property management system streamlining real estate operations and customer interactions.",
      tech: ["Next.js", "Codeigniter(PHP)", "MySQL"],
      image: "/property-management-system-with-listings-and-searc.jpg",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Payment Gateway & SMS Integration",
      description:
        "Freelance project implementing secure payment processing and SMS notification systems for enhanced user experience.",
      tech: ["PHP", "API Integration", "SMS Gateway","Chapa payment gateway"],
      image: "/payment-gateway-interface-with-secure-transaction-.jpg",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Socio-Economic & Membership System",
      description:
        "Built a membership management system for Oromia Prosperity Party, handling member registration, data management, and reporting.",
      tech: ["React", "Node.js", "PostgreSQL"],
      image: "/membership-management-system-with-user-profiles-an.jpg",
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4 text-balance">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of enterprise-level applications and systems I've built, focusing on fintech, banking, and
            scalable web solutions.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="font-heading text-2xl font-semibold mb-8 text-center">Flagship Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-card/50 backdrop-blur-sm"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-heading group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-pretty leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs font-medium">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button variant="default" size="sm" className="flex-1">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        <Github className="h-4 w-4 mr-2" />
                        Source Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-2xl font-semibold mb-8 text-center">Additional Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={160}
                      className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-heading group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-pretty leading-relaxed line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Github className="h-4 w-4" />
                      </Button>
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
