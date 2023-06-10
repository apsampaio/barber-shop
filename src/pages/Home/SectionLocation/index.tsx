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
            <p>+55 15 98820-9226</p>
          </Section>
        </RevealAnimation>
        <RevealAnimation>
          <Section>
            <p>Instagram</p>
            <p>@boybarbershop_</p>
          </Section>
        </RevealAnimation>
        <RevealAnimation>
          <Section>
            <p>Localização</p>
            <p>R. Thomás Cortêz, 91 - Jardim Juliana</p>
            <p>Sorocaba - SP - 18080-300, Brasil</p>
          </Section>
        </RevealAnimation>
        <RevealAnimation>
          <Section>
            <p>Horários e Funcionamento</p>
            <p>Ter à Sex 10:00h às 21:00h</p>
            <p>Sab 09:00h às 19:00h</p>
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
