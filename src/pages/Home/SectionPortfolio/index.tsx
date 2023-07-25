import { Container, Portfolio, Column } from "./styles";

import { Title } from "../../../components/Title";

import { RevealFromRight } from "../../../components/RevealFromRight";
import { RevealFromLeft } from "../../../components/RevealFromLeft";

const SectionPortfolio: React.FC = () => {
  return (
    <Container>
      <Title text="PORTFOLIO" />
      <div className="content">
        <Portfolio>
          <Column>
            <RevealFromLeft>
              <img src="/barber-shop/portfolio/foto-1.jpg" alt="pic1" />
            </RevealFromLeft>
            <RevealFromLeft>
              <img src="/barber-shop/portfolio/foto-2.jpg" alt="pic2" />
            </RevealFromLeft>
            <RevealFromLeft>
              <img src="/barber-shop/portfolio/foto-3.jpg" alt="pic5" />
            </RevealFromLeft>
          </Column>
          <Column>
            <RevealFromRight>
              <img src="/barber-shop/portfolio/foto-4.jpg" alt="pic3" />
            </RevealFromRight>
            <RevealFromRight>
              <img src="/barber-shop/portfolio/foto-6.jpg" alt="pic3" />
            </RevealFromRight>
            <RevealFromRight>
              <img src="/barber-shop/portfolio/foto-5.jpg" alt="pic4" />
            </RevealFromRight>
          </Column>
        </Portfolio>
        {/* <Button text="VER MAIS" /> */}
      </div>
    </Container>
  );
};

export { SectionPortfolio };
