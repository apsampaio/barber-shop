import { Title } from "../../../components/Title";

import {
  motion,
  useInView,
  useAnimation,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

import { useEffect, useRef } from "react";

import { InfiniteWheel } from "../../../components/InfiniteWheel";
import { Star } from "../../../components/Star";

import {
  Container,
  RatingResume,
  ResumeContainer,
  ProgressContainer,
  ProgressDivision,
} from "./styles";

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
        <InfiniteWheel />
      </div>
    </Container>
  );
};

export { SectionRating };
