import VectorTree from "../../assets/Images/VectorTree.png";
import MessageText from "../../assets/Images/MessageText.png";
import Call from "../../assets/Images/call.png";
import SMS from "../../assets/Images/sms.png";

const LandingPage8 = () => {
  return (
    <div className="relative m-[1rem] mt-[2rem] lg:flex lg:m-[4rem]">
      <div className="bg-[#268C76] lg:w-[100%] xs:w-[0%] rounded-l-[18px]">
        <h1 className="xs:absolute xs:top-[2rem] xs:z-[99] xs:text-[29px] xs:ml-[1.4rem] lg:relative lg:top-[5rem] lg:left-[7rem] lg:text-[36px] text-white font-serif font-bold">
          Looking forward to hearing from you
        </h1>{" "}
        <div className="flex xs:absolute xs:top-[8rem] xs:z-[99] xs:ml-[1.4rem] lg:relative lg:top-[8rem] lg:left-[7rem] xs:text-[16px] lg:text-[20px] text-white">
          <img className="xs:h-[25px] lg:h-[30px] mr-[1rem]" src={SMS} />
          <p>info@treewalkernc.com</p>
        </div>
        <div className="flex xs:absolute xs:top-[10rem] xs:z-[99] xs:ml-[1.4rem] lg:relative lg:top-[8rem] lg:left-[7rem] xs:text-[16px] lg:text-[20px] text-white xs:mt-[0.3rem] lg:mt-[1rem]">
          <img className="xs:h-[25px] lg:h-[30px] mr-[1rem]" src={Call} />
          <p>(980) 777-5224</p>
        </div>
        <button className="flex xs:absolute xs:top-[13rem] xs:z-[99] xs:ml-[1.4rem]  bg-[#FF740A] lg:relative lg:top-[10rem] lg:left-[7rem] xs:px-[2.5rem] lg:px-[1.5rem] py-[0.5rem] xs:text-[14px] lg:text-[19px] text-white rounded-[10px]">
          <img
            className="xs:h-[24px] lg:h-[30px] mr-[1rem]"
            src={MessageText}
          />
          Schedule your Free Evaluation Today
        </button>
      </div>
      <img
        className="xs:w-[100%] bg-[#268C76] lg:rounded-r-[18px] xs:rounded-[18px]"
        src={VectorTree}
      />
    </div>
  );
};

export default LandingPage8;
