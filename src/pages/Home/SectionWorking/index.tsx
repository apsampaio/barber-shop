import { Title } from "../../../components/Title";
import { RevealFromRight } from "../../../components/RevealFromRight";

const SectionWorking: React.FC = () => {
  return (
    <div className="bg-background flex flex-col items-center pb-12">
      <Title text="HORÁRIOS" />
      <div className="flex flex-col gap-2 w-full px-4">
        <RevealFromRight width="100%">
          <div className="bg-foreground w-full flex p-6 flex-col">
            <div className="flex w-full justify-between p-2 border-b border-b-white/50">
              <h1 className="text-white font-inter font-medium antialiased">
                Ter. à Sex.
              </h1>
              <h1 className="text-white font-inter font-medium antialiased">
                10:00h às 21:00h
              </h1>
            </div>
            <div className="flex w-full justify-between p-2 border-b border-b-white/50">
              <h1 className="text-white font-inter font-medium antialiased">
                Sab.
              </h1>
              <h1 className="text-white font-inter font-medium antialiased">
                09:00h às 19:00h
              </h1>
            </div>
          </div>
        </RevealFromRight>
      </div>
    </div>
  );
};

export { SectionWorking };
