import { Title } from "../../../components/Title";

import { RevealFromRight } from "../../../components/RevealFromRight";
import { RevealFromLeft } from "../../../components/RevealFromLeft";

const SectionPortfolio: React.FC = () => {
  return (
    <div className="bg-foreground flex flex-col pb-12">
      <Title text="PORTFOLIO" />
      <div className="flex flex-col items-center h-full px-4">
        <div className="flex flex-wrap gap-2">
          <div className="flex-1 flex flex-col justify-between gap-2 mt-20">
            <RevealFromLeft>
              <img
                src="/barber-shop/portfolio/foto-1.jpg"
                alt="pic1"
                className="w-full shadow-md"
              />
            </RevealFromLeft>
            <RevealFromLeft>
              <img
                src="/barber-shop/portfolio/foto-2.jpg"
                alt="pic2"
                className="w-full shadow-md"
              />
            </RevealFromLeft>
            <RevealFromLeft>
              <img
                src="/barber-shop/portfolio/foto-3.jpg"
                alt="pic3"
                className="w-full shadow-md"
              />
            </RevealFromLeft>
          </div>
          <div className="flex-1 flex flex-col justify-between gap-2 mb-16">
            <RevealFromRight>
              <img
                src="/barber-shop/portfolio/foto-4.jpg"
                alt="pic4"
                className="w-full shadow-md"
              />
            </RevealFromRight>
            <RevealFromRight>
              <img
                src="/barber-shop/portfolio/foto-6.jpg"
                alt="pic5"
                className="w-full shadow-md"
              />
            </RevealFromRight>
            <RevealFromRight>
              <img
                src="/barber-shop/portfolio/foto-5.jpg"
                alt="pic6"
                className="w-full shadow-md"
              />
            </RevealFromRight>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SectionPortfolio };
