import * as React from "react"
import Link, { LinkProps } from "next/link"

interface LinkButtonProps extends LinkProps {
  children: React.ReactNode
  variant?: "primary" | "outline"
  className?: string
}

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    const baseStyles = "inline-block text-center px-8 py-4 uppercase text-sm font-bold tracking-widest transition-colors"
    
    const variants = {
      primary: "bg-white text-zinc-950 hover:bg-zinc-200",
      outline: "border border-zinc-700 text-zinc-300 hover:text-white hover:border-white"
    }

    return (
      <Link
        className={`${baseStyles} ${variants[variant]} ${className || ""}`}
        ref={ref}
        {...props}
      >
        {children}
      </Link>
    )
  }
)
LinkButton.displayName = "LinkButton"

export { LinkButton }
