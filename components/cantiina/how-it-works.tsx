import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Reveal } from "./reveal"

const steps = [
  {
    title: "Set up menus",
    desc: "Create daily/weekly menus with allergens, dietary tags, and pricing in minutes.",
    img: "/menu-planning.jpg",
    bullets: ["Allergen tagging", "Category groups", "Auto-rotate menus"],
  },
  {
    title: "Enable ordering",
    desc: "Offer queue-free ordering with cut-off times, pickup slots, and notifications.",
    img: "/online-ordering.jpg",
    bullets: ["Pickup windows", "Order limits", "Parent/student profiles"],
  },
  {
    title: "Track inventory",
    desc: "Live stock levels keep you ahead of demand with low-stock alerts.",
    img: "/inventory-tracking.jpg",
    bullets: ["Low-stock alerts", "Supplier SKUs", "Usage forecasting"],
  },
  {
    title: "Measure & improve",
    desc: "Understand demand, waste, and profitability across periods.",
    img: "/analytics-charts.jpg",
    bullets: ["Sales trends", "Waste metrics", "Menu performance"],
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <h2 className="text-balance text-center text-3xl font-semibold md:text-4xl">How it works</h2>
      </Reveal>
      <Reveal className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
        A clear, step-by-step system for smooth daily service.
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 60}>
            <Card className="h-full transition-all hover:-translate-y-0.5 hover:shadow-lg">
              <CardHeader className="space-y-1">
                <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">
                  {i + 1}
                </div>
                <CardTitle>{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <img
                  src={s.img || "/placeholder.svg?height=160&width=320&query=workflow%20step"}
                  alt={`${s.title} illustration`}
                  className="h-auto w-full rounded-md"
                />
                <p className="text-sm text-muted-foreground">{s.desc}</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground/90">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
