import * as React from "react"

type ImgProps = React.ImgHTMLAttributes<HTMLImageElement>
type DivProps = React.HTMLAttributes<HTMLDivElement>

function cx(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ")
}

export function Avatar({ className, ...props }: DivProps) {
  return (
    <div
      className={cx(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
}

export function AvatarImage({ className, loading = "lazy", ...props }: ImgProps & { loading?: "eager" | "lazy" }) {
  return <img className={cx("h-full w-full object-cover", className)} loading={loading} decoding="async" {...props} />
}

export function AvatarFallback({ className, ...props }: DivProps) {
  return (
    <div
      className={cx(
        "flex h-full w-full items-center justify-center bg-muted text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}


