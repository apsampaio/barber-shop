import { RevealFromLeft } from "../RevealFromLeft";
import { Container } from "./styles";

type Props = {
  title: string;
  icon: string;
};

const ServiceCard: React.FC<Props> = ({ icon, title }) => {
  return (
    <RevealFromLeft width="100%">
      <Container>
        <img src={"/barber-shop/icons/" + icon} alt="corte" />
        <p>{title}</p>
        <strong>R$ 30,00</strong>
      </Container>
    </RevealFromLeft>
  );
};

export { ServiceCard };
