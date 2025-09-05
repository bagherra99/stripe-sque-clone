import { TrendingUp, Clock, DollarSign, Users } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: TrendingUp,
      value: "300%",
      label: "Average Revenue Recovery",
      description: "Firms recover 3x more billable time",
    },
    {
      icon: Clock,
      value: "48hrs",
      label: "First Invoice Generated",
      description: "From setup to first bill",
    },
    {
      icon: DollarSign,
      value: "$2.4M",
      label: "Revenue Recovered",
      description: "Across all client firms",
    },
    {
      icon: Users,
      value: "500+",
      label: "Legal Professionals",
      description: "Trust Sque daily",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Trusted by Legal Professionals Worldwide</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Join hundreds of law firms that have transformed their revenue recovery with Sque&apos;s AI-powered system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}