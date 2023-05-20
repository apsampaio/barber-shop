import { motion, useInView, useAnimation } from "framer-motion";
import { HTMLAttributes, useEffect, useRef } from "react";

type Props = {
  children?: JSX.Element | JSX.Element[];
  width?: "fit-content" | "100%";
};

const Reveal: React.FC<Props & HTMLAttributes<HTMLDivElement>> = ({
  children,
  width = "fit-content",
  ...rest
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    console.log(isInView);

    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    } else {
      mainControls.start("hidden");
      slideControls.start("hidden");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div
      ref={ref}
      style={{ position: "relative", width, overflow: "hidden" }}
      {...rest}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.5,
          delay: 0.25,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export { Reveal };
