import './button.css'

export interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'tertiary'
    backgroundColor?: string
    size?: 'small' | 'medium' | 'large'
    label: string
    onClick?: () => void
}

export const Button = ({
    variant = 'primary',
    size = 'medium',
    backgroundColor,
    label,
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
            style={{ backgroundColor }}
            {...props}
        >
            {label}
        </button>
    )
}
