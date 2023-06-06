import styled from "styled-components";

export const Container = styled.section`
  background-size: cover;
  background-position: center;
  background-image: url("background.png");

  position: relative;
  display: flex;
  flex-direction: column;

  height: 100vh;
  padding-bottom: 6rem;

  & div.content {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    padding: 0 2.5rem;
    height: 100%;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  flex: 1;

  & > h1 {
    color: #f2dac2;
    text-align: center;
    font-family: "Karantina", cursive;
    font-weight: 700;
    letter-spacing: 0.08em;

    margin-bottom: 1rem;
    font-size: 4rem;
  }

  & > p {
    color: var(--color-brown);
    text-align: center;
    font-family: "Karantina", cursive;
    font-size: 1.75rem;
    text-transform: uppercase;
  }
`;
