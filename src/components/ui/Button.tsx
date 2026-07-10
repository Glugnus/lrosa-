import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline"
  isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", isLoading, children, ...props }, ref) => {
    const baseStyles = "w-full font-bold py-4 uppercase tracking-widest transition-colors disabled:opacity-50"
    
    const variants = {
      primary: "bg-white text-zinc-950 hover:bg-zinc-200",
      outline: "border border-zinc-700 text-zinc-300 hover:text-white hover:border-white"
    }

    return (
      <button
        className={`${baseStyles} ${variants[variant]} ${className || ""}`}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? "En cours..." : children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button }
