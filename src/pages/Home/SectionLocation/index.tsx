import { Title } from "../../../components/Title";
import { RevealAnimation } from "../../../components/RevealAnimation";

const SectionLocation: React.FC = () => {
  const handleOpenFacebook = () => {
    window.open("https://www.facebook.com/BOYBARBERSHOP2017", "_blank");
  };

  const handleOpenWhatsapp = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=5515988209226&text=Ol%C3%A1,%20%20gostaria%20de%20encomendar%20um%20produto%20da%20barbearia!",
      "_blank"
    );
  };

  const handleOpenInstagram = () => {
    window.open("https://www.instagram.com/boybarbershop_/", "_blank");
  };

  return (
    <div className="flex flex-col">
      <Title text="CONTATO" />
      <div className="flex flex-col w-full -mt-4">
        <RevealAnimation width="100%">
          <div className="flex w-full items-center justify-center pb-8">
            <img
              src={`${import.meta.env.BASE_URL}icons/instagram.svg`}
              alt="corte-icon"
              className="w-7 h-7 mx-4 hover:cursor-pointer"
              onClick={handleOpenInstagram}
            />
            <img
              src={`${import.meta.env.BASE_URL}icons/whatsapp.svg`}
              alt="corte-icon"
              className="w-7 h-7 mx-4 hover:cursor-pointer"
              onClick={handleOpenWhatsapp}
            />
            <img
              src={`${import.meta.env.BASE_URL}icons/facebook.svg`}
              alt="corte-icon"
              className="w-7 h-7 mx-4 hover:cursor-pointer"
              onClick={handleOpenFacebook}
            />
          </div>
        </RevealAnimation>
        <div className="flex w-full flex-col gap-6 xl:gap-6 pl-2 pb-8">
          <div className="flex w-full border-l-2 items-center border-primary h-8">
            <img
              src={`${import.meta.env.BASE_URL}icons/location.svg`}
              alt="corte-icon"
              className="w-5 h-7 mx-2 hover:cursor-pointer"
            />
            <p className="w-full text-white font-poppins text-base antialiased">
              Av. Dr. Thomas Cortêz, 91 - Jardim Juliana, Sorocaba - SP,
              18080-300
            </p>
          </div>
          <div className="flex w-full items-center border-l-2 border-primary h-12">
            <img
              src={`${import.meta.env.BASE_URL}icons/clock.svg`}
              alt="horario-icon"
              className="w-5 h-5 mx-2 hover:cursor-pointer"
            />
            <div className="flex flex-col justify-evenly h-full">
              <p className="w-full text-white font-poppins text-base antialiased">
                Ter. à Sex. 10:00h às 21:00h
              </p>
              <p className="w-full text-white font-poppins text-base antialiased">
                Sab. 09:00h às 19:00h
              </p>
            </div>
          </div>
          <div className="flex w-full items-center border-l-2 border-primary h-8">
            <img
              src={`${import.meta.env.BASE_URL}icons/phone.svg`}
              alt="telefone-icon"
              className="w-5 h-5 mx-2 hover:cursor-pointer"
            />

            <p className="w-full text-primary font-oswald text-3xl font-medium antialiased">
              <strong className="text-white font-medium font-oswald">
                15{" "}
              </strong>
              98820-9226
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <iframe
            className="border-none w-full h-64"
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.3207551625337!2d-47.465302023819355!3d-23.484953558791176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5f5f5dd7abbd9%3A0xaca548d4a3e43719!2sBoy%20Barber%20Shop!5e0!3m2!1spt-BR!2sbr!4v1694030207867!5m2!1spt-BR!2sbr"
            allowFullScreen={false}
            referrerPolicy="no-referrer-when-downgrade"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="w-full bg-primary h-4"></div>
    </div>
  );
};

export { SectionLocation };
