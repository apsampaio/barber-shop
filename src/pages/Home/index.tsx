import { SectionHome } from "./SectionHome";
import { SectionServices } from "./SectionServices";
import { SectionPortfolio } from "./SectionPortfolio";
import { SectionProducts } from "./SectionProducts";
import { SectionLocation } from "./SectionLocation";

const Home: React.FC = () => {
  return (
    <div className="wrapper">
      <SectionHome />
      <SectionServices />
      <SectionPortfolio />
      <SectionProducts />
      <SectionLocation />
    </div>
  );
};

export { Home };
