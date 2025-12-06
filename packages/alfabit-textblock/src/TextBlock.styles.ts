import { background, gray } from '@gabriel_veroneze/alfabit-tokens'
import styled from 'styled-components'

export const Wrapper = styled.div`
    background: ${background.dark};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 32px 48px;
`

export const Title = styled.h2`
    color: ${gray.primary};
    font-size: 24px;
    font-weight: 800;
    line-height: 30px;
    margin: 0;
`

export const Description = styled.p`
    color: ${gray.primary};
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin: 0;
`
