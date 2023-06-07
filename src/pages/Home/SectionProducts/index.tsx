import { Container, Products, Column, Product } from "./styles";

import { Title } from "../../../components/Title";
import { Button } from "../../../components/Button";

import { RevealAnimation } from "../../../components/RevealAnimation";

import PomadaImage from "../../../assets/chief-blue-web.jpg";

const SectionProducts: React.FC = () => {
  return (
    <Container>
      <Title text="PRODUTOS" />
      <div className="content">
        <Products>
          <Column>
            <RevealAnimation>
              <Product>
                <img src={PomadaImage} alt="pomada" />
                <h4>Chief Pomade</h4>
                <p>À base de água</p>
              </Product>
            </RevealAnimation>
            <RevealAnimation>
              <Product>
                <img src={PomadaImage} alt="pomada" />
                <h4>Chief Pomade</h4>
                <p>À base de água</p>
              </Product>
            </RevealAnimation>
          </Column>
          <Column>
            <RevealAnimation>
              <Product>
                <img src={PomadaImage} alt="pomada" />
                <h4>Chief Pomade</h4>
                <p>À base de água</p>
              </Product>
            </RevealAnimation>
            <RevealAnimation>
              <Product>
                <img src={PomadaImage} alt="pomada" />
                <h4>Chief Pomade</h4>
                <p>À base de água</p>
              </Product>
            </RevealAnimation>
          </Column>
        </Products>
        <Button text="ENCOMENDAR" />
      </div>
    </Container>
  );
};

export { SectionProducts };
