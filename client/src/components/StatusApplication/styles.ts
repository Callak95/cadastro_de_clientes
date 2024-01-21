import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;

    justify-content: space-between;

    margin: 1rem 0;
    margin-left: -0.5rem;
    padding: 0.5rem;

    background-color: grey;
    border-radius: 0.8rem;

    font-size: 1.2rem;
    font-weight: 700;

    .success {
        color: green;
    }

    .error {
        color: red;
    }

    button {
        all: unset;
        display: flex;
        width: 15px;
        height: 15px;
        justify-content: center;
        align-items: center;
        font-size: 0.8rem;
        font-weight: 700;
        color: #fff;
        background-color: red;
        border: 1px solid #000;
        border-radius: 50%;
        cursor: pointer;
    }
`