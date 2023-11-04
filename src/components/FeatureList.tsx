import feature1 from "../assets/features/feature1.svg";
import feature2 from "../assets/features/feature2.svg";
import feature3 from "../assets/features/feature3.svg";
import feature4 from "../assets/features/feature4.svg";
import Feature from "./Feature";
import { motion } from "framer-motion";

const features = [
  {
    image: feature1,
    main: "Seamless Payments",
    sub: "Enjoy secure, seamless transactions that make managing your money a breeze.",
    left: "static",
    space: 2,
  },
  {
    image: feature2,
    main: "Smart Investing",
    sub: "Grow your wealth confidently with our personalized investment solutions, tailored to your financial goals.",
    left: "static",
    space: 1,
  },
  {
    image: feature3,
    main: "Wealth Management",
    sub: "Make informed decisions for your financial future with our wealth management expertise.",
    left: "static",
    space: 1,
  },
  {
    image: feature4,
    main: "Financial Planning",
    sub: "Achieve your financial dreams with our comprehensive financial planning services, guiding you toward a secure future.",
    left: "static",
    space: 2,
  },
];

const FeatureList = () => {
  return (
    <div className="universal-margin grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-x-hidden">
      {features.map((feature, i) => {
        let x = 0;
        if (i % 2 == 0) {
          x = -100;
        } else {
          x = 100;
        }
        return (
          <motion.div
            initial={{ opacity: 0, x: x, z: 10 }}
            whileInView={{ opacity: 1, x: 0, z: 0 }}
            transition={{ type: "spring", duration: i+1 }}
            className={`col-span-2 md:col-span-${feature.space} child:md:h-full`}>
            <Feature
              key={i}
              featureImg={feature.image}
              featureMain={feature.main}
              featureSub={feature.sub}
              position={feature.left}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FeatureList;
