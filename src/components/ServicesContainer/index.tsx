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
        <ServiceCard icon="/scissors.svg" title="Corte Degradê" />
      </RevealAnimation>
      <RevealAnimation width="fit-content">
        <ServiceCard icon="/scissors.svg" title="Barba" />
      </RevealAnimation>
      <RevealAnimation width="fit-content">
        <ServiceCard icon="/scissors.svg" title="Alisamento" />
      </RevealAnimation>
      <RevealAnimation width="fit-content">
        <ServiceCard icon="/scissors.svg" title="Sobrancelha" />
      </RevealAnimation>
    </div>
  );
};

export { ServicesContainer };
