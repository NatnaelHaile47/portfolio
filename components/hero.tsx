"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react"
import Image from "next/image"

export function Hero() {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Natnael_Haile CV.pdf"; // file must be inside /public
    link.download = "Natnael_Haile_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8">
          <div className="relative w-40 h-40 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent animate-spin-slow" />
            <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=144&width=144&text=NH"
                alt="Natnael Haile"
                width={144}
                height={144}
                className="rounded-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-balance text-foreground animate-fade-in">
              Natnael Haile
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground font-medium animate-fade-in-delay-1">
              Senior Software Developer
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed animate-fade-in-delay-2">
              Building scalable <span className="text-primary font-semibold">fintech</span>,
              <span className="text-primary font-semibold"> core banking</span>, and
              <span className="text-primary font-semibold"> enterprise solutions</span> that power digital
              transformation
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-delay-3">
          <Button
            size="lg"
            className="w-full sm:w-auto group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <a href="#experience" className="flex items-center">
              View Projects
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto hover:scale-105 transition-all duration-300 border-2 bg-transparent"
          >
            <a href="#contact" className="flex items-center">
              Contact Me
              <Mail className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto hover:scale-105 transition-all duration-300"
            onClick={handleDownload}
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </div>

        <div className="flex justify-center space-x-6 animate-fade-in-delay-4">
          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 rounded-full hover:scale-110 hover:bg-primary/10 transition-all duration-300"
            asChild
          >
            <a href="https://github.com/NatnaelHaile47" target="_blank" rel="noopener noreferrer"  title="GitHub 1">
              <Github className="h-6 w-6" />
            </a>
          </Button>
          {/* <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 rounded-full hover:scale-110 hover:bg-primary/10 transition-all duration-300"
            asChild
          >
            <a href="https://github.com/NatnaelHaile1" target="_blank" rel="noopener noreferrer"  title="GitHub 2">
              <Github className="h-6 w-6" />
            </a>
          </Button> */}
          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 rounded-full hover:scale-110 hover:bg-primary/10 transition-all duration-300"
            asChild
          >
            <a href="https://www.linkedin.com/in/natnael-haile-72614b255/" target="_blank" rel="noopener noreferrer"  title="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
          </Button>
         
        </div>
      </div>
    </section>
  )
}
