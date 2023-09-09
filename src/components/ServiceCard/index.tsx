import { RevealFromLeft } from "../RevealFromLeft";

type Props = {
  title: string;
  icon: string;
  price: string;
};

const ServiceCard: React.FC<Props> = ({ title, price }) => {
  return (
    <RevealFromLeft width="100%">
      <h1 className="relative h-4 inline-block w-full xl:w-72 xl:h-8 text-sm text-justify border-b-2 border-dotted border-white">
        <span
          className="uppercase text-white font-oswald font-medium text-md xl:text-xl tracking-widest 
          inline-block absolute left-0 -bottom-1 bg-background text-left pr-1 leading-5"
        >
          {title}
        </span>
        <span
          className="uppercase text-primary font-oswald font-normal text-base xl:text-lg tracking-wide antialiased
          inline-block absolute right-0 -bottom-1 bg-background text-left pl-1 leading-5"
        >
          {price}
        </span>
      </h1>
    </RevealFromLeft>
  );
};

export { ServiceCard };
