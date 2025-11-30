import React from 'react'
import { StyledButton } from './Button.styles'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'tertiary'
    size?: 'xs' | 'sm' | 'md' | 'lg'
    children: string
    icon?: React.ReactNode
    iconPosition?: 'left' | 'right'
    disabled?: boolean
    onClick?: () => void
}

export const Button = ({
    variant = 'primary',
    size = 'md',
    children,
    disabled,
    onClick,
    ...props
}: ButtonProps) => {
    return (
        <StyledButton
            variant={variant}
            size={size}
            disabled={disabled}
            onClick={onClick}
            {...props}
        >
            {children}
        </StyledButton>
    )
}
