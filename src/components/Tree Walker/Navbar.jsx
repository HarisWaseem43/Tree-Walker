import { useState, useEffect } from "react";
import Logo from "../../assets/Images/MobileLogo.png";
import NavCall from "../../assets/Images/NavCall.png";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = `w-[100%] flex justify-between items-center p-4 bg-black fixed z-20 ${
    showNavbar ? "block" : "hidden"
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="items-center">
        <img src={Logo} className="h-[42px] mr-4 lg:ml-[2rem]" />
      </div>
      <button className="flex bg-orange-500 text-white px-4 py-2 lg:mr-[2rem] rounded-[10px]">
        <img
          className="mt-[0.1rem] mr-[0.3rem] h-[20px]"
          src={NavCall}
          alt="Call Icon"
        />{" "}
        (980) 777-5224
      </button>
    </nav>
  );
}

export default Navbar;
