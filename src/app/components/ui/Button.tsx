import React, { ReactNode } from 'react'

interface Props {
    buttonText: string;
    href?: string;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
    variant: 'outlined' | 'filled' | 'iconOnly' | 'ghost';
    color: 'primary' | 'secondary';
}

export const Button = ({ buttonText, color, variant, href, leftIcon, rightIcon }: Props) => {
  return (
    <button>
        {buttonText}
    </button>
  )
}
