import styled from "styled-components";

export const Container = styled.button`
  background-color: var(--color-brown-button);

  padding: 1rem;

  margin-top: 3rem;

  display: flex;
  border: none;
  border-radius: 4px;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  outline: none;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  p {
    color: var(--color-white);
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
`;
