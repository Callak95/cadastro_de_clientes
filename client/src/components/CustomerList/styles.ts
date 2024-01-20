import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: auto;
  align-self: center;

  padding: 0.5rem;
  margin: 1rem 0;

  border-radius: 0.8rem;

  background-color: grey;

  h2 {
    text-align: center;
    font-weight: 700;
    line-height: 4rem;
    border-bottom: 1px solid white;
  }

  ul {
    margin: 1rem 0;
  }
`;
