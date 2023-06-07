import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--color-black);

  position: relative;
  display: flex;
  flex-direction: column;

  /* height: 80vh; */

  & div.content {
    display: flex;
    flex-direction: column;

    align-items: center;
    gap: 1.25rem;

    width: 100%;
  }
`;
