import "./styles.css";

type Props = {
  title: string;
  icon: string;
};

const ServiceCard: React.FC<Props> = ({ icon, title }) => {
  return (
    <div className="service-card">
      <img src={icon} alt="corte" />
      <p>{title}</p>
    </div>
  );
};

export { ServiceCard };
