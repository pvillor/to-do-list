import styled from "styled-components";

export const Container = styled.div`
    background: ${props => props.isCompleted ? 'lightgreen' : 'white'};;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    height: 130px;
    padding: 16px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    border: 2px solid ${props => props.isCompleted ? 'green' : 'black'};
    color: black;

    :hover {
        width: 260px;
        height: 140px;
        cursor: text;
    }

    span {
        font-size: 18px;
        text-decoration: ${props => props.isCompleted ? 'line-through' : 'none'};
    }

    hr {
        width: 80%;
        margin-top: 16px;
        margin-bottom: 5px;
    }

    button {
        align-self: flex-end;
    }

    svg {
        font-size: 1.1rem;
        color: gray;
        margin-right: 4px;
        transform: translateY(3px);
    }
`