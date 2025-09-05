import { Bot, Clock, FileText, BarChart3, Shield, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

export function FeaturesSection() {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Work Capture",
      description: "Automatically captures and categorizes all billable work across emails, documents, and meetings.",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Clock,
      title: "Real-Time Billing",
      description: "Generate invoices in real-time as work happens, ensuring no billable time is ever lost.",
      gradient: "from-secondary to-accent",
    },
    {
      icon: FileText,
      title: "Audit-Ready Documentation",
      description: "Maintain comprehensive audit trails with automated documentation and proof of work.",
      gradient: "from-accent to-primary",
    },
    {
      icon: BarChart3,
      title: "Revenue Analytics",
      description: "Deep insights into revenue patterns, client profitability, and billing efficiency.",
      gradient: "from-primary to-destructive",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance with legal industry standards.",
      gradient: "from-destructive to-secondary",
    },
    {
      icon: Zap,
      title: "Instant Integration",
      description: "Seamlessly integrates with existing legal software and workflows in minutes, not months.",
      gradient: "from-secondary to-primary",
    },
  ]

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Maximize Revenue
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Sque&apos;s comprehensive platform ensures every minute of billable work is captured, tracked, and converted into
            revenue automatically.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/20"
            >
              <CardHeader>
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
