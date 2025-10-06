import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Reveal } from "./reveal"

const features = [
  { title: "Menu Management", desc: "Flexible menus with dietary filters and availability windows." },
  { title: "Ordering System", desc: "Fast, mobile-ready ordering with payment integrations." },
  { title: "Analytics", desc: "Actionable insights on demand, sales, and waste." },
  { title: "Notifications", desc: "Order updates and announcements via email/SMS." },
  { title: "Inventory Management", desc: "Efficient stock tracking and automatic reorder suggestions." },
]

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <h2 className="text-balance text-center text-3xl font-semibold md:text-4xl">
          Powerful features, simple controls
        </h2>
      </Reveal>
      <Reveal className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
        Tools designed for the realities of a busy canteen.
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 60}>
            <Card className="h-full border-l-4 border-l-primary transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle>{f.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
