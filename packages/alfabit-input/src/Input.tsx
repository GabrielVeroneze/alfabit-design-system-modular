import React, { useState } from 'react'
import { InputContainer, Label, StyledInput } from './Input.styles'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    disabled?: boolean
    placeholder?: string
    label?: string
}

export const Input = ({
    disabled,
    placeholder,
    label,
    ...props
}: InputProps) => {
    const [isFocused, setIsFocused] = useState(false)

    return (
        <InputContainer hasLabel={!!label} isFocused={isFocused}>
            {label && <Label>{label}</Label>}
            <StyledInput
                disabled={disabled}
                placeholder={placeholder}
                {...props}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </InputContainer>
    )
}
