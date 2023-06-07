import { SectionHome } from "./SectionHome";
import { SectionServices } from "./SectionServices";
import { SectionPortfolio } from "./SectionPortfolio";
import { SectionProducts } from "./SectionProducts";
import { SectionLocation } from "./SectionLocation";
import { SectionRating } from "./SectionRating";

const Home: React.FC = () => {
  return (
    <div className="wrapper">
      <SectionHome />
      <SectionServices />
      <SectionPortfolio />
      <SectionRating />
      <SectionProducts />
      <SectionLocation />
    </div>
  );
};

export { Home };
