import { ServiceCard } from "../../../components/ServiceCard";
import { Title } from "../../../components/Title";

const SectionServices: React.FC = () => {
  return (
    <div className="relative flex flex-col bg-background pb-2">
      <Title text="NOSSOS SERVIÇOS" />
      <div className="flex flex-col items-center gap-5 w-full px-4">
        <ServiceCard
          icon="scissors.svg"
          title="Corte Social"
          price="R$ 30,00"
        />
        <ServiceCard
          icon="clipper.svg"
          title="Corte Degradê"
          price="R$ 30,00"
        />
        <ServiceCard icon="beard.svg" title="Barba e Bigode" price="R$ 30,00" />
        <ServiceCard icon="hair.svg" title="Alisamento" price="R$ 30,00" />
        <ServiceCard icon="face.svg" title="Sobrancelha" price="R$ 15,00" />
      </div>
    </div>
  );
};

export { SectionServices };
