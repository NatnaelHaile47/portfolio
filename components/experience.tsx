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
      title: "Oromiya Prosperity Party Membership System",
      description:
        "Built a membership management system for Oromia Prosperity Party, handling member registration, data management, and reporting.",
      tech: ["React", "Node.js", "PostgreSQL"],
      image: "/opp.png",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Oromiya Prosperity Socio Economic System",
      description:
        "Developed a socio-economic management system for Oromiya prosperity party, designed to register and manage people, resources(animals, crops,etc), and services across multiple sectors(health,education,etc), with comprehensive reporting capabilities.",
      tech: ["React", "Node.js", "PostgreSQL"],
      image: "/socio-economic.png",
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
      image: "million.png",
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

 return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-background via-background/90 to-background/95">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            A showcase of enterprise-level applications and systems I've built, focusing on fintech, banking, and scalable web solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-card/50 backdrop-blur-md rounded-3xl"
              >
                <div className="relative overflow-hidden rounded-t-3xl">
                  {/* <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                  /> */}
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
                      <Badge key={tech} variant="secondary" className="text-xs font-medium hover:scale-105 transition-all duration-200">
                        {tech}
                      </Badge>
                    ))}
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