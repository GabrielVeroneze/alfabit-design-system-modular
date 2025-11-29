import { Button } from '@gabriel_veroneze/alfabit-button'
import { fn } from 'storybook/test'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    title: 'Example/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        children: 'Primary Button',
    },
}
