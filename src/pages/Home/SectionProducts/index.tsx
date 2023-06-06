import { Container, Products, Product } from "./styles";

import { Title } from "../../../components/Title";
import { Button } from "../../../components/Button";

import PomadaImage from "../../../assets/chief-blue-web.jpg";

const SectionProducts: React.FC = () => {
  return (
    <Container>
      <Title text="PRODUTOS" />
      <div className="content">
        <Products>
          <Product>
            <img src={PomadaImage} alt="pomada" />
            <h4>Chief Pomade</h4>
            <p>À base de água</p>
          </Product>
          <Product>
            <img src={PomadaImage} alt="pomada" />
            <h4>Chief Pomade</h4>
            <p>À base de água</p>
          </Product>
          <Product>
            <img src={PomadaImage} alt="pomada" />
            <h4>Chief Pomade</h4>
            <p>À base de água</p>
          </Product>
          <Product>
            <img src={PomadaImage} alt="pomada" />
            <h4>Chief Pomade</h4>
            <p>À base de água</p>
          </Product>
        </Products>
        <Button text="ENCOMENDAR" />
      </div>
    </Container>
  );
};

export { SectionProducts };
