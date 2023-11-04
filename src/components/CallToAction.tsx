import React from "react";

interface CallToActionProps {
  main: string;
  sub: string;
  align: string;
  intro: string;
}

const CallToAction = ({ main, sub, align, intro }: CallToActionProps) => {
  return (
    <div className={`universal-margin text-${align} my-16 flex flex-col gap-4`}>
      {intro && <h2 className="text-green-500">{intro.toUpperCase()}</h2>}
      <div className={`flex flex-col items-${align} gap-6`}>
        <h3 className="text-3xl font-semibold md:text-7xl max-w-3xl">{main}</h3>
        <p
          className={`font-thin text-${align} text-muted-foreground max-w-2xl`}>
          {sub}
        </p>
      </div>
    </div>
  );
};

export default CallToAction;
