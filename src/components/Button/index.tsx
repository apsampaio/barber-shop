import { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button: React.FC<Props> = ({ text }, ...rest) => {
  return (
    <Container {...rest}>
      <p>{text}</p>
    </Container>
  );
};

export { Button };
