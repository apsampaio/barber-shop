import "./styles.css";

type Props = {
  text: string;
  color?: string;
};

const Title: React.FC<Props> = ({ text, color = "var(--color-white)" }) => {
  return (
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
  );
};

export { Title };
