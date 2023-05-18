import "./styles.css";

import PomadaImage from "../../assets/chief-blue-web.jpg";

const Home: React.FC = () => {
  return (
    <div className="wrapper">
      <section className="one">
        <div className="content">
          <h1>Mantenha o visual sempre em dia</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisi elit.</p>
        </div>
        <div className="info">
          <img src="/chevrons-up.svg" alt="arraste-para-cima" />
          <p>Arraste para conhecer</p>
        </div>
      </section>
      <section className="two">
        <span className="section-title">
          <span></span>
          <h1>NOSSOS SERVIÇOS</h1>
          <span></span>
        </span>
        <div className="content">
          <div className="services">
            <div>
              <img src="/cut.svg" alt="corte" />
              <h4>Corte social</h4>
              <p>Lorem ipsum dolor sit amet consectetur adi</p>
            </div>
            <div>
              <img src="/beard.svg" alt="barba" />
              <h4>Barba</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facilis sit aperiam voluptates vel cupiditate porro repudiandae
              </p>
            </div>
            <div>
              <img src="/painting.svg" alt="tintura" />
              <h4>Tintura de cabelo</h4>
              <p>Lorem ipsum dolor sit amet Facilis sit aperiam voluptate</p>
            </div>
            <div>
              <img src="" alt="" />
              <h2></h2>
              <p></p>
            </div>
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
          <h1>PRODUTOS</h1>
          <span></span>
        </span>
        <div className="content"></div>
      </section>
    </div>
  );
};

export { Home };
