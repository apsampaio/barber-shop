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
  }
`;

export const Portfolio = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 0.5rem;
`;

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;

  & img {
    width: 100%;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }
`;
