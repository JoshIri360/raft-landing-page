
interface FeatureProps {
  featureMain: string;
  featureSub: string;
  featureImg: string;
  position: string;
}

const Feature = ({
  featureMain,
  featureSub,
  featureImg,
  position,
}: FeatureProps) => {
  return (
    <div className="bg-[#141414] flex flex-col  justify-between p-5 rounded-md border-b-[1.5px] feature-card after:rounded-md min-h-[22rem]">
      <div className="w-full md:h-full min-h-[10rem] flex items-center justify-center feature-grid-bg relative pb-5">
        <div
          className={`w-11/12 flex items-center justify-center top-[0.2rem] sm:top-auto -right-5 sm:right-auto ${position} sm:static`}>
          <img src={featureImg} className="" alt="feature" />
        </div>
      </div>
      <div className="flex flex-col gap-4 max-w-2xl">
        <h5 className="text-2xl font-semibold">{featureMain}</h5>
        <p className="text-muted-foreground">{featureSub}</p>
      </div>
    </div>
  );
};

export default Feature;
