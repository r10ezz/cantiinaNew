import { Hero } from "@/components/cantiina/hero"
import { HowItWorks } from "@/components/cantiina/how-it-works"
import { Features } from "@/components/cantiina/features"
import { Services } from "@/components/cantiina/services"
import { Testimonials } from "@/components/cantiina/testimonials"
import { FAQs } from "@/components/cantiina/faqs"
import { Pricing } from "@/components/cantiina/pricing"
import { Contact } from "@/components/cantiina/contact"
import { ScrollProgress } from "@/components/cantiina/scroll-progress"

export default function Page() {
  return (
    <main>
      <ScrollProgress />
      <Hero />
      <HowItWorks />
      <Features />
      <Services />
      <Testimonials />
      <FAQs />
      <Pricing />
      <Contact />
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center md:text-left">© {new Date().getFullYear()} Cantiina. All rights reserved.</p>
          <nav className="flex items-center gap-6">
            <a className="hover:text-foreground transition-colors" href="/terms" aria-label="Terms of Service">
              Terms
            </a>
            <a className="hover:text-foreground transition-colors" href="/privacy" aria-label="Privacy Policy">
              Privacy
            </a>
            <div className="flex items-center gap-4" aria-label="Social links">
              <a href="#" className="hover:text-foreground transition-colors" aria-label="Twitter">
                Twitter
              </a>
              <a href="#" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
                LinkedIn
              </a>
              <a href="#" className="hover:text-foreground transition-colors" aria-label="Instagram">
                Instagram
              </a>
            </div>
          </nav>
        </div>
      </footer>
    </main>
  )
}
