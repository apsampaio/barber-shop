import { ServiceCard } from "../ServiceCard";
import { RevealAnimation } from "../RevealAnimation";

import "./styles.css";

const ServicesContainer: React.FC = () => {
  return (
    <div className="services-container">
      <RevealAnimation width="fit-content">
        <ServiceCard icon="/scissors.svg" title="Corte Social" />
      </RevealAnimation>
      <RevealAnimation width="fit-content">
        <ServiceCard icon="/clipper.svg" title="Corte Degradê" />
      </RevealAnimation>
      <RevealAnimation width="fit-content">
        <ServiceCard icon="/beard.svg" title="Barba e Bigode" />
      </RevealAnimation>
      <RevealAnimation width="fit-content">
        <ServiceCard icon="/hair.svg" title="Alisamento" />
      </RevealAnimation>
      <RevealAnimation width="fit-content">
        <ServiceCard icon="/face.svg" title="Sobrancelha" />
      </RevealAnimation>
    </div>
  );
};

export { ServicesContainer };
