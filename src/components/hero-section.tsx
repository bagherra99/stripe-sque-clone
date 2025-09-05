"use client"

import { ArrowRight, Play } from "lucide-react"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-card to-background">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

      <div className="container mx-auto px-4 py-24 lg:py-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <Badge variant="secondary" className="w-fit">
              Legal Revenue & Operating System
            </Badge>

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Stop Losing{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Billable Time
                </span>{" "}
                You&apos;ve Already Earned
              </h1>

              <p className="text-xl text-muted-foreground text-pretty max-w-2xl">
                Sque is the Legal Revenue & Operating System—it captures work automatically and runs billing as your
                system of record.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="gradient-primary text-white border-0 hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                >
                  Calculate My Revenue Recovery
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <Button size="lg" variant="outline" className="group bg-transparent">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Start Free Trial
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  First invoice in 48 hours
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  Audit-ready proof in 14 days
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full" />0 rejected e-bills
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative animate-float">
            <div className="relative bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
              {/* Dashboard Header */}
              <div className="bg-muted/50 px-6 py-4 border-b border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-destructive rounded-full" />
                    <div className="w-3 h-3 bg-primary rounded-full" />
                    <div className="w-3 h-3 bg-secondary rounded-full" />
                  </div>
                  <div className="text-sm text-muted-foreground">Sque Dashboard</div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">User Activity Metrics</h3>
                  <Badge variant="secondary">Live</Badge>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">1</div>
                    <div className="text-sm text-muted-foreground">Total Clients</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-secondary">0</div>
                    <div className="text-sm text-muted-foreground">Total Cases</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-accent">0.2</div>
                    <div className="text-sm text-muted-foreground">Billing Hours</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">$0.1k</div>
                    <div className="text-sm text-muted-foreground">Total Revenue</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span>AI Analysis:</span>
                    <Badge variant="outline">Processing</Badge>
                  </div>
                  <div className="bg-muted rounded-lg p-3 text-sm">
                    This email from mike@lawfirm.com with subject &quot;Meeting with Swapnil Mavar about dispute case&quot; has
                    been processed and added to the timeline for tracking purposes.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}