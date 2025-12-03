import styled, { css } from 'styled-components'
import { InputProps } from './Input'

export const InputContainer = styled.div<{
    hasLabel?: boolean
    isFocused?: boolean
}>`
    background: #f8f8f8;
    border: 1px solid transparent;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: ${({ hasLabel }) => (hasLabel ? '6px 16px' : '12px 16px')};
    width: 100%;

    ${({ isFocused }) =>
        isFocused &&
        css`
            border: 1px #1b4af0 solid;
        `}

    &:hover {
        border: 1px #1b4af0 solid;
    }
`

export const Label = styled.label`
    color: #5c5c5c;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
`

export const StyledInput = styled.input<InputProps>`
    background: transparent;
    border: none;
    color: #181818;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    padding: 0;
    width: 100%;

    &:focus {
        outline: none;
    }

    ${({ disabled }) =>
        disabled &&
        css`
            opacity: 0.5;
        `}

    &::placeholder {
        color: #8a8a8a;
    }
`

export const InputWrapper = styled.div`
    align-items: center;
    display: flex;
    gap: 12px;
`
