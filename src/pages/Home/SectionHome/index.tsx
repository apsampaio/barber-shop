import { RevealAnimation } from "../../../components/RevealAnimation";
import { Button } from "../../../components/Button";
import { motion } from "framer-motion";

import { Container, Title, VideoContainer, BackgroundVideo } from "./styles";
import { useEffect, useRef } from "react";

const SectionHome: React.FC = () => {
  const ref = useRef<null | HTMLVideoElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.play();
    }
  }, [ref]);

  const handleOpenAgenda = () => {
    window.open(
      "https://chat.inbarberapp.com/?id=5df4b82e-d424-402e-b29d-d8d766d79b2c",
      "_blank"
    );
  };

  return (
    <Container>
      <VideoContainer>
        <BackgroundVideo
          ref={ref}
          playsInline
          autoPlay
          loop
          muted
          src={"/barber-shop/background.mp4"}
        />
      </VideoContainer>
      <div className="content">
        <Title>
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              type: "spring",
              stiffness: 100,
            }}
          >
            BOY BARBERSHOP
          </motion.h1>
          <motion.p
            initial={{
              y: 15,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 1.25,
              ease: "easeInOut",
              type: "keyframes",
            }}
          >
            Mantenha o visual sempre em dia
          </motion.p>
        </Title>
        <RevealAnimation width="100%">
          <Button text="agendar" onClick={handleOpenAgenda} />
        </RevealAnimation>
      </div>
    </Container>
  );
};

export { SectionHome };
