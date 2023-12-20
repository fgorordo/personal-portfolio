import Link from 'next/link';

interface Props {
  buttonText: string;
  href?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  variant?: 'outlined' | 'filled' | 'iconOnly' | 'ghost';
  color?: 'primary' | 'secondary';
  type?: "button" | "submit" | "reset" | undefined,
  className?: string;
  size: "small" | "medium" | "large";
}

export const Button = ({ buttonText, color, variant, href, leftIcon, rightIcon, type, className, size }: Props) => {
  if (href) {
    return (
      <Link href={href} className={`bg-primary text-headings font-bold text-base px-14 py-4 rounded-lg ${className}`} style={{ boxShadow: '0 8px 32px rgba(127,90,240,0.3)' }}>
        {buttonText}
      </Link>
    )
  }

  if (size === "small") {
    if (color === "secondary") {
      return (
        <button type={type} className={`flex items-center justify-center gap-2 bg-secondary text-headings font-bold text-sm px-6 py-4 rounded-lg ${className}`} style={{ boxShadow: '0 8px 32px rgba(44,182,125,0.3)' }}>
          {buttonText} {rightIcon && rightIcon}
        </button>
      );
    };

    return (
      <button type={type} className={`bg-primary text-headings font-bold text-sm px-8 py-4 rounded-lg ${className}`} style={{ boxShadow: '0 8px 32px rgba(127,90,240,0.3)' }}>
        {buttonText}
      </button>
    );
  };

  return (
    <button type={type} className={`bg-primary text-headings font-bold text-base px-14 py-4 rounded-lg ${className}`} style={{ boxShadow: '0 8px 32px rgba(127,90,240,0.3)' }}>
      {buttonText}
    </button>
  )
}
