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
}

export const Button = ({ buttonText, color, variant, href, leftIcon, rightIcon, type, className }: Props) => {
  if (href) {
    return (
      <Link href={href} className={`bg-primary text-headings font-bold text-base px-14 py-4 rounded-lg ${className}`} style={{boxShadow:'0 8px 32px rgba(127,90,240,0.3)'}}>
        {buttonText}
      </Link>
    )
  }
  
  return (
    <button type={type} className={`bg-primary text-headings font-bold text-base px-14 py-4 rounded-lg ${className}`} style={{boxShadow:'0 8px 32px rgba(127,90,240,0.3)'}}>
      {buttonText}
    </button>
  )
}
