import type { Meta, StoryObj } from '@storybook/react-vite'
import { TextBlock } from '@gabriel_veroneze/alfabit-textblock'

const meta = {
    title: 'Moléculas/TextBlock',
    component: TextBlock,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        title: 'Título',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    argTypes: {
        title: {
            control: 'text',
        },
        description: {
            control: 'text',
        },
    },
} satisfies Meta<typeof TextBlock>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        title: 'Título',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
}
