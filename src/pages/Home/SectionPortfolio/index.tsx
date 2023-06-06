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
              <img src="/barber-shop/portfolio/pic1.jfif" alt="pic1" />
            </RevealFromLeft>
            <RevealFromLeft>
              <img src="/barber-shop/portfolio/pic2.jfif" alt="pic2" />
            </RevealFromLeft>
            <RevealFromLeft>
              <img src="/barber-shop/portfolio/pic5.jfif" alt="pic5" />
            </RevealFromLeft>
          </Column>
          <Column>
            <RevealFromRight>
              <img src="/barber-shop/portfolio/pic3.jfif" alt="pic3" />
            </RevealFromRight>
            <RevealFromRight>
              <img src="/barber-shop/portfolio/pic4.jfif" alt="pic4" />
            </RevealFromRight>
          </Column>
        </Portfolio>
        {/* <Button text="VER MAIS" /> */}
      </div>
    </Container>
  );
};

export { SectionPortfolio };
