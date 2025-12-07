import { Description, Title, Wrapper } from './TextBlock.styles'
import React from 'react'

export interface TextBlockProps {
    title: string
    description: string
}

export const TextBlock = ({ title, description }: TextBlockProps) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Wrapper>
    )
}
