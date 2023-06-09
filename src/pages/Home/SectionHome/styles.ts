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
    z-index: 15;
    position: absolute;

    width: 100%;
    height: 100%;

    padding: 0rem 2rem 6rem 2rem;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
  }
`;

export const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const BackgroundVideo = styled.video`
  width: 100vw;
  height: 100vh;

  -o-object-fit: cover;
  object-fit: cover;
  background: linear-gradient(180deg, #1d1d1f 0%, #282a36 100%);

  filter: blur(7px) brightness(45%);
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  flex: 1;

  & > h1 {
    /* color: #f2dac2; */
    color: #f8f8f8;
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
    font-weight: bold;
    font-family: "Karantina", cursive;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
`;
