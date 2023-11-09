import { ArrowLeft, ArrowRight } from "lucide-react";
import reviewer1 from "../assets/reviewers/reviewer1.jpg";
import reviewer2 from "../assets/reviewers/reviewer2.jpg";
import reviewer3 from "../assets/reviewers/reviewer3.jpg";
import reviewer4 from "../assets/reviewers/reviewer4.jpg";
import reviewer5 from "../assets/reviewers/reviewer5.jpg";
import { Button } from "./ui/button";

import Carousel from "@itseasy21/react-elastic-carousel";

const Reviews = () => {
  const reviews = [
    {
      reviewer: reviewer1,
      name: "Robert Fox",
      review:
        "RAFT has transformed my approach to finance. Their smart investing options have helped me grow my wealth, and their user-friendly platform makes managing my money a breeze. I've never felt more confident about my financial future.",
    },
    {
      reviewer: reviewer2,
      name: "Cameron Williamson",
      review:
        "I can't express how grateful I am to RAFT. Their wealth management services have been a game-changer for my family's financial security. The expert guidance and personalized strategies have given us peace of mind, knowing that our future is in capable hands.",
    },
    {
      reviewer: reviewer3,
      name: "Esther Howard",
      review:
        "RAFT's financial planning services have been a lifeline for me. I always struggled with managing my money, but their team crafted a tailored plan that addressed my goals and concerns. It's been a game-changer in achieving my financial dreams",
    },
    {
      reviewer: reviewer4,
      name: "Michael Stevens",
      review:
        "I've been a RAFT customer for years, and their financial services have consistently exceeded my expectations. Their smart investing options have significantly grown my wealth, and their user-friendly platform simplifies money management. With RAFT, I'm confident about securing my financial future.",
    },
    {
      reviewer: reviewer5,
      name: "Sophia Miller",
      review:
        "I can't express how RAFT has transformed my financial outlook. Their wealth management services have been a true game-changer for my family's financial stability. The expert guidance and personalized strategies have given us the assurance we need, knowing that our financial future is in capable hands. RAFT has been a blessing.",
    },
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
  ];

  return (
    <div className="text-center bg-green-500 text-background">
      <div className="green-margin py-8 pb-16">
        <div>
          <h1 className="text-4xl py-6">Join over 3 million members</h1>
        </div>
        <Carousel
          isRTL={false}
          itemPadding={[10]}
          breakPoints={breakPoints}
          pagination={false}
          renderArrow={({ type, onClick, isEdge }) => {
            const pointer =
              type === "PREV" ? (
                <Button
                  className="rounded-full h-10 w-10 border border-background p-1"
                  disabled={isEdge}
                >
                  <ArrowLeft />
                </Button>
              ) : (
                <Button
                  className="rounded-full h-10 w-10 border border-background p-1"
                  disabled={isEdge}
                >
                  <ArrowRight />
                </Button>
              );
            return (
              <button onClick={onClick} disabled={isEdge} className="rec-arrow">
                {pointer}
              </button>
            );
          }}
        >
          {reviews.map((rev, i) => {
            return (
              <div
                id={`slide${(i + 1) % 6}`}
                className="relative w-full h-full"
              >
                <div className="w-full text-left h-full flex flex-col content-between justify-between">
                  {rev.review}
                  <div className="flex justify-between items-center">
                    <div>
                      <h5 className="text-2xl font-semibold">{rev.name}</h5>
                      <p className="text-sm">Happy RAFT User</p>
                    </div>
                    <img
                      className="w-10 rounded-full h-10"
                      src={rev.reviewer}
                      alt="Reviewer"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
