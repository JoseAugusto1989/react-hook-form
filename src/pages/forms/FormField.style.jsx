import styled from "styled-components";

export const Title = styled.h1``;

export const Form = styled.form`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
`

export const Img = styled.img`
    max-width: 300px;
` 

export const Label = styled.label`
    display: flex;
    flex-direction: column;
`

export const Input = styled.input`
     border-radius: 5px;
    border: 1px solid gray;
    height: 25px;
    width: 300px;
`

export const Button = styled.button`
    width: 300px;
    height: 40px;
    background-color: aqua;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
`

export const Span = styled.span`
    color: red;
    position: absolute;
    margin-top: 50px;
`