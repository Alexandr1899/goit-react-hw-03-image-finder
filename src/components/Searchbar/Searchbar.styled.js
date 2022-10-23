import styled from "styled-components";

export const Header = styled.header`
    width: 100vw;
    background-color: #3f51b5;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 20px
`

export const Form = styled.form``

export const FormButton = styled.button`
    background-color: #fff;
    border: none;
    padding: 10px;
    border-radius: 5px 0 0 5px;
`

export const Input = styled.input`
    height: 36px;
    width: 300px;
    border-radius: 0 5px 5px 0;
    padding-left: 10px;
    outline: none;
    border: none;
    color: #3f51b5;

    ::placeholder {
        color: #3f51b5;
    }
`