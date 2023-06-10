import { Container, Products, Column, Product } from "./styles";

import { Title } from "../../../components/Title";
import { Button } from "../../../components/Button";

import { RevealAnimation } from "../../../components/RevealAnimation";

import PomadaImage from "../../../assets/chief-blue-web.jpg";

const SectionProducts: React.FC = () => {
  const handleOpenAgenda = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=5515988209226&text=Ol%C3%A1,%20%20gostaria%20de%20encomendar%20um%20produto%20da%20barbearia!",
      "_blank"
    );
  };

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
        <Button text="ENCOMENDAR" onClick={handleOpenAgenda} />
      </div>
    </Container>
  );
};

export { SectionProducts };
