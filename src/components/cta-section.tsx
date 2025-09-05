import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function CTASection() {
  const benefits = [
    "Setup in under 15 minutes",
    "No long-term contracts",
    "Full revenue recovery guarantee",
    "24/7 expert support",
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-card/80 backdrop-blur border-border/50 shadow-2xl">
          <CardContent className="p-12 text-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-5xl font-bold text-balance">
                  Ready to Stop Losing{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Revenue?
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                  Join hundreds of law firms that have transformed their billing process. Start your free trial today
                  and see results in 48 hours.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 text-left">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="gradient-primary text-white border-0 hover:opacity-90 transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover:bg-muted/50 bg-transparent">
                  Calculate My Revenue Recovery
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">No credit card required • Cancel anytime • GDPR compliant</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}