import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const primaryGithub = "https://github.com/NatnaelHaile47"
  const additionalGithub = "https://github.com/NatnaelWalletbirr"
  const emailUrl = "mailto:natihaile6568@gmail.com"
  const linkedinUrl = "https://www.linkedin.com/in/natnael-haile-72614b255/"

  return (
    <footer className="border-t border-border bg-card/60 backdrop-blur-sm py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start space-y-1">
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded-md bg-primary text-primary-foreground font-heading font-bold flex items-center justify-center text-xs">
              NH
            </span>
            <span className="font-heading font-bold text-base text-foreground">
              Natnael Haile
            </span>
          </div>
          <p className="text-xs text-muted-foreground text-center md:text-left">
            Senior Software Developer &amp; Deployment Engineer • Addis Ababa, Ethiopia
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" asChild className="rounded-full hover:text-primary" title="Primary GitHub (NatnaelHaile47)">
            <a href={primaryGithub} target="_blank" rel="noopener noreferrer" aria-label="Primary GitHub">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="rounded-full hover:text-primary" title="Additional GitHub (NatnaelWalletbirr)">
            <a href={additionalGithub} target="_blank" rel="noopener noreferrer" aria-label="Additional GitHub">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="rounded-full hover:text-primary" title="LinkedIn Profile">
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="rounded-full hover:text-primary" title="Direct Email">
            <a href={emailUrl} aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="text-center md:text-right text-xs text-muted-foreground space-y-1">
          <p>© {new Date().getFullYear()} Natnael Haile. All rights reserved.</p>
          <p className="text-[11px] text-muted-foreground/80">
            Deployed with Next.js &amp; TypeScript.
          </p>
        </div>
      </div>
    </footer>
  )
}
