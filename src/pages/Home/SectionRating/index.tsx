import { Title } from "../../../components/Title";
import { RevealAnimation } from "../../../components/RevealAnimation";

import {
  motion,
  useInView,
  useAnimation,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

import { useEffect, useRef } from "react";

import {
  Container,
  RatingResume,
  ResumeContainer,
  ProgressContainer,
  ProgressDivision,
  UserReview,
} from "./styles";

const Star: React.FC<{ filled?: boolean }> = ({ filled = false }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill={filled ? "#fabb05" : "none"}
      stroke="#fabb05"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-star"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
};

const Progress: React.FC<{ title: string; percent: number }> = ({
  title,
  percent,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  return (
    <ProgressDivision ref={ref}>
      <p>{title}</p>
      <div>
        <motion.div
          variants={{
            hidden: { width: 0 },
            visible: { width: percent + "%" },
          }}
          transition={{
            duration: 0.5,
            delay: 0.25,
            ease: "easeIn",
          }}
          initial={"hidden"}
          animate={mainControls}
        ></motion.div>
      </div>
    </ProgressDivision>
  );
};

const Counter: React.FC<{ from: number; to: number; duration: number }> = ({
  from,
  to,
  duration,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => latest.toPrecision(2));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration: duration });
      return controls.stop;
    }
  }, [isInView]);

  return <motion.p ref={ref}>{rounded}</motion.p>;
};

const SectionRating: React.FC = () => {
  return (
    <Container>
      <Title text="AVALIAÇÕES" />
      <div className="content">
        <RatingResume>
          <h2>Avaliações de clientes</h2>
          <div>
            <ProgressContainer>
              <Progress title="5" percent={100} />
              <Progress title="4" percent={0} />
              <Progress title="3" percent={0} />
              <Progress title="2" percent={0} />
              <Progress title="1" percent={0} />
            </ProgressContainer>
            <ResumeContainer>
              <Counter from={0} to={5} duration={1} />

              <div>
                <Star filled />
                <Star filled />
                <Star filled />
                <Star filled />
                <Star filled />
              </div>
              <p>(54)</p>
            </ResumeContainer>
          </div>
        </RatingResume>
        <RevealAnimation width="100%">
          <UserReview>
            <div></div>
            <p>
              "Boy é Zika, sem palavras pra ele Salão dele muito bem organizado"
            </p>
          </UserReview>
        </RevealAnimation>
        <RevealAnimation width="100%">
          <UserReview>
            <div></div>
            <p>"Atendimento Sensacional Nota 10 no corte de cabelo"</p>
          </UserReview>
        </RevealAnimation>
        <RevealAnimation width="100%">
          <UserReview>
            <div></div>
            <p>"Show de bola, corte top, atendimento top, barbeiro bonito!"</p>
          </UserReview>
        </RevealAnimation>
      </div>
    </Container>
  );
};

export { SectionRating };
