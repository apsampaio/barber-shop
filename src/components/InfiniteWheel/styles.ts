import styled from "styled-components";

type Props = {
  total: number;
};

export const Container = styled.div`
  overflow: hidden;

  width: 100vw;
  height: 130px;

  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);

  position: relative;

  &::before,
  &::after {
    background: linear-gradient(
      to right,
      var(--color-foreground) 0%,
      rgba(26, 26, 26, 0) 100%
    );
    content: "";
    height: 160px;
    position: absolute;
    width: 100px;
    z-index: 2;
  }

  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }
`;

export const Slider = styled.div<Props>`
  display: flex;
  width: calc((358px) * ${(props) => props.total});
  animation: scroll 40s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(calc(100vw + 10px));
    }
    100% {
      transform: translateX(calc((-358px * ${(props) => props.total}) - 50px));
    }
  }
`;

export const UserReview = styled.div`
  width: 350px;
  height: 130px;

  border-radius: 4px;
  background-color: var(--color-foreground);

  display: flex;
  flex-direction: column;

  padding: 0.5rem 1rem;

  margin-right: 8px;

  div {
    display: flex;
    align-items: center;

    div {
      width: 32px;
      height: 32px;

      background-color: lightgray;
      border-radius: 100%;
      margin: 0.5rem;
    }
  }

  p {
    margin-top: 4px;
    overflow: hidden;
    text-overflow: ellipsis;

    width: 320px;
    color: var(--color-white);
  }
`;
