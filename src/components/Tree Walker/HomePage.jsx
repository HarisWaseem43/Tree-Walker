import BgField from "../../assets/Images/BgField.png";
import Field1 from "../../assets/Images/field1.png";
import Logo from "../../assets/Images/Logo.png";
import MobileLogo from "../../assets/Images/MobileLogo.png";
import GroupIcon from "../../assets/Images/GroupIcon.png";
import MessageText from "../../assets/Images/Messagetext.png";

const HomePage = () => {
  return (
    <div className="">
      <div className="relative">
        <img className="lg:block md:block sm:block xs:hidden" src={BgField} />
        <img className="w-[100%] sm:hidden lg:hidden" src={Field1} />
        <h1 className="xs:text-[48px] sm:text-[30px] md:text-[40px] lg:text-[52px] text-center text-white font-serif font-bold absolute sm:left-1/2 sm:-translate-x-1/2 -translate-y-1/2 lg:top-[230px] md:top-[10rem] sm:top-[8rem] xs:top-[14rem] xs:mx-[1rem] sm:mx-[0rem]">
          Keeping you safe from unhealthy trees.
        </h1>
        <h1 className="text-white font-serif font-bold sm:text-[12px] md:text-[14px] lg:text-lg text-center left-1/2 -translate-x-1/2 -translate-y-1/2 lg:top-[23rem] md:top-[16rem] sm:top-[13rem] xs:top-[25rem] absolute ">
          Professional your services.
        </h1>
        <button className="flex md:text-[15px] sm:text-[14px] lg:text-lg text-center text-white font-serif font-bold left-1/2 -translate-x-1/2 -translate-y-1/2 lg:top-[28rem] md:top-[20rem] sm:top-[16rem] xs:top-[29rem] absolute bg-orange-500 rounded-md md:px-8 md:py-2 xs:px-6 xs:py-1">
          <img className="mr-[0.4rem]" src={MessageText} />
          Text Us
        </button>
        <h2 className="lg:text-lg text-center left-1/2 -translate-x-1/2 -translate-y-1/2 lg:top-[41rem] md:top-[29rem] sm:top-[24rem] xs:top-[42rem] absolute text-white font-serif font-bold">
          <img
            className="lg:h-[60px] sm:h-[50px] xs:h-[60px]"
            src={GroupIcon}
          />
        </h2>
        <h3 className="lg:block md:block sm:block xs:hidden absolute text-2xl text-blue-300 top-[0px] left-5 ">
          <img src={Logo} />
        </h3>
        <h3 className="lg:hidden sm:hidden absolute top-[1.5rem] left-5 text-2xl text-blue-300 ">
          <img src={MobileLogo} />
        </h3>
      </div>
    </div>
  );
};

export default HomePage;
