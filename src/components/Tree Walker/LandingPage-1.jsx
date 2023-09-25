import BgField from "../../assets/Images/BgField.png";
import Field1 from "../../assets/Images/field1.png";
import Logo from "../../assets/Images/Logo.png";
import MobileLogo from "../../assets/Images/MobileLogo.png";
import GroupIcon from "../../assets/Images/GroupIcon.png";
import MessageText from "../../assets/Images/Messagetext.png";

const LandingPage1 = () => {
  return (
    <div className="">
      <div className="relative">
        <img className="xs:hidden" src={BgField} />
        <img className="w-[100%] sm:hidden lg:hidden" src={Field1} />
        <h1 className="xs:text-[50px] sm:text-[34px] sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 lg:top-[230px] lg:text-[52px] text-center top-[9rem] absolute text-white font-serif font-bold">
          Keeping you safe from
        </h1>
        <h1 className="xs:text-[50px] sm:top-[14rem] sm:text-[34px] lg:text-[44px] lg:top-[290px] text-center top-[23rem] absolute text-white left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif font-bold">
          unhealthy trees.
        </h1>
        <h5 className="sm:top-[17rem] lg:top-[360px] top-[30rem] absolute text-white left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif ">
          Professional your services.
        </h5>
        <button className="sm:top-[20rem] lg:top-[430px] top-[35rem] flex absolute text-white left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif bg-orange-500 rounded-md px-8 py-2">
          <img className="mr-[0.4rem]" src={MessageText} />
          Text Us
        </button>
        <h2 className="sm:bottom-[1rem] xs:bottom-[3rem] lg:bottom-[7rem] absolute text-3xl text-amber-400 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img
            className="sm:h-[40px] lg:h-[70px] xs:h-[60px]"
            src={GroupIcon}
          />
        </h2>
        <h3 className="xs:hidden absolute text-2xl text-blue-300 top-[0px] left-5 ">
          <img src={Logo} />
        </h3>
        <h3 className="top-[1.5rem] sm:hidden lg:hidden absolute text-2xl text-blue-300 left-5">
          <img src={MobileLogo} />
        </h3>
      </div>
    </div>
  );
};

export default LandingPage1;
