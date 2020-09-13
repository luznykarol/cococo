import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import ReactSVG from "react-svg";
import { useLocation } from "@reach/router";
import NavList from "./NavList";
import Burger from "./Burger";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [open, setOpen] = useState(false);
  const [navBar, setNavBar] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }

    const height = document.getElementById("header").clientHeight;
    setHeaderHeight(height);

    typeof window !== "undefined" &&
      window.addEventListener("scroll", changeBackground);

    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  const changeBackground = () => {
    typeof window !== "undefined" && window.scrollY > headerHeight
      ? setNavBar(true)
      : setNavBar(false);
  };

  return (
    <>
      <header className="header pt-3" id="header">
        <nav className="navigation">
          <div className="container-lg">
            <div className="navigation__inner flex items-center justify-end">
              <>
                <NavList main={true} open={open} setOpen={setOpen} />
                <Burger
                  main={true}
                  navBar={navBar}
                  setOpen={setOpen}
                  open={open}
                />
              </>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
