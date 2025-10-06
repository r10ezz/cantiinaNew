"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Reveal } from "./reveal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle")
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus("sent")
    console.log("[v0] Contact form submitted", formData)
    // Here you can add code to send the form data to a server
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <h2 className="text-center text-3xl font-semibold md:text-4xl">Contact</h2>
      </Reveal>
      <Reveal className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
        Get in touch—let’s modernize your canteen.
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
        <Reveal>
          <Card>
            <CardHeader>
              <CardTitle>Talk to us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border bg-card p-3">
                <p className="text-sm font-medium">Sales</p>
                <p className="text-sm text-muted-foreground">sales@cantiina.app</p>
              </div>
              <div className="rounded-lg border bg-card p-3">
                <p className="text-sm font-medium">Support</p>
                <p className="text-sm text-muted-foreground">support@cantiina.app</p>
              </div>
              <div className="rounded-lg border bg-card p-3">
                <p className="text-sm font-medium">Office</p>
                <address className="not-italic text-sm text-muted-foreground">123 Market Street, City, Country</address>
              </div>
              <p className="text-sm text-muted-foreground">Avg. response time: under 24 hours</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground" aria-label="Social links">
                <a href="#" className="hover:text-foreground transition-colors">
                  Twitter
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  Instagram
                </a>
              </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.5206253879373!2d73.10532407498117!3d19.21612908201756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795c8e51ee17f%3A0x561500b879ac7b6b!2sINFINITY%20BUSINESS%20PARK!5e0!3m2!1sen!2sin!4v1759569752566!5m2!1sen!2sin"
      width="500"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
            </CardContent>
          </Card>
        </Reveal>

        <Reveal>
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4" aria-label="Contact form">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="h-11 rounded-md border bg-background px-3 text-sm outline-none ring-0 transition-shadow focus:shadow-[0_0_0_2px] focus:shadow-ring"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="h-11 rounded-md border bg-background px-3 text-sm outline-none ring-0 transition-shadow focus:shadow-[0_0_0_2px] focus:shadow-ring"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="rounded-md border bg-background p-3 text-sm outline-none ring-0 transition-shadow focus:shadow-[0_0_0_2px] focus:shadow-ring"
                    placeholder="How can we help?"
                  />
                </div>
                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                  <input type="checkbox" required className="h-4 w-4 rounded border" />I agree to the Terms and Privacy
                  Policy
                </label>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">We’ll get back within 1 business day.</span>
                  <Button type="submit">{status === "sent" ? "Sent!" : "Send message"}</Button>
                </div>
                {status === "sent" && (
                  <div className="rounded-md border border-primary/30 bg-primary/10 p-3 text-sm text-primary">
                    Thanks! Your message has been sent.
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
