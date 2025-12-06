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
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum euismod lacus, at eleifend justo ultricies non. Donec ac purus pretium, malesuada elit quis, cursus urna. Curabitur tristique eleifend tellus in tincidunt. Donec quis euismod quam. Phasellus et interdum ligula.',
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
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum euismod lacus, at eleifend justo ultricies non. Donec ac purus pretium, malesuada elit quis, cursus urna. Curabitur tristique eleifend tellus in tincidunt. Donec quis euismod quam. Phasellus et interdum ligula.',
    },
}
