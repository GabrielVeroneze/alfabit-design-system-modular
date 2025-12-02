import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@gabriel_veroneze/alfabit-button'
import { Input } from '@gabriel_veroneze/alfabit-input'

const meta = {
    title: 'Organismos/Form',
    component: () => <div>Hello World</div>,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>
