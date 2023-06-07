import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-foreground);
  border-radius: 0.4rem;

  padding: 1rem 0;
  width: 90%;

  display: flex;

  & > img {
    width: 1.25rem;
    height: 1.25rem;

    margin: 0 1rem;
  }

  & > p {
    font-size: 1rem;

    color: var(--color-white);
    white-space: break-spaces;
  }

  & > strong {
    margin-left: auto;
    margin-right: 1rem;
    color: var(--color-white);
  }
`;
