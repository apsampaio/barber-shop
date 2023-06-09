import { motion, useInView, useAnimation } from "framer-motion";
import { HTMLAttributes, useEffect, useRef } from "react";

type Props = {
  children?: JSX.Element | JSX.Element[];
  width?: "fit-content" | "100%";
};

const RevealFromRight: React.FC<Props & HTMLAttributes<HTMLDivElement>> = ({
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
      style={{
        position: "relative",
        width,
        overflow: "hidden",
      }}
      {...rest}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, x: +75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        transition={{
          duration: 0.5,
          delay: 0.25,
          type: "spring",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export { RevealFromRight };
