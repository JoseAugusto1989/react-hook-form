import styled from "styled-components";

export const Title = styled.h1``;

export const FormCSS = styled.form`
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
    background-color: #5aecec;
    border: none;
    border-radius: 5px;
    font-weight: bolder;
    font-size: medium;
    cursor: pointer;
`