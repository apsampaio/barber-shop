import { ServiceCard } from "../../../components/ServiceCard";
import { Title } from "../../../components/Title";

const services_hair = [
  { icon: "clear.svg", title: "Acabamento", price: "R$ 10,00" },
  { icon: "clipper.svg", title: "Máquina", price: "R$ 15,00" },
  { icon: "scissors.svg", title: "Social", price: "R$ 25,00" },
  { icon: "comb.svg", title: "Degradê", price: "R$ 30,00" },
];

const services_esthetics = [
  { icon: "face.svg", title: "Sobrancelha", price: "R$ 10,00" },
  { icon: "beard.svg", title: "Barba", price: "R$ 30,00" },
  { icon: "spa.svg", title: "Limpeza de pele", price: "R$ 35,00" },

  { icon: "hair.svg", title: "Hidratação", price: "R$ 15,00" },
  { icon: "hair.svg", title: "Alisamento", price: "R$ 25,00" },
  { icon: "spray.svg", title: "Relaxamento", price: "R$ 25,00" },
  { icon: "face.svg", title: "Luzes", price: "R$ 30,00" },
];

const services_combo = [
  { icon: "hair.svg", title: "Corte & Barba", price: "R$ 55,00" },
];

const SectionServices: React.FC = () => {
  return (
    <div className="relative flex flex-col bg-background pb-2">
      <Title text="NOSSOS SERVIÇOS" />
      <div className="flex flex-col items-center gap-5 w-full px-4">
        <div className="flex flex-col items-center w-full gap-5">
          <p className="font-kaushan text-white text-2xl tracking-widest antialiased">
            Cabelo
          </p>
          {services_hair.map((s) => (
            <ServiceCard
              icon={s.icon}
              price={s.price}
              title={s.title}
              key={s.title}
            />
          ))}
        </div>
        <div className="flex flex-col items-center w-full gap-5">
          <p className="font-kaushan text-white text-2xl tracking-widest antialiased">
            Estética
          </p>
          {services_esthetics.map((s) => (
            <ServiceCard
              icon={s.icon}
              price={s.price}
              title={s.title}
              key={s.title}
            />
          ))}
        </div>
        <div className="flex flex-col items-center w-full gap-5">
          <p className="font-kaushan text-white text-2xl tracking-widest antialiased">
            Combo
          </p>
          {services_combo.map((s) => (
            <ServiceCard
              icon={s.icon}
              price={s.price}
              title={s.title}
              key={s.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { SectionServices };
