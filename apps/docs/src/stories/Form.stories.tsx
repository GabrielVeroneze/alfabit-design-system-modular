import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Button } from '@gabriel_veroneze/alfabit-button'
import { Input } from '@gabriel_veroneze/alfabit-input'
import styled from 'styled-components'

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const StyledInputField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
    width: 100%;
`

const StyledButtonField = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

const StyledInput = styled(Input)`
    width: 100%;
`

interface FormProps {
    onSubmit: () => void
    fields: {
        label: string
        placeholder: string
    }[]
}

const Form = ({ fields, onSubmit }: FormProps) => {
    return (
        <StyledForm>
            {fields.map((field) => (
                <StyledInputField key={field.label}>
                    <StyledInput
                        label={field.label}
                        placeholder={field.placeholder}
                    />
                </StyledInputField>
            ))}
            <StyledButtonField>
                <Button onClick={onSubmit}>Enviar</Button>
            </StyledButtonField>
        </StyledForm>
    )
}

const meta = {
    title: 'Organismos/Form',
    component: Form,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Form>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        onSubmit: fn(),
        fields: [
            { label: 'Nome', placeholder: 'ex: João da Silva' },
            { label: 'Email', placeholder: 'ex: joaosilva@email.com' },
        ],
    },
}
