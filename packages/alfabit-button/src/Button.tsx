import React from 'react'
import { StyledButton } from './Button.styles'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'tertiary'
    size?: 'xs' | 'sm' | 'md' | 'lg'
    label: string
    icon?: React.ReactNode
    iconPosition?: 'left' | 'right'
    disabled?: boolean
    onClick?: () => void
}

export const Button = ({
    variant = 'primary',
    size = 'md',
    label,
    icon,
    iconPosition,
    disabled,
    onClick,
    ...props
}: ButtonProps) => {
    return (
        <StyledButton
            variant={variant}
            size={size}
            label={label}
            icon={icon}
            iconPosition={iconPosition}
            disabled={disabled}
            onClick={onClick}
            {...props}
        />
    )
}
