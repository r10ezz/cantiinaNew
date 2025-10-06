import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Reveal } from "./reveal"

const services = [
  {
    title: "Online Ordering",
    desc: "Mobile-friendly ordering with pickup scheduling and cut-off times.",
    points: ["Student/parent accounts", "Order caps", "Automated reminders"],
  },
  {
    title: "Inventory Management",
    desc: "Live stock levels with supplier linking and low-stock alerts.",
    points: ["Cost tracking", "Par levels", "Reorder suggestions"],
  },
  {
    title: "Reporting",
    desc: "Exports for finance and operations with filters and periods.",
    points: ["CSV/PDF export", "GL mapping", "Daily summaries"],
  },
  {
    title: "Analytics",
    desc: "Menu performance and demand forecasting to cut waste.",
    points: ["Item heatmaps", "Waste tracking", "Seasonality trends"],
  },
]

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <h2 className="text-balance text-center text-3xl font-semibold md:text-4xl">Services</h2>
      </Reveal>
      <Reveal className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
        Practical capabilities to run a modern canteen.
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 60}>
            <Card className="h-full transition-all hover:-translate-y-0.5 hover:shadow-lg">
              <CardHeader>
                <CardTitle>{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <img
                  src={"/placeholder.svg?height=140&width=280&query=canteen%20service"}
                  alt={`${s.title} illustration`}
                  className="mb-1 h-auto w-full rounded-md"
                />
                <p className="text-sm text-muted-foreground">{s.desc}</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground/90">
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex text-sm text-primary underline-offset-4 hover:underline"
                  aria-label={`Learn more about ${s.title}`}
                >
                  Learn more
                </a>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
