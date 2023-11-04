import React from "react";

interface ImprovementsProps {
  improvements: {
    main: string;
    sub: string;
    image: string;
  };
}

const Improvements = ({ improvements }: ImprovementsProps) => {
  return (
    <div className="mb-4">
      <div className="bg-[#141414] flex flex-col gap-4 items-center justify-between p-5 px-7 rounded-md border-b-[1.5px] feature-card after:rounded-md min-h-[22rem]">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold">{improvements.main}</h3>
          <p className="text-muted-foreground md:text-xl">{improvements.sub}</p>
        </div>
        <div>
          <img className="md:h-72" src={improvements.image} alt={improvements.main} />
        </div>
      </div>
    </div>
  );
};

export default Improvements;
