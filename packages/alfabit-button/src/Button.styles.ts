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

    ${({ variant }) =>
        variant === 'primary' &&
        css`
            background: #5033c3;
            border: none;
            color: #ffffff;

            &:hover {
                background: #3d1eb3;
            }

            &:active {
                background: #2e0f9e;
            }

            &:disabled {
                background: #c3c3c3;
                cursor: not-allowed;
            }
        `}

    ${({ variant }) =>
        variant === 'secondary' &&
        css`
            background: transparent;
            border: 2px solid #5033c3;
            color: #5033c3;

            &:hover {
                background: #ede9ff;
            }

            &:active {
                background: #d5ccff;
            }

            &:disabled {
                border-color: #c3c3c3;
                color: #c3c3c3;
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
