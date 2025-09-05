import * as React from "react"

type SpanProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "secondary" | "outline" | "destructive"
}

function cx(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ")
}

const variantClasses: Record<NonNullable<SpanProps["variant"]>, string> = {
  default: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  outline: "border border-input text-foreground",
  destructive: "bg-destructive text-destructive-foreground",
}

export function Badge({ className, variant = "default", ...props }: SpanProps) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  )
}


