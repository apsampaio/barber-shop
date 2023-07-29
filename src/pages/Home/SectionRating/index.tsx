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

// import { InfiniteWheel } from "../../../components/InfiniteWheel";
import { Star } from "../../../components/Star";

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
    <div className="flex items-center pr-2 pb-1" ref={ref}>
      <p className="text-white pr-2 w-5 text-center font-inter">{title}</p>
      <div className="w-full h-2 bg-background rounded relative">
        <motion.div
          className="absolute rounded bg-yellow-300 h-full"
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
    </div>
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

  return (
    <motion.p className="text-2xl text-white font-bold font-inter" ref={ref}>
      {rounded}
    </motion.p>
  );
};

const SectionRating: React.FC = () => {
  return (
    <div className="bg-background flex flex-col items-center pb-12">
      <Title text="AVALIAÇÕES" />
      <div className="flex flex-col gap-2 w-full px-4">
        <div
          className="p-4 border bg-foreground border-secondary mb-2 w-full
        flex flex-col"
        >
          <h2 className="text-white font-bold font-inter text-base tracking-wider"></h2>
          <div className="flex flex-1 mt-3 w-full">
            <div className="flex-1">
              <Progress title="5" percent={100} />
              <Progress title="4" percent={0} />
              <Progress title="3" percent={0} />
              <Progress title="2" percent={0} />
              <Progress title="1" percent={0} />
            </div>
            <div className="flex flex-col w-fit  items-center gap-1">
              <Counter from={0} to={5} duration={1} />
              <div className="flex gap-1">
                <Star filled />
                <Star filled />
                <Star filled />
                <Star filled />
                <Star filled />
              </div>
              <p className="text-white/70 font-inter">(57)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SectionRating };
