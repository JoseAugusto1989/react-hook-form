import styled from 'styled-components'

export const Label = styled.label`
    background-color: ${p => p.backgroundColor};
    color: ${p => p.color};
`

export const Input = styled.input`
    &:disabled {
        opacity: 0.6;
    }
`