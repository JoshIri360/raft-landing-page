import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import NavbarSide from "./components/NavbarSide";
import FeaturedIn from "./components/FeaturedIn";
import CallToAction from "./components/CallToAction";
import FeatureList from "./components/FeatureList";
import BenefitStatements from "./components/BenefitStatements";
import moneyIcon from "./assets/moneyIcon.png";
import walletIcon from "./assets/walletIcon.png";
import card from "./assets/card.png";
import {
  ArrowLeftRight,
  Coins,
  CreditCard,
  Lock,
  Scroll,
  UserCircle,
} from "lucide-react";
import Improvements from "./components/Improvements";
import Ratings from "./components/Ratings";
import Reviews from "./components/Reviews";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";

function App() {
  const [show, setShow] = React.useState<boolean>(false);

  const Benefits = [
    {
      subBenefitIcon: <CreditCard />,
      BenefitMainTesxt: "No minimum balance fees",
      BenefitSubTesxt:
        "Say goodbye to minimum balance fees. Your account, your balance—no hidden charges",
    },
    {
      subBenefitIcon: <Coins />,
      BenefitMainTesxt: "No monthly fees",
      BenefitSubTesxt:
        "Bank with us without worrying about monthly fees. Keep more of your money where it belongs—in your account",
    },
    {
      subBenefitIcon: <ArrowLeftRight />,
      BenefitMainTesxt: "No bank transfer fees",
      BenefitSubTesxt:
        "Seamlessly transfer funds without the extra cost. Send and receive money with zero bank transfer fees.",
    },
  ];

  const Benefits2 = [
    {
      subBenefitIcon: <Scroll />,
      BenefitMainTesxt: "Contactless Technology",
      BenefitSubTesxt:
        "Our new cards come equipped with contactless technology, allowing you to make swift, secure payments with a simple tap.",
    },
    {
      subBenefitIcon: <UserCircle />,
      BenefitMainTesxt: "Personalization",
      BenefitSubTesxt:
        "Customize your card to reflect your unique style. Choose from a range of designs that suit your personality.",
    },
    {
      subBenefitIcon: <Lock />,
      BenefitMainTesxt: "Enhanced Security",
      BenefitSubTesxt:
        "Your peace of mind is our priority. Our cards feature advanced security measures to protect your transactions and data.",
    },
  ];

  const improvements = [
    {
      main: "Spend better",
      sub: "Set and achieve financial goals with ease, automate your savings, and watch your money grow without the stress.",
      image: moneyIcon,
    },
    {
      main: "Invest better",
      sub: "Set and achieve financial goals with ease, automate your savings, and watch your money grow without the stress.",
      image: walletIcon,
    },
  ];

  return (
    <>
      <NavbarSide show={show} setShow={setShow} />
      <Navbar show={show} setShow={setShow} />
      <Intro />
      <FeaturedIn />
      <CallToAction
        intro=""
        main="Elevate Your Financial Journey with RAFT"
        sub="RAFT offers a world of financial possibilities. From investments to payments, we've got you covered. Join us and unlock your financial potential today."
        align="center"
      />
      <FeatureList />
      <CallToAction
        intro=""
        main="Your Financial Freedom, Your Way"
        sub="We believe that managing your finances should be effortless and cost-effective. That's why we offer you the freedom you deserve"
        align="center"
      />
      <BenefitStatements benefitOrder={1} img="" Benefits={Benefits} />
      <div className="bg-green-500 text-5xl md:text-8xl sm:text-6xl leading-[1.2] sm:leading-[1.3] md:leading-[1.4] mx-auto text-background my-5 py-5">
        <p className="universal-margin">
          Smart investments, secure payments, and expert guidance, all in one
          place.
        </p>
      </div>
      <CallToAction
        intro=""
        main="Confidently Shape Your Financial Future"
        sub=" At RAFT, we empower you to confidently shape your financial future.Our modern approach simplifies saving and investing, making it easier than ever."
        align="left"
      />
      <div className="flex md:flex-row flex-col universal-margin gap-0 md:gap-4">
        <Improvements improvements={improvements[0]} />
        <Improvements improvements={improvements[1]} />
      </div>
      <Ratings />
      <div className="selfie w-full h-[31rem] sm:h-[40rem] my-14 bg-cover"></div>
      <CallToAction
        intro="INTRODUCTION"
        main="Your Financial Freedom, Your Way"
        sub="We believe that managing your finances should be effortless and cost-effective. That's why we offer you the freedom you deserve"
        align="center"
      />
      <BenefitStatements benefitOrder={2} img={card} Benefits={Benefits2} />{" "}
      <Reviews />
      <FAQs />
      <Footer />
    </>
  );
}

export default App;
