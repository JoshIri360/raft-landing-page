import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import React from "react";

interface NavbarSideProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarSide = ({ show, setShow }: NavbarSideProps) => {
  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{
              x: -1000,
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: -1000,
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              duration: 0.5,
            }}
            key={"navbar-side"}
            className="z-10 bg-black w-full h-screen flex items-center justify-start fixed top-0 left-0"
            id="navbar-start"
          >
            <div className="flex flex-col gap-16 text-lg child:flex child:flex-col child:gap-4 relative h-full w-full justify-center child:child:cursor-pointer child:child:w-min child:whitespace-nowrap px-10">
              <div
                className="absolute top-4 right-4"
                onClick={() => {
                  setShow(false);
                  const body = document.querySelector("body");
                  if (body) {
                    body.style.overflow = "visible";
                  }
                }}
              >
                <X color="#ffffff" />
              </div>
              <ul className="font-light child-hover:underline">
                <li>Solutions</li>
                <li>Learn</li>
                <li>About</li>
              </ul>
              <ul className="font-semibold">
                <li>Login</li>
                <li className="bg-secondary p-2 px-4 rounded-full">
                  Get Started
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarSide;
