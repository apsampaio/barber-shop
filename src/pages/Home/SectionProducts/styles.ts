import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--color-black);

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

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
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
