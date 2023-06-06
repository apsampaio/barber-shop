import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--color-foreground);

  position: relative;
  display: flex;
  flex-direction: column;

  & div.content {
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100%;
    padding: 0 1.5rem;
    padding-bottom: 2rem;
  }
`;

export const Products = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: calc(50% - 1rem);
  height: fit-content;

  padding: 1rem;

  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);

  background-color: #f8f8f8;

  & > img {
    width: 100%;
  }

  & > h4 {
    color: var(--color-foreground);
  }
  & > p {
    color: var(--color-foreground);
    font-size: 80%;
    margin-top: 0.4rem;
  }
`;
