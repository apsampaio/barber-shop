import { Title } from "../../../components/Title";
import { RevealAnimation } from "../../../components/RevealAnimation";

import { Container, Map, Section } from "./styles";

const SectionLocation: React.FC = () => {
  return (
    <Container>
      <Title text="CONTATO" />
      <div className="content">
        <RevealAnimation>
          <Section>
            <p>Whatsapp</p>
            <p>+55 15 9999-9999</p>
          </Section>
        </RevealAnimation>
        <RevealAnimation>
          <Section>
            <p>Instagram</p>
            <p>@barbershop</p>
          </Section>
        </RevealAnimation>
        <RevealAnimation>
          <Section>
            <p>Localização</p>
            <p>Sorocaba - SP</p>
            <p>Av. Thomaz Cortez, Jardim Juliana, 120</p>
          </Section>
        </RevealAnimation>
        <Map>
          <iframe
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Avenida Thomaz Cortez, 120&t=&z=15&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </Map>
      </div>
    </Container>
  );
};

export { SectionLocation };
