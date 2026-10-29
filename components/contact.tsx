"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  Send,
  CheckCircle2,
  Copy,
  ExternalLink,
  MapPin,
  Clock,
  MessageSquare,
  Sparkles,
  Loader2,
} from "lucide-react"
import { toast } from "sonner"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [lastSubmittedData, setLastSubmittedData] = useState<{
    name: string
    email: string
    subject: string
    message: string
    mailtoUrl: string
  } | null>(null)

  const contactEmail = "natihaile6568@gmail.com"
  const primaryGithub = "https://github.com/NatnaelHaile47"
  const additionalGithub = "https://github.com/NatnaelWalletbirr"
  const linkedinProfile = "https://www.linkedin.com/in/natnael-haile-72614b255/"

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields.")
      return
    }

    setIsSubmitting(true)

    try {
      // Send to API route
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(
        formData.subject ? `[Portfolio] ${formData.subject}` : `Message from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Hello Natnael,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`

      setLastSubmittedData({
        ...formData,
        mailtoUrl,
      })

      setSubmitted(true)
      toast.success("Message received!", {
        description: `Thank you, ${formData.name}! Natnael will reply to ${formData.email} promptly.`,
      })

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (err: any) {
      console.error("Submission error:", err)
      const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(
        formData.subject || `Message from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Hello Natnael,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`

      setLastSubmittedData({
        ...formData,
        mailtoUrl,
      })
      setSubmitted(true)
      toast.info("Offline fallback opened", {
        description: "You can also email Natnael directly using the button below.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const copyEmail = () => {
    navigator.clipboard.writeText(contactEmail)
    toast.success("Email copied to clipboard!", {
      description: contactEmail,
    })
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-background via-background/90 to-background/95">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with GitHub Gradient Style */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Let&apos;s Connect &amp; Collaborate
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Interested in enterprise software engineering, fintech systems, or deployment consultation? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <Card className="border border-border/40 bg-card/50 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl">
              {submitted && lastSubmittedData ? (
                <div className="text-center py-8 space-y-5 animate-in fade-in-50 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/20 shadow-sm">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading text-2xl font-bold text-foreground">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-muted-foreground text-sm max-w-md mx-auto">
                      Thank you, <strong className="text-foreground">{lastSubmittedData.name}</strong>. Your message has been logged, and Natnael will respond to <strong className="text-foreground">{lastSubmittedData.email}</strong>.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <Button asChild size="sm" className="rounded-full shadow-sm">
                      <a href={lastSubmittedData.mailtoUrl}>
                        <Mail className="w-4 h-4 mr-2" />
                        Open Email Client
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSubmitted(false)}
                      className="rounded-full"
                    >
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-foreground">
                        Your Name <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="rounded-xl bg-background/60 border-border/70 focus-visible:ring-primary h-11"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-foreground">
                        Your Email <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="rounded-xl bg-background/60 border-border/70 focus-visible:ring-primary h-11"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-semibold text-foreground">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry / Enterprise Opportunity"
                      value={formData.subject}
                      onChange={handleChange}
                      className="rounded-xl bg-background/60 border-border/70 focus-visible:ring-primary h-11"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-foreground">
                      Message <span className="text-primary">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Share details about your system requirements, architecture goals, or role..."
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="rounded-xl bg-background/60 border-border/70 focus-visible:ring-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full h-11 font-semibold shadow-md hover:shadow-lg transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Transmitting Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <Card className="border border-border/40 bg-card/50 backdrop-blur-md rounded-3xl p-5 shadow-sm hover:border-primary/40 transition-colors">
              <CardContent className="p-0 flex items-center justify-between gap-3">
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-sm">Direct Email</h3>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-xs font-medium text-foreground hover:text-primary transition-colors hover:underline block"
                    >
                      {contactEmail}
                    </a>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyEmail}
                  className="rounded-full text-xs h-8 px-3"
                  title="Copy email"
                >
                  <Copy className="h-3.5 w-3.5 mr-1" /> Copy
                </Button>
              </CardContent>
            </Card>

            {/* GitHub Profiles Card */}
            <Card className="border border-border/40 bg-card/50 backdrop-blur-md rounded-3xl p-5 shadow-sm hover:border-primary/40 transition-colors">
              <CardContent className="p-0 space-y-3">
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20">
                    <Github className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-sm">GitHub Profiles</h3>
                    <p className="text-xs text-muted-foreground">Source code repositories &amp; open source</p>
                  </div>
                </div>

                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-muted/50 border border-border/50">
                    <div className="text-xs">
                      <span className="font-semibold text-foreground">NatnaelHaile47</span>
                      <span className="text-[10px] text-primary ml-1.5 font-medium">(Primary)</span>
                    </div>
                    <Button variant="ghost" size="sm" asChild className="h-7 text-xs px-2.5">
                      <a href={primaryGithub} target="_blank" rel="noopener noreferrer">
                        Visit <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-muted/50 border border-border/50">
                    <div className="text-xs">
                      <span className="font-semibold text-foreground">NatnaelWalletbirr</span>
                      <span className="text-[10px] text-muted-foreground ml-1.5">(Additional)</span>
                    </div>
                    <Button variant="ghost" size="sm" asChild className="h-7 text-xs px-2.5">
                      <a href={additionalGithub} target="_blank" rel="noopener noreferrer">
                        Visit <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* LinkedIn Card */}
            <Card className="border border-border/40 bg-card/50 backdrop-blur-md rounded-3xl p-5 shadow-sm hover:border-primary/40 transition-colors">
              <CardContent className="p-0 flex items-center justify-between gap-3">
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20">
                    <Linkedin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-sm">LinkedIn</h3>
                    <span className="text-xs text-muted-foreground block">Professional Network</span>
                  </div>
                </div>

                <Button variant="ghost" size="sm" asChild className="h-8 text-xs px-3">
                  <a href={linkedinProfile} target="_blank" rel="noopener noreferrer">
                    Connect <ExternalLink className="h-3.5 w-3.5 ml-1" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Location & Status Card */}
            <Card className="border border-border/40 bg-card/50 backdrop-blur-md rounded-3xl p-5 shadow-sm">
              <CardContent className="p-0 flex items-center space-x-3.5">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-sm">Location &amp; Delivery</h3>
                  <p className="text-xs text-muted-foreground">Addis Ababa, Ethiopia (Remote &amp; On-Site Deployments)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
