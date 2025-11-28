import './button.css'

export interface ButtonProps {
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
    iconPosition = 'left',
    disabled = false,
    ...props
}: ButtonProps) => {
    const mode =
        variant === 'primary'
            ? 'storybook-button--primary'
            : 'storybook-button--secondary'

    return (
        <button
            type="button"
            className={[
                'storybook-button',
                `storybook-button--${size}`,
                mode,
            ].join(' ')}
            {...props}
        >
            {label}
        </button>
    )
}
