import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--color-black);

  position: relative;
  display: flex;
  flex-direction: column;

  align-items: center;

  & div.content {
    display: flex;
    flex-direction: column;

    align-items: center;
    gap: 0.5rem;

    width: 90%;
  }
`;

export const RatingResume = styled.div`
  background-color: var(--color-foreground);
  border-radius: 0.4rem;

  padding: 1rem;
  margin-bottom: 0.5rem;
  width: 100%;

  display: flex;
  flex-direction: column;

  h2 {
    color: var(--color-white);
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: 0.04em;

    padding-top: 0.5rem;
  }

  & > div {
    display: flex;
    flex: 1;
    margin-top: 0.75rem;
    width: 100%;
  }
`;

export const ProgressContainer = styled.div`
  flex: 1;
`;

export const ProgressDivision = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.5rem 0.25rem 0;

  p {
    color: var(--color-white);
    padding-right: 0.5rem;
    width: 20px;
    text-align: center;
  }

  div {
    width: 100%;
    height: 8px;
    border-radius: 4px;

    background-color: var(--color-black);
    position: relative;

    div {
      position: absolute;
      border-radius: 4px;
      background-color: var(--color-yellow);
      height: 100%;
    }
  }
`;

export const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;

  align-items: center;
  gap: 0.25rem;

  p:first-of-type {
    font-size: 2.5rem;
    color: var(--color-white);
    font-weight: medium;
  }

  p:last-of-type {
    color: var(--color-white);
    opacity: 0.7;
  }

  & > div {
    display: flex;
    gap: 0.25rem;
  }
`;
