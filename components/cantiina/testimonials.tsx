import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Reveal } from "./reveal"

const items = [
  {
    name: "Priya S.",
    role: "Operations Lead, Northview School",
    quote: "Cantiina made our school lunches organized and predictable.",
    initials: "PS",
    rating: 5,
  },
  {
    name: "Daniel R.",
    role: "Facilities Manager, Horizon Campus",
    quote: "Order accuracy improved and lines got shorter immediately.",
    initials: "DR",
    rating: 5,
  },
  {
    name: "Sofia L.",
    role: "Catering Director, CityHealth",
    quote: "Inventory tracking cut our waste by 20% in the first month.",
    initials: "SL",
    rating: 4,
  },
  {
    name: "Ahmed K.",
    role: "Food Services, TechWorks",
    quote: "Setup was fast and the team loved the clean interface.",
    initials: "AK",
    rating: 5,
  },
    {
    name: "Raghav A.",
    role: "Food Services, TechWorks",
    quote: "Setup was fast and the team loved the clean interface.",
    initials: "AK",
    rating: 5,
  },
    {
    name: "Rahul K.",
    role: "Food Services, TechWorks",
    quote: "Setup was fast and the team loved the clean interface.",
    initials: "AK",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold md:text-4xl">Trusted by canteens like yours</h2>
          <p className="mt-2 text-sm text-muted-foreground">Rated 4.8/5 across 120+ teams</p>
        </div>
      </Reveal>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((t, i) => (
          <Reveal key={t.name} delay={i * 60}>
            <Card className="h-full transition-all hover:-translate-y-0.5 hover:shadow-lg">
              <CardHeader className="flex flex-row items-center gap-3">
                <Avatar>
                  <AvatarFallback>{t.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base">{t.name}</CardTitle>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-primary" aria-label={`${t.rating} out of 5 stars`}>
                  {"★★★★★".slice(0, t.rating)}
                  <span className="text-muted-foreground/40">{"★★★★★".slice(t.rating)}</span>
                </div>
                <p className="text-muted-foreground">“{t.quote}”</p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
