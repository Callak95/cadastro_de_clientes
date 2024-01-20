import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: auto;
  align-self: center;
  justify-content: center;

  padding: 0.5rem;
  margin: 1rem 0;

  border-radius: 0.8rem;

  background-color: grey;

  font-size: 1.2rem;

  h2 {
    line-height: 4rem;
    text-align: center;
    border-bottom: 1px solid antiquewhite;
  }

  label {
    display: flex;
    justify-content: space-between;
    width: 100%;

    span {
      display: flex;
      width: 180px;

      justify-content: flex-end;

      background-color: antiquewhite;

      padding: 0.5rem 0;
      border-radius: 0.8rem 0 0 0.8rem;
    }

    input {
      all: unset;
      width: 100%;
      padding: 0 0.5rem;
      background-color: antiquewhite;

      padding: 0.5rem 0.5rem;
      border-radius: 0 0.8rem 0.8rem 0;
    }

    span,
    input {
      margin-top: 1rem;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem 0;

    button {
      all: unset;
      width: 180px;
      padding: 0.5rem 0.2rem;
      font-size: 1.2rem;
      font-weight: 700;
      text-align: center;

      border-radius: 0.8rem;

      background-color: green;

      cursor: pointer;
    }
  }
`;
