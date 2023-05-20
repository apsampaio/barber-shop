import "./styles.css";

import PomadaImage from "../../assets/chief-blue-web.jpg";
import { motion } from "framer-motion";
import { Reveal } from "../../components/Reveal";

const Home: React.FC = () => {
  return (
    <div className="wrapper">
      <section className="one">
        <div className="content">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              type: "spring",
              stiffness: 100,
            }}
          >
            BOY BARBERSHOP
          </motion.h1>
          <motion.p
            initial={{
              y: 15,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 1.25,
              ease: "easeInOut",
              type: "keyframes",
            }}
          >
            Mantenha o visual sempre em dia
          </motion.p>
        </div>
      </section>
      <section className="two">
        <Reveal width="100%">
          <span className="section-title">
            <span></span>
            <h1>NOSSOS SERVIÇOS</h1>
            <span></span>
          </span>
        </Reveal>
        <div className="content">
          <div className="services">
            <Reveal>
              <img src="/cut.svg" alt="corte" />
              <h4>Corte social</h4>
              <p>Lorem ipsum dolor sit amet consectetur adi</p>
            </Reveal>
            <Reveal>
              <img src="/beard.svg" alt="barba" />
              <h4>Barba</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facilis sit aperiam voluptates vel cupiditate porro repudiandae
              </p>
            </Reveal>
            <Reveal>
              <img src="/painting.svg" alt="tintura" />
              <h4>Tintura de cabelo</h4>
              <p>Lorem ipsum dolor sit amet Facilis sit aperiam voluptate</p>
            </Reveal>
            <Reveal>
              <img src="" alt="" />
              <h2></h2>
              <p></p>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="three">
        <span className="section-title">
          <span></span>
          <h1>PORTFOLIO</h1>
          <span></span>
        </span>
        <div className="content">
          <div className="portfolio">
            <div className="column">
              <img src="/portfolio/pic1.jfif" alt="pic1" />
              <img src="/portfolio/pic2.jfif" alt="pic2" />
              <img src="/portfolio/pic5.jfif" alt="pic5" />
            </div>
            <div className="column">
              <img src="/portfolio/pic3.jfif" alt="pic3" />
              <img src="/portfolio/pic4.jfif" alt="pic4" />
            </div>
          </div>
          <button>
            <p>VER MAIS</p>
          </button>
        </div>
      </section>
      <section className="four">
        <span className="section-title">
          <span></span>
          <h1>PRODUTOS</h1>
          <span></span>
        </span>
        <div className="content">
          <div className="products">
            <div className="product">
              <img src={PomadaImage} alt="pomada" />
              <h4>Chief Pomade</h4>
              <p>À base de água</p>
            </div>
            <div className="product">
              <img src={PomadaImage} alt="pomada" />
              <h4>Chief Pomade</h4>
              <p>À base de água</p>
            </div>
            <div className="product">
              <img src={PomadaImage} alt="pomada" />
              <h4>Chief Pomade</h4>
              <p>À base de água</p>
            </div>
            <div className="product">
              <img src={PomadaImage} alt="pomada" />
              <h4>Chief Pomade</h4>
              <p>À base de água</p>
            </div>
          </div>
          <button>
            <p>ENCOMENDAR</p>
          </button>
        </div>
      </section>
      <section className="five">
        <span className="section-title">
          <span></span>
          <h1>CONTATO</h1>
          <span></span>
        </span>
        <div className="content">
          <div>
            <p className="title">Whatsapp</p>
            <p className="info">+55 15 9999-9999</p>
          </div>
          <div>
            <p className="title">Instagram</p>
            <p className="info">@barbershop</p>
          </div>
          <div>
            <p className="title">Localização</p>
            <p className="info">Sorocaba - SP</p>
            <p className="sub">Av. Thomaz Cortez, Jardim Juliana, 120</p>
          </div>
          <div className="map">
            <iframe
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Avenida Thomaz Cortez, 120&t=&z=15&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export { Home };
