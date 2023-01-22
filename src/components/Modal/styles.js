import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 38px;
    width: 100%;
    height: 100vh;
`

export const EditContainer = styled.form`
    flex: 1;
    margin-top: 32px;
    padding: 0 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    background-color: darkgray;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 30%);
    border-radius: 8px;
    border: 1px solid black;

    section {
        width: 50%;
        height: 35%;
        display: flex;
        flex-direction: column;
        align-items: center;
        > div {
            max-width: 80%;
            flex: 1;
        }

        button {
            max-width: 260px;
            height: 55px;
            margin: 0;
        }
    }
`

export const CloseModal = styled.button`
    width: 30px;
    height: 25px;
    background-color: red;
    position: absolute;
    left: 1058px;
    top: 220px;
    text-align: center;
    font-size: 15px;
    color: white;
    padding-top: 3px;
    border-radius: 6px;
    border: 1px solid black;
`