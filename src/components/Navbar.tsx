import React from "react";
import { Menu } from "lucide-react";
import Logo from "../assets/logo.png";
import NavbarSide from "./NavbarSide";

interface NavbarSideProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ show, setShow }: NavbarSideProps) => {
  return (
    <>
      <div className="navbar md:text-lg flex justify-between universal-margin py-3 items-center border-b border-secondary relative">
        <div className="">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="hidden md:block absolute -translate-x-1/2 left-1/2">
          <ul className="child-hover:underline child:cursor-pointer flex gap-5">
            <li>Solutions</li>
            <li>Learn</li>
            <li>About</li>
          </ul>
        </div>
        <div className="hidden md:block">
          <ul className="child-hover:underline child:cursor-pointer flex gap-5 ">
            <li>Login</li>
            <li>Get Started</li>
          </ul>
        </div>
        <div className="md:hidden cursor-pointer">
          <Menu
            color="#ffffff"
            onClick={() => {
              // set overflow hidden on body
              const body = document.querySelector("body");
              if (body) {
                body.style.overflow = "hidden";
              }

              setShow(true);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
