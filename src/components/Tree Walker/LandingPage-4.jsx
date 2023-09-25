import Climber from "../../assets/Images/Climber.png";
import Rectangle from "../../assets/Images/Rectangle.png";

const LandingPage4 = () => {
  return (
    <div>
      <div className="lg:flex">
        <div className="bg-white lg:w-1/2">
          <div className="pt-[2rem] px-[1rem] sm:pt-[4rem] lg:pt-[0rem] lg:px-[0rem] lg:w-[460px] lg:h-[300px] lg:relative lg:top-[6rem] lg:left-[10rem]">
            <img className="w-[100%]" src={Rectangle} />
          </div>
        </div>
        <div>
          <img className="w-[100%] relative" src={Climber} />
        </div>
      </div>
      <div className="relative">
        <h1 className="absolute xs:top-[-20rem] xs:left-[1rem] xs:text-[28px] sm:top-[-37rem] sm:ml-[1rem] lg:top-[-25rem] lg:left-[43rem] text-[36px] font-bold font-serif">
          Hi, I’m <span className="text-[#268C76]">TreeWalker 👋 🌳</span>
        </h1>
        <p className="absolute xs:top-[-16rem] xs:left-[1rem] xs:mr-[1rem] sm:top-[-31rem] sm:ml-[1rem] sm:text-[30px] lg:text-[18px] lg:top-[-20rem] lg:left-[43rem] font-serif mr-[7rem]">
          "If you love what you do, you'll never work a day in your life."
          Whoever said that definitely never had a passion for tree service. Its
          hard work, but loving it does make it a lot easier.
        </p>
        <h6 className="absolute xs:top-[-8rem] xs:left-[1rem] sm:top-[-15rem] sm:ml-[1rem] sm:text-[30px] lg:text-[17px] lg:top-[-14rem] lg:left-[43rem] font-serif mr-[10rem] text-[#64748b]">
          - Josh Rohmann
        </h6>
      </div>
    </div>
  );
};

export default LandingPage4;
