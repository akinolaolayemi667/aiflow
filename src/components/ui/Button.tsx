import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

type SharedProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  fullWidth?: boolean
  className?: string
}

export type ButtonProps = SharedProps &
  (
    | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
    | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  )

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    'bg-primary text-white',
    'shadow-[0_0_20px_rgb(255_22_136_/_0.28)]',
    'hover:bg-accent hover:shadow-[0_0_28px_rgb(255_22_136_/_0.38)]',
    'active:scale-[0.98]',
  ].join(' '),
  secondary: [
    'bg-transparent text-white',
    'border border-white/20',
    'hover:border-white/35 hover:bg-white/[0.04]',
    'active:scale-[0.98]',
  ].join(' '),
  ghost: 'bg-transparent text-muted hover:bg-white/[0.04] hover:text-white',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm gap-1.5 rounded-md',
  md: 'h-11 px-6 text-sm gap-2 rounded-lg',
  lg: 'h-12 px-7 text-base gap-2.5 rounded-lg',
}

const baseStyles = [
  'inline-flex items-center justify-center font-medium tracking-wide',
  'transition-all duration-300 ease-out',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/55 focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
  'disabled:pointer-events-none disabled:opacity-40',
  'cursor-pointer select-none',
].join(' ')

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && 'w-full',
    className,
  )

  if ('href' in props && props.href) {
    const { href, ...anchorProps } = props
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    )
  }

  const { type = 'button', disabled, ...buttonProps } =
    props as ButtonHTMLAttributes<HTMLButtonElement>

  return (
    <button type={type} disabled={disabled} className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
