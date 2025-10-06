import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Reveal } from "./reveal"

const tiers = [
  {
    name: "Basic",
    price: "$19",
    period: "/mo",
    features: ["Menu management", "Basic reporting", "Email support"],
    highlighted: false,
  },
  {
    name: "Standard",
    price: "$49",
    period: "/mo",
    features: ["Online ordering", "Inventory tracking", "Analytics dashboard"],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$99",
    period: "/mo",
    features: ["Advanced analytics", "Priority support", "Custom exports"],
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <h2 className="text-center text-3xl font-semibold md:text-4xl">Pricing</h2>
      </Reveal>
      <Reveal className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
        Choose a plan that fits your canteen.
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {tiers.map((t, i) => (
          <Reveal key={t.name} delay={i * 80}>
            <Card className={t.highlighted ? "relative h-full border-primary shadow-md" : "relative h-full"}>
              {t.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
                  Recommended
                </div>
              )}
              <CardHeader>
                <CardTitle>{t.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-semibold">{t.price}</span>
                  <span className="text-muted-foreground">{t.period}</span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={t.highlighted ? "default" : "secondary"}>
                  Choose {t.name}
                </Button>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
