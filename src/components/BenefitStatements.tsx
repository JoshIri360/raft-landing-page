import { ReactNode } from "react";

interface BenefitProps {
  benefitOrder: number;
  Benefits: {
    subBenefitIcon: ReactNode;
    BenefitMainTesxt: string;
    BenefitSubTesxt: string;
  }[];
  img: string;
}

const BenefitStatements = ({ benefitOrder, img, Benefits }: BenefitProps) => {
  return (
    <div className="universal-margin flex flex-col items-center">
      {img ? (
        <div className="mb-16">
          {" "}
          <img src={img} alt="BenefitImage" />{" "}
        </div>
      ) : (
        <div
          className={`rounded-md w-full h-72 md:h-[30rem] lg:h-[40rem] mb-10 benefit-${benefitOrder}`}
        ></div>
      )}
      <div className="flex flex-col lg:flex-row gap-5">
        {Benefits.map((benefit, i) => {
          return (
            <div className="mb-5" key={i}>
              <div className="flex items-center gap-1 font-semibold text-xl md:text-2xl mb-1">
                {benefit.subBenefitIcon} {benefit.BenefitMainTesxt}{" "}
              </div>
              <p className="text-muted-foreground">{benefit.BenefitSubTesxt}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BenefitStatements;
