import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "pink";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-red text-white hover:bg-brand-red-hover focus-visible:ring-brand-red",
  secondary:
    "bg-brand-white text-brand-black border border-brand-white hover:bg-transparent hover:text-brand-white focus-visible:ring-brand-white",
  pink:
    "bg-brand-pink text-brand-black hover:opacity-90 focus-visible:ring-brand-pink",
};

export function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  disabled = false,
  onClick,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 font-bold text-base uppercase tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black disabled:opacity-50 disabled:cursor-not-allowed";

  const styles = `${base} ${variantStyles[variant]} ${className}`;

  if (href) {
    const isStaticFile = /\.\w+$/.test(href);

    if (isStaticFile) {
      return (
        <a href={href} className={styles} download>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
