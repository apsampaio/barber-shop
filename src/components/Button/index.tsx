import { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button: React.FC<Props> = ({ text, onClick }, ...rest) => {
  return (
    <Container onClick={onClick} {...rest}>
      <p>{text}</p>
    </Container>
  );
};

export { Button };
