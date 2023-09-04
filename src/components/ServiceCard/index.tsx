import { RevealFromLeft } from "../RevealFromLeft";

type Props = {
  title: string;
  icon: string;
  price: string;
};

const ServiceCard: React.FC<Props> = ({ title, price }) => {
  return (
    <RevealFromLeft width="100%">
      <div className="w-full py-4 flex border border-secondary bg-foreground sm:max-w-md sm:min-w-fit">
        {/* <img
          src={"/barber-shop/icons/" + icon}
          alt="corte-icon"
          className="w-5 h-5 mx-4"
        /> */}
        <p className="w-2 h-2 rounded-full bg-primary mx-4 my-2"></p>
        <p className="text-base text-white font-inter whitespace-break-spaces">
          {title}
        </p>
        <strong className="ml-auto mr-4 text-white font-inter">{price}</strong>
      </div>
    </RevealFromLeft>
  );
};

export { ServiceCard };
