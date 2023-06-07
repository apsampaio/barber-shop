import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--color-black);

  position: relative;
  display: flex;
  flex-direction: column;

  & div.content {
    display: flex;
    flex-direction: column;

    width: 100%;

    padding: 0 1.5rem;
    padding-bottom: 4rem;
  }
`;

export const Section = styled.div`
  margin-bottom: 1.5rem;

  & > p:nth-child(1) {
    color: var(--color-brown);
    font-weight: 700;
    font-size: 0.95;
    margin-bottom: 4px;
  }

  & > p:nth-child(2) {
    color: var(--color-white);
    font-weight: 600;
    margin-bottom: 2px;
  }

  & > p:nth-child(3) {
    color: var(--color-white);
    font-family: "Roboto", sans-serif;
  }
`;

export const Map = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;
  background-color: var(--color-black);
  border-radius: 4px;

  & iframe {
    border: none;
    border-radius: 4px;

    width: 100%;
    height: 200px;
  }
`;
