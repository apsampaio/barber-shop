type Props = {
  text: string;
};

import { RevealAnimation } from "../RevealAnimation";

const Title: React.FC<Props> = ({ text }) => {
  return (
    <RevealAnimation width="100%">
      <div className="flex w-full items-center flex-col justify-center py-12">
        <h1 className="font-poppins font-semibold tracking-widest antialiased text-white uppercase sm:text-xl">
          {text}
        </h1>
        <span className="relative flex justify-center w-full">
          <span className="relative w-12 h-0.5 sm:w-24 rounded-3xl bg-white/90 -left-3 top-3 sm:top-6"></span>
          <img
            src={`${import.meta.env.BASE_URL}icons/mustache.svg`}
            alt="corte-icon"
            className="w-7 mx-2 sm:w-12"
          />
          <span className="relative w-12 h-0.5 sm:w-24 rounded-3xl bg-white/90 left-3 top-3 sm:top-6"></span>
        </span>
      </div>
    </RevealAnimation>
  );
};

export { Title };
