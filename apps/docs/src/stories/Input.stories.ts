import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from '@gabriel_veroneze/alfabit-input'

const meta = {
    title: 'Example/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { disabled: false, placeholder: 'Placeholder' },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        placeholder: 'Placeholder',
        label: 'Label',
    },
}
