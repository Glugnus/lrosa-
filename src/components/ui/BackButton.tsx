import * as React from "react"
import Link, { LinkProps } from "next/link"
import { ArrowLeft } from "lucide-react"

interface BackButtonProps extends LinkProps {
  children: React.ReactNode
  className?: string
}

const BackButton = React.forwardRef<HTMLAnchorElement, BackButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Link
        className={`inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors uppercase text-xs font-bold tracking-widest ${className || ""}`}
        ref={ref}
        {...props}
      >
        <ArrowLeft className="w-4 h-4" />
        {children}
      </Link>
    )
  }
)
BackButton.displayName = "BackButton"

export { BackButton }
