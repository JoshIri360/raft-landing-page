import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

type isVisibleType = {
  isVisible: boolean;
};

const Ratings = () => {
  const ratings = [
    { amount: "50", after: "+", label: "CITIES" },
    { amount: "50000", after: "+", label: "TRANSACTIONS" },
    { amount: "3", after: "M+", label: "USERS" },
    { amount: "5", after: "", label: "USER RATINGS" },
  ];

  return (
    <div className="universal-margin flex justify-between pt-6">
      {ratings.map((rating, i) => {
        return (
          <div className="flex flex-col gap-3 items-center" key={i}>
            <h1 className="text-xl font-semibold md:text-5xl">
              <VisibilitySensor>
                {({ isVisible }: isVisibleType) => (
                  <CountUp
                    end={isVisible ? parseInt(rating.amount) : 0}
                    separator=","
                    duration={2}
                  />
                )}
              </VisibilitySensor>
              {rating.after}
            </h1>
            <p className="text-xs text-muted-foreground md:text-lg">
              {rating.label}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Ratings;
