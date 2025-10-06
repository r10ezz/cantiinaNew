import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Reveal } from "./reveal"

const faqs = [
  { q: "What is Cantiina?", a: "A clean, modern platform to manage menus, orders, inventory, and analytics." },
  { q: "Is it mobile-friendly?", a: "Yes, Cantiina is fully responsive on phones, tablets, and desktops." },
  { q: "Can I export reports?", a: "Absolutely—export sales, demand, and inventory reports anytime." },
  { q: "Does it support notifications?", a: "Yes, email/SMS notifications for orders and announcements." },
  { q: "How long does setup take?", a: "Most teams get started the same day with the guided setup." },
  { q: "What about support?", a: "We provide documentation and responsive support channels." },
]

export function FAQs() {
  return (
    <section id="faqs" className="mx-auto max-w-3xl px-4 py-20">
      <Reveal>
        <h2 className="text-center text-3xl font-semibold md:text-4xl">FAQs</h2>
      </Reveal>
      <Reveal className="mt-6">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  )
}
