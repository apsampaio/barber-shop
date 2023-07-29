type Props = {
  text: string;
};

import { RevealAnimation } from "../RevealAnimation";

const Title: React.FC<Props> = ({ text }) => {
  return (
    <RevealAnimation width="100%">
      <div className="flex w-full items-center flex-col justify-center py-12">
        <h1 className="font-inter font-bold tracking-widest subpixel-antialiased text-white uppercase">
          {text}
        </h1>
        <span className="relative flex justify-center w-full">
          <span className="relative w-12 h-0.5 rounded-3xl bg-white/90 -left-3 top-3"></span>
          <img
            src={"/barber-shop/icons/mustache.svg"}
            alt="corte-icon"
            className="w-7 mx-2"
          />
          <span className="relative w-12 h-0.5 rounded-3xl bg-white/90 left-3 top-3"></span>
        </span>
      </div>
    </RevealAnimation>
  );
};

export { Title };
