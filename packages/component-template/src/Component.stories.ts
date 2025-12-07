// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Component } from '@gabriel_veroneze/alfabit-component'

const meta = {
    title: 'Moléculas/Component',
    component: Component,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {},
    argTypes: {},
} satisfies Meta<typeof Component>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
}
