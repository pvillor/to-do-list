import styled, { css } from "styled-components";

export const Container = styled.div`
    text-align: left;
    div {
        span {
            color: red;
        }
    }
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

    ${props => props.isErrored && css`
        border-color: red;
        svg {
            color: red;
        }
    `}

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