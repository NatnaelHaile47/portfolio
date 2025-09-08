"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Github, Linkedin, Mail, Send, MapPin, Phone, Calendar } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [modalOpen, setModalOpen] = useState(false)
  const [modalMessage, setModalMessage] = useState("")
  const [modalType, setModalType] = useState<"success" | "error">("success")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch("/api/send_email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setModalType("success")
        setModalMessage("Your message was sent successfully!")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setModalType("error")
        setModalMessage("Something went wrong. Please try again.")
      }
    } catch {
      setModalType("error")
      setModalMessage("Network error. Please try again.")
    } finally {
      setModalOpen(true)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    { icon: Mail, title: "Email", value: "natihaile6568@gmail.com", link: "mailto:natihaile6568@gmail.com" },
    { icon: Phone, title: "Phone", value: "+251 940423488", link: "tel:+251940423488" },
    { icon: MapPin, title: "Location", value: "Addis Ababa, Ethiopia", link: "#" },
    { icon: Calendar, title: "Availability", value: "Open to opportunities", link: "#" },
  ]

  const socialLinks = [
    { icon: Github, title: "GitHub 1", value: "https://github.com/NatnaelHaile47", link: "https://github.com/NatnaelHaile47" },
    { icon: Linkedin, title: "LinkedIn", value: "https://www.linkedin.com/in/natnael-haile-72614b255/", link: "https://www.linkedin.com/in/natnael-haile-72614b255/" },
  ]

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-background via-background/95 to-background/95">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ready to discuss your next project or explore collaboration opportunities? Let's connect and build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Message Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 bg-card/50 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Send a Message</CardTitle>
                <p className="text-muted-foreground">I'll get back to you within 24 hours</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="h-12" />
                    <Input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="h-12" />
                  </div>
                  <Textarea name="message" placeholder="Tell me about your project or how I can help..." rows={6} value={formData.message} onChange={handleChange} required className="resize-none" />
                  <Button type="submit" size="lg" className="w-full group hover:scale-105 transition-all duration-300">
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-6">
            <Card className="border-0 bg-card/50 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-heading text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 rounded-xl hover:bg-muted/50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{info.title}</h3>
                      <a className="text-muted-foreground hover:text-primary transition-colors text-sm">{info.value}</a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/50 backdrop-blur-md rounded-3xl shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-heading text-xl">Social Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-3 rounded-xl hover:bg-muted/50 hover:scale-105 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <social.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{social.title}</h3>
                      <span className="text-muted-foreground text-sm">{social.value}</span>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className={modalType === "success" ? "text-green-600" : "text-red-600"}>
              {modalType === "success" ? "Success" : "Error"}
            </DialogTitle>
            <DialogDescription>{modalMessage}</DialogDescription>
          </DialogHeader>
          <Button onClick={() => setModalOpen(false)} className="mt-4 w-full">
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  )
}
