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
      <div className="flex flex-col w-full pb-8 px-2 -mt-4">
        <RevealAnimation width="100%">
          <div className="flex w-full items-center justify-center pb-8">
            <img
              src={"/barber-shop/icons/instagram.svg"}
              alt="corte-icon"
              className="w-7 h-7 mx-4 hover:cursor-pointer"
              onClick={handleOpenInstagram}
            />
            <img
              src={"/barber-shop/icons/whatsapp.svg"}
              alt="corte-icon"
              className="w-7 h-7 mx-4 hover:cursor-pointer"
              onClick={handleOpenWhatsapp}
            />
            <img
              src={"/barber-shop/icons/facebook.svg"}
              alt="corte-icon"
              className="w-7 h-7 mx-4 hover:cursor-pointer"
              onClick={handleOpenFacebook}
            />
          </div>
        </RevealAnimation>
        <div className="flex w-full flex-col gap-4 pb-8">
          <div className="flex w-full items-center">
            <img
              src={"/barber-shop/icons/phone.svg"}
              alt="corte-icon"
              className="w-5 h-5 mx-2 hover:cursor-pointer"
            />
            <p className="w-full text-white font-inter text-sm antialiased">
              +55 15 98820-9226
            </p>
          </div>
          <div className="flex w-full items-center">
            <img
              src={"/barber-shop/icons/mail.svg"}
              alt="corte-icon"
              className="w-5 h-5 mx-2 hover:cursor-pointer"
            />
            <p className="w-full text-white font-inter text-sm antialiased">
              boybaybershop@gmail.com
            </p>
          </div>
          <div className="flex w-full">
            <img
              src={"/barber-shop/icons/location.svg"}
              alt="corte-icon"
              className="w-5 h-7 mx-2 hover:cursor-pointer"
            />
            <p className="w-full text-white font-inter text-sm antialiased">
              Av. Dr. Thomas Cortêz, 91 - Jardim Juliana, Sorocaba - SP,
              18080-300
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center p-2 border-primary border">
          <iframe
            className="border-none w-full h-52"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Avenida Thomaz Cortez, 120&t=&z=15&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
      </div>
      <div className="w-full bg-primary h-4"></div>
    </div>
  );
};

export { SectionLocation };
