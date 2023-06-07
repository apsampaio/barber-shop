import { motion, useInView, useAnimation } from "framer-motion";
import { HTMLAttributes, useEffect, useRef } from "react";

type Props = {
  children?: JSX.Element | JSX.Element[];
  width?: "fit-content" | "100%";
};

const RevealAnimation: React.FC<Props & HTMLAttributes<HTMLDivElement>> = ({
  children,
  width = "fit-content",
  ...rest
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
          duration: 0.75,
          delay: 0.5,
          ease: "easeIn",
          type: "spring",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export { RevealAnimation };
