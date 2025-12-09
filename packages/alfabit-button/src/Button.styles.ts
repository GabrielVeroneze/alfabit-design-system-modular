import styled, { css } from 'styled-components'
import { ButtonProps } from './Button'

export const StyledButton = styled.button<ButtonProps>`
    align-items: center;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    font-size: 16px;
    font-weight: 600;
    justify-content: center;
    line-height: 24px;
    transition: all 0.2s ease-in-out;

    ${({ variant, theme }) =>
        variant === 'primary' &&
        css`
            background: ${theme.colors.primary};
            border: none;
            color: ${theme.colors.white};

            &:hover {
                background: ${theme.colors.primary};
            }

            &:active {
                background: ${theme.colors.primary};
            }

            &:disabled {
                background: ${theme.colors.disabled};
                cursor: not-allowed;
            }
        `}

    ${({ variant, theme }) =>
        variant === 'secondary' &&
        css`
            background: transparent;
            border: 2px solid ${theme.colors.primary};
            color: ${theme.colors.primary};

            &:active {
                background: ${theme.colors.secondary};
            }

            &:disabled {
                border-color: ${theme.colors.disabled};
                color: ${theme.colors.disabled};
                cursor: not-allowed;
            }
        `}

    ${({ size }) =>
        size === 'sm' &&
        css`
            font-size: 14px;
            padding: 8px 16px;
        `}

    ${({ size }) =>
        size === 'md' &&
        css`
            font-size: 16px;
            padding: 12px 24px;
        `}

    ${({ size }) =>
        size === 'lg' &&
        css`
            font-size: 18px;
            padding: 16px 32px;
        `}
`
