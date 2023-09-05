import { Title } from "../../../components/Title";
import { RevealAnimation } from "../../../components/RevealAnimation";

type iProduct = {
  src: string;
  name: string;
  description: string;
};

const products: iProduct[] = [
  {
    src: "products/product-1.jpeg",
    name: "GEL FIXADOR",
    description: "Extra forte sem deixar resíduos",
  },
  {
    src: "products/product-2.jpeg",
    name: "POMADA CAPILAR",
    description: "Efeito seco sem resíduos",
  },
  {
    src: "products/product-3.jpeg",
    name: "ÓLEO PARA BARBA",
    description: "Hidrata e amacia",
  },
  {
    src: "products/product-4.jpeg",
    name: "POMADA EM PÓ",
    description: "Controla e modela",
  },
  {
    src: "products/product-5.jpeg",
    name: "GEL FIXADOR (BLACK)",
    description: "Extra forte sem deixar resíduos",
  },
  {
    src: "products/product-6.jpeg",
    name: "POMADA CAPILAR",
    description: "Efeito seco sem resíduos",
  },
];

const Product: React.FC<iProduct> = (product: iProduct) => {
  return (
    <RevealAnimation>
      <div className="flex flex-col items-center max-w-sm p-2 sm:p-4 rounded-sm border-primary border">
        <img src={product.src} alt="pomada" className="w-40 sm:w-56" />
        <h4 className="text-white font-inter font-bold pt-4 truncate w-40 sm:w-56 text-center">
          {product.name}
        </h4>
        <p className="mt-2 text-white truncate w-40 sm:w-56 text-center">
          {product.description}
        </p>
      </div>
    </RevealAnimation>
  );
};

const SectionProducts: React.FC = () => {
  const handleOpenAgenda = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=5515988209226&text=Ol%C3%A1,%20%20gostaria%20de%20encomendar%20um%20produto%20da%20barbearia!",
      "_blank"
    );
  };

  return (
    <div className="bg-foreground flex flex-col pb-12">
      <Title text="PRODUTOS" />
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-wrap w-full items-center justify-center sm:gap-4 gap-2">
          {products.map((p, idx) => (
            <Product
              key={idx}
              src={import.meta.env.BASE_URL + p.src}
              description={p.description}
              name={p.name}
            />
          ))}
        </div>
        <RevealAnimation width="fit-content">
          <button
            onClick={handleOpenAgenda}
            className="bg-primary border-2 p-4 px-12 mt-12 
              flex items-center justify-center
              gap-2 outline-none border-none"
          >
            <p className="text-white text-xl font-bold uppercase tracking-wider font-inter">
              encomendar
            </p>
          </button>
        </RevealAnimation>
      </div>
    </div>
  );
};

export { SectionProducts };
