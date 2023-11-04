import Feature1 from "../assets/featured-icons/1-feature.png";
import Feature2 from "../assets/featured-icons/2-feature.png";
import Feature3 from "../assets/featured-icons/3-feature.png";
import Feature4 from "../assets/featured-icons/4-feature.png";
import Feature5 from "../assets/featured-icons/5-feature.png";

const FeaturedIn = () => {
  const featuredIcons = [Feature1, Feature2, Feature3, Feature4, Feature5];
  return (
    <div className="flex flex-col items-center">
      <h6 className="text-center text-sm text-muted-foreground uppercase mb-7">
        Featured and seen In
      </h6>
      <div className="carousel carousel-center gap-14 child:h-10">
        {featuredIcons.map((icon, i) => {
          return (
            <div className="carousel-item" key={i}>
              <img src={icon} alt={`feature-${i}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedIn;
