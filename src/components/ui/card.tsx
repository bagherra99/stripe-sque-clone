import * as React from "react"

type DivProps = React.HTMLAttributes<HTMLDivElement>

function cx(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ")
}

export function Card({ className, ...props }: DivProps) {
  return (
    <div
      className={cx(
        "rounded-lg border border-border bg-card text-card-foreground shadow-sm",
        className
      )}
      {...props}
    />
  )
}

export function CardContent({ className, ...props }: DivProps) {
  return <div className={cx("p-6", className)} {...props} />
}

export function CardHeader({ className, ...props }: DivProps) {
  return <div className={cx("p-6 pb-0", className)} {...props} />
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cx("text-lg font-semibold leading-none tracking-tight", className)} {...props} />
}

export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cx("text-sm text-muted-foreground", className)} {...props} />
}


