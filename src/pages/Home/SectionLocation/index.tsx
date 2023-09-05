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
        <div className="flex w-full flex-col gap-4 pl-2 pb-8">
          {/* <div className="flex w-full items-center border-l-2 border-primary h-8">
            <img
              src={`${import.meta.env.BASE_URL}icons/mail.svg"}
              alt="corte-icon"
              className="w-5 h-5 mx-2 hover:cursor-pointer"
            />
            <p className="w-full text-white font-inter text-sm antialiased">
              boybaybershop@gmail.com
            </p>
          </div> */}
          <div className="flex w-full border-l-2 items-center border-primary h-8">
            <img
              src={`${import.meta.env.BASE_URL}icons/location.svg`}
              alt="corte-icon"
              className="w-5 h-7 mx-2 hover:cursor-pointer"
            />
            <p className="w-full text-white font-inter text-sm antialiased">
              Av. Dr. Thomas Cortêz, 91 - Jardim Juliana, Sorocaba - SP,
              18080-300
            </p>
          </div>
          <div className="flex w-full items-center border-l-2 border-primary h-8">
            <img
              src={`${import.meta.env.BASE_URL}icons/phone.svg`}
              alt="corte-icon"
              className="w-5 h-5 mx-2 hover:cursor-pointer"
            />
            <p className="w-full text-white font-inter text-sm antialiased">
              +55 15 98820-9226
            </p>
          </div>
          <div className="flex w-full items-center border-l-2 border-primary h-12">
            <img
              src={`${import.meta.env.BASE_URL}icons/clock.svg`}
              alt="horario-icon"
              className="w-5 h-5 mx-2 hover:cursor-pointer"
            />
            <div className="flex flex-col justify-evenly h-full">
              <p className="w-full text-white font-inter text-sm antialiased">
                Ter. à Sex. 10:00h às 21:00h
              </p>
              <p className="w-full text-white font-inter text-sm antialiased">
                Sab. 09:00h às 19:00h
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <iframe
            className="border-none w-full h-64"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Av.%20Dr.%20Thomas%20Cort%C3%AAz,%2091%20-%20Jardim%20Juliana,%20Sorocaba%20-%20SP,%2018080-300&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          ></iframe>
        </div>
      </div>
      <div className="w-full bg-primary h-4"></div>
    </div>
  );
};

export { SectionLocation };
