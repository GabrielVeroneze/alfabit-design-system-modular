import React from 'react'
import { defaultTheme, Theme } from '@gabriel_veroneze/alfabit-tokens'
import { StyledButton } from './Button.styles'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'tertiary'
    size?: 'xs' | 'sm' | 'md' | 'lg'
    children: string
    icon?: React.ReactNode
    iconPosition?: 'left' | 'right'
    disabled?: boolean
    onClick?: () => void
    theme?: Theme
}

export const Button = ({
    variant = 'primary',
    size = 'md',
    children,
    disabled,
    onClick,
    theme = defaultTheme,
    ...props
}: ButtonProps) => {
    return (
        <StyledButton
            variant={variant}
            size={size}
            disabled={disabled}
            onClick={onClick}
            theme={theme}
            {...props}
        >
            {children}
        </StyledButton>
    )
}
