"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      const generatedMailto =
        data.mailtoUrl ||
        `mailto:${contactEmail}?subject=${encodeURIComponent(
          formData.subject || `Portfolio Inquiry from ${formData.name}`
        )}&body=${encodeURIComponent(
          `Hello Natnael,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        )}`

      setLastSubmittedData({
        ...formData,
        mailtoUrl: generatedMailto,
      })
      setSubmitted(true)
      toast.success("Message received successfully!", {
        description: `Thank you, ${formData.name}! Natnael will reply to ${formData.email} promptly.`,
      })

      // Reset form fields
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to process your message"
      toast.error(errorMessage, {
        description: "You can also email Natnael directly using the button below.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(contactEmail)
    toast.success("Email address copied to clipboard!", {
      description: contactEmail,
    })
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge
            variant="outline"
            className="mb-3 px-3 py-1 text-xs uppercase tracking-wider font-semibold border-primary/30 text-primary"
          >
            Get In Touch
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Contact Natnael
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-pretty">
            Have a project, role, or technical inquiry? Send a message through the form or reach out directly via email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <Card className="border-border shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="font-heading text-2xl flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-primary" />
                      Send a Message
                    </CardTitle>
                    <CardDescription className="text-sm pt-1">
                      Fill out this form to connect. All messages are delivered to {contactEmail}.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {submitted && lastSubmittedData ? (
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-6 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-heading text-lg font-bold text-foreground">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-sm text-muted-foreground max-w-md mx-auto">
                        Thank you for reaching out! Your message was received and logged.
                      </p>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center items-center">
                      <Button asChild size="sm" variant="default" className="rounded-full">
                        <a href={lastSubmittedData.mailtoUrl}>
                          <Mail className="mr-2 h-4 w-4" /> Open in Email App
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
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
                          Your Name <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-background"
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-semibold text-foreground">
                          Your Email <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-background"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="subject" className="text-xs font-semibold text-foreground">
                        Subject <span className="text-muted-foreground font-normal">(Optional)</span>
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Inquiry / System Consultation"
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-background"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-semibold text-foreground">
                        Your Message <span className="text-destructive">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Describe your requirements or project..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="bg-background resize-y min-h-[120px]"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full rounded-lg font-medium shadow-md transition-all"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </div>

                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">
                        Prefer direct email?{" "}
                        <a
                          href={`mailto:${contactEmail}`}
                          className="text-primary hover:underline font-medium"
                        >
                          Send directly to {contactEmail}
                        </a>
                      </p>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Details & Links */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card with Copy button */}
            <Card className="border-border shadow-sm hover:border-primary/40 transition-colors">
              <CardContent className="p-5 flex items-start justify-between gap-4">
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-sm">Direct Email</h3>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors break-all"
                    >
                      {contactEmail}
                    </a>
                    <p className="text-xs text-muted-foreground mt-0.5">Click to compose or copy</p>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={copyEmailToClipboard}
                  title="Copy email to clipboard"
                  className="shrink-0 rounded-full"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* GitHub Profiles Card (Both Primary and Additional) */}
            <Card className="border-border shadow-sm hover:border-primary/40 transition-colors">
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Github className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-sm">GitHub Profiles</h3>
                    <p className="text-xs text-muted-foreground">Source code and repositories</p>
                  </div>
                </div>

                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-muted/50 border border-border/60">
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

                  <div className="flex items-center justify-between p-2 rounded-lg bg-muted/50 border border-border/60">
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
            <Card className="border-border shadow-sm hover:border-primary/40 transition-colors">
              <CardContent className="p-5 flex items-start justify-between gap-4">
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-sm">LinkedIn</h3>
                    <a
                      href={linkedinProfile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      natnael-haile-72614b255
                    </a>
                    <p className="text-xs text-muted-foreground mt-0.5">Professional profile &amp; network</p>
                  </div>
                </div>

                <Button variant="outline" size="icon" asChild className="shrink-0 rounded-full">
                  <a href={linkedinProfile} target="_blank" rel="noopener noreferrer" title="Open LinkedIn profile">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Location & Timezone Card */}
            <Card className="border-border bg-gradient-to-br from-card to-muted/40 shadow-sm">
              <CardContent className="p-5 space-y-3 text-xs sm:text-sm">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-muted-foreground">Location:</span>
                  <span className="font-medium text-foreground">Addis Ababa, Ethiopia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-muted-foreground">Timezone:</span>
                  <span className="font-medium text-foreground">East Africa Time (EAT, UTC+3)</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
