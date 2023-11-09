import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const springAnimation = {
  transition: {
    type: "spring",
    stiffness: 150,
    duration: 0.3,
  },
};

const Intro = () => {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center py-16 px-7 text-center grid-bg overflow-hidden">
        <div className="rounded-full bg-secondary py-1 px-4 text-sm md:text-base flex gap-1 items-center">
          Introducing Raft Cards
          <motion.span
            initial={{
              x: 0,
            }}
            animate={{
              x: 10,
            }}
            {...springAnimation}
          >
            <ChevronRight strokeWidth={1.25} />
          </motion.span>
        </div>
        <motion.div
          initial={{
            opacity: 0.5,
            scale: 0.8,
            y: -50,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          {...springAnimation}
          className="intro-text flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-7xl lg:text-8xl">
            Building the future of banking.
          </h2>
        </motion.div>
        <motion.p
          initial={{
            opacity: 0.5,
            scale: 0.8,
            y: -50,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          {...springAnimation}
          className="text-sm md:text-xl lg:text-2xl max-w-2xl font-light text-muted-foreground"
        >
          Experience the future of banking with RAFT. We're here to empower your
          financial journey.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0.5,
            scale: 0.8,
          }}
          animate={{
            opacity: [1, 1, 1],
            scale: [0.6, 1.5, 1],
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            duration: 0.3,
          }}
        >
          <Button>Get Started</Button>
        </motion.div>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center px-7 mb-16 text-center">
        <div className="rounded-md hero-bg w-full h-72 md:h-[30rem] lg:h-[40rem]"></div>
      </div>
    </>
  );
};

export default Intro;
