import type { ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/utils"

import { Typography } from "./ui/typography"

export const Layout = (props: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      {...props}
      className={cn(
        "m-auto mt-4 flex w-full max-w-3xl flex-wrap gap-4 px-4",
        props.className
      )}
    />
  )
}

export const LayoutHeader = (props: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      {...props}
      className={cn(
        "flex w-full min-w-[200px] flex-col items-start gap-1 md:flex-1",
        props.className
      )}
    />
  )
}

export const LayoutTitle = (props: ComponentPropsWithoutRef<"h1">) => {
  return <Typography {...props} variant="h2" className={cn(props.className)} />
}

export const LayoutDescription = (props: ComponentPropsWithoutRef<"p">) => {
  return <Typography {...props} className={cn(props.className)} />
}

export const LayoutActions = (props: ComponentPropsWithoutRef<"div">) => {
  return <div {...props} className={cn("flex items-center", props.className)} />
}

export const LayoutContent = (props: ComponentPropsWithoutRef<"div">) => {
  return <div {...props} className={cn("w-full", props.className)} />
}
