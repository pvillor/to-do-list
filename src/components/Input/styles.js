import styled, { css } from "styled-components";

export const Container = styled.div`
    text-align: left;
`

export const InputContainer = styled.div`
    background: white;
    border-radius: 10px;
    border: 2px solid gray;
    color: gray;
    padding: 1rem;
    width: 100%;
    display: flex;
    transition: 0.4s;

    input {
        background: transparent;
        align-items: center;
        flex: 1;
        border: 0;
        color: black;
        &::placeholder {
            color: gray;
        }
    }
    svg {
        margin-right: 16px;
    }
`