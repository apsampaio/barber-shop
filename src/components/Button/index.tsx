import { ButtonHTMLAttributes } from "react";

import "./styles.css";

type Props = {
  text: string;
};

const Button: React.FC<Props & ButtonHTMLAttributes<HTMLButtonElement>> = (
  { text },
  ...rest
) => {
  return (
    <button className="custom-button" {...rest}>
      <p>{text}</p>
    </button>
  );
};

export { Button };
