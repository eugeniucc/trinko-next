import { Container } from "../../Container";
import { CustomLink } from "../../CustomLink";

export const FewWords = () => {
  return (
    <section className="sm:bg-[url('/images/home/sections/fewWords/home-01-1920x662.jpg')] bg-[url('/images/home/sections/fewWords/home-02.png')] bg-cover bg-no-repeat bg-center relative">
      <div className="absolute z-0 inset-0 bg-black opacity-30"></div>
      <Container>
        <div className="py-50 z-1">
          <div className="flex flex-col gap-6 sm:max-w-xl sm:ml-auto">
            <h2 className="text-5xl font-semibold text-white">
              A few words about our tattoo salon
            </h2>
            <p className="font-semibold text-xl text-white">
              We have been numerously recognized as #1 tattoo salon in Los
              Angeles. We aim to deliver the best tattooing services.
            </p>
            <p className="text-white">
              Our staff consistently upgrades their ability and knowledge
              through training and seminars to ensure your tattoo or piercing is
              performed using the latest industry standards.
            </p>
            <CustomLink href="/" text="Book Now" className="mr-auto" />
          </div>
        </div>
      </Container>
    </section>
  );
};
