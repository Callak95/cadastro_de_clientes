import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;

  background-color: beige;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const Title = styled.div`
  width: 100%;
  height: auto;

  padding: 0 0.5rem;
  margin-left: -0.5rem;

  border-radius: 0 0 0.8rem 0.8rem;

  background-color: grey;

  text-align: center;

  h1 {
    font-size: 1.9rem;
    line-height: 4rem;
  }
`;
