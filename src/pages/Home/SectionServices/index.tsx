import { ServiceCard } from "../../../components/ServiceCard";
import { Title } from "../../../components/Title";

import { Container } from "./styles";

const SectionServices: React.FC = () => {
  return (
    <Container>
      <Title text="NOSSOS SERVIÇOS" />
      <div className="content">
        <ServiceCard icon="scissors.svg" title="Corte Social" />
        <ServiceCard icon="clipper.svg" title="Corte Degradê" />
        <ServiceCard icon="beard.svg" title="Barba e Bigode" />
        <ServiceCard icon="hair.svg" title="Alisamento" />
        <ServiceCard icon="face.svg" title="Sobrancelha" />
      </div>
    </Container>
  );
};

export { SectionServices };
