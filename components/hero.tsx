"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Natnael_Haile CV.pdf";
    link.download = "Natnael_Haile_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-16 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-gradient" />

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="text-center lg:text-left space-y-6">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Natnael Haile
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground font-semibold">
            Senior Software Developer
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-xl leading-relaxed">
            I build scalable{" "}
            <span className="text-primary font-semibold">fintech</span>,{" "}
            <span className="text-primary font-semibold">core banking</span>, and{" "}
            <span className="text-primary font-semibold">enterprise systems</span>{" "}
            that power digital transformation.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              size="lg"
              className="group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <a href="#experience" className="flex items-center">
                View Projects
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:scale-105 transition-all duration-300 border-2"
            >
              <a href="#contact" className="flex items-center">
                Contact Me
                <Mail className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="hover:scale-105 transition-all duration-300 shadow-md"
              onClick={handleDownload}
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
        </div>

        {/* Right side profile image + socials */}
        <div className="flex flex-col items-center lg:items-end space-y-6">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-primary/40 animate-float">
            <Image
              src="/profile.jpg"
              alt="Natnael Haile"
              fill
              className="object-cover"
            />
          </div>
        </div>
          {/* Social icons under image */}
         <div className="flex gap-6">
            <a
              href="https://github.com/NatnaelHaile47"
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 w-14 flex items-center justify-center rounded-full bg-background/50 backdrop-blur-md shadow-md hover:scale-110 hover:shadow-xl transition-all"
            >
              <Github className="h-7 w-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/natnael-haile-72614b255/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 w-14 flex items-center justify-center rounded-full bg-background/50 backdrop-blur-md shadow-md hover:scale-110 hover:shadow-xl transition-all"
            >
              <Linkedin className="h-7 w-7" />
            </a>
          </div>
      </div>
    </section>
  )
}
