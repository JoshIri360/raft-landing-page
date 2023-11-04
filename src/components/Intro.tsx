import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Intro = () => {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center py-16 px-7 text-center grid-bg">
        <div className="rounded-full bg-secondary py-1 px-4 text-sm md:text-base flex gap-1 items-center">
          Introducing Raft Cards
          <ChevronRight strokeWidth={1.25} />
        </div>
        <div
        className="intro-text flex flex-col items-center">
          <h2 className="text-3xl md:text-7xl lg:text-8xl">
            Building the future of banking.
          </h2>
        </div>
        <p className="text-sm md:text-xl lg:text-2xl max-w-2xl font-light text-muted-foreground">
          Experience the future of banking with RAFT. We're here to empower your
          financial journey.
        </p>
        <Button>Get Started</Button>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center px-7 mb-16 text-center">
        <div className="rounded-md hero-bg w-full h-72 md:h-[30rem] lg:h-[40rem]"></div>
      </div>
    </>
  );
};

export default Intro;
