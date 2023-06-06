import "./styles.css";

type Props = {
  text: string;
  color?: string;
};

import { RevealAnimation } from "../RevealAnimation";

const Title: React.FC<Props> = ({ text, color = "var(--color-white)" }) => {
  return (
    <RevealAnimation width="100%">
      <span className="section-title">
        <span></span>
        <h1
          style={{
            color,
          }}
        >
          {text}
        </h1>
        <span></span>
      </span>
    </RevealAnimation>
  );
};

export { Title };
