import Climber from "../../assets/Images/Climber.png";
import Rectangle from "../../assets/Images/Rectangle.png";

const TreeWalker = () => {
  return (
    <div className="lg:flex">
      <div className="bg-white lg:w-[50%] xs:w-full">
        <div className="sm:pt-4 lg:pt-0 lg:pl-0 lg:w-[30rem] lg:h-64 lg:relative lg:top-[6rem] lg:left-[8rem]">
          <img
            className="w-full lg:p-[0rem] xs:p-[2rem]"
            src={Rectangle}
            alt="Rectangle"
          />
        </div>
      </div>
      <div className=" relative">
        <img className="xs:w-full" src={Climber} alt="Climber" />
        <div className="absolute top-1/2 left-[30%] xs:left-[29%] transform -translate-x-[30%] -translate-y-1/2">
          <h1 className=" text-3xl sm:text-4xl md:text-[4.25rem] md:leading-[4.5rem] lg:text-5xl font-bold font-serif text-green-600">
            Hi, I’m <span className="text-[#268C76]">TreeWalker 👋 🌳</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-[2.5rem] md:leading-[2.7rem] lg:text-base text-gray-700 font-serif">
            "If you love what you do, you'll never work a day in your life."
            Whoever said that definitely never had a passion for tree service.
            It's hard work, but loving it does make it a lot easier.
          </p>
          <h6 className="mt-4 text-sm sm:text-lg md:text-[2rem] lg:text-base md:leading-[2.75rem] xs:mb-[2rem] lg:mb-[0rem] text-gray-500 font-serif">
            - Josh Rohmann
          </h6>
        </div>
      </div>
    </div>
  );
};

export default TreeWalker;
