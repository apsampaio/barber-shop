import "./styles.css";

const Home: React.FC = () => {
  return (
    <div className="wrapper">
      <header>
        <img src="/logo.svg" alt="Logo" />
      </header>
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
        <div className="content">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque cum
            dicta, ut debitis, incidunt laborum quibusdam sint quis modi quos
            corrupti recusandae nemo. Consectetur labore vitae quidem corporis
            unde aut.
          </p>
        </div>
      </section>
      <section className="three">
        <div className="content">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
            aliquam consectetur quibusdam, magnam quisquam vitae? Excepturi iste
            voluptatem provident dignissimos nostrum laudantium dolorem.
            Accusamus animi consequatur debitis blanditiis laboriosam
            reiciendis!
          </p>
        </div>
      </section>
    </div>
  );
};

export { Home };
