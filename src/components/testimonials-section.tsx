import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Managing Partner",
      company: "Chen & Associates",
      avatar: "/professional-woman-lawyer.png",
      content:
        "Sque has revolutionized our billing process. We've recovered over $200k in previously lost billable time in just 6 months.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Senior Associate",
      company: "Rodriguez Legal Group",
      avatar: "/professional-lawyer.png",
      content:
        "The AI captures work I didn't even realize was billable. Our revenue per case has increased by 40% since implementing Sque.",
      rating: 5,
    },
    {
      name: "Emily Thompson",
      role: "Practice Manager",
      company: "Thompson & Partners",
      avatar: "/professional-woman-manager.png",
      content:
        "Finally, a system that actually works. The audit trail is impeccable and our clients love the transparency.",
      rating: 5,
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Loved by Legal Professionals</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            See what our clients say about their revenue recovery success with Sque.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border/50"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                  <p className="text-foreground leading-relaxed pl-6">"{testimonial.content}"</p>
                </div>

                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}