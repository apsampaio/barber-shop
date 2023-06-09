import { RevealAnimation } from "../../../components/RevealAnimation";
import { Button } from "../../../components/Button";
import { motion } from "framer-motion";

import { Container, Title, VideoContainer, BackgroundVideo } from "./styles";

const SectionHome: React.FC = () => {
  return (
    <Container>
      <VideoContainer>
        <BackgroundVideo
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
          <Button text="agendar" />
        </RevealAnimation>
      </div>
    </Container>
  );
};

export { SectionHome };
