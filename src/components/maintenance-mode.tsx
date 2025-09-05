"use client"

import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function MaintenanceMode() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <AlertTriangle className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">Service Temporarily Unavailable</CardTitle>
          <CardDescription className="text-muted-foreground">
            We&apos;re currently performing scheduled maintenance to improve your experience.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-6">
            We&apos;ll be back online shortly. Thank you for your patience.
          </p>
          <Button variant="outline" onClick={() => window.location.reload()} className="w-full">
            Try Again
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export function MaintenanceGate({ children }: { children: React.ReactNode }) {
  const isMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE_MODE?.toLowerCase() === "true"
  if (isMaintenance) {
    return <MaintenanceMode />
  }
  return <>{children}</>
}