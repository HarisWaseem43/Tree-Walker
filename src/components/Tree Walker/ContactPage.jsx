import VectorTree from "../../assets/Images/VectorTree.png";
import MessageText from "../../assets/Images/MessageText.png";
import Call from "../../assets/Images/call.png";
import SMS from "../../assets/Images/sms.png";

const ContactPage = () => {
  return (
    <div className="relative m-4 mt-8 lg:flex lg:m-8">
      <div className="bg-[#268C76] lg:w-full xs:w-0 rounded-l-[18px]">
        <h1 className="absolute xs:text-[28px] sm:text-[38px] md:text-[56px] lg:text-[38px] xs:top-[2rem] sm:top-[5rem] md:top-[5rem] lg:top-[5.8rem] lg:left-[6rem] md:left-[6rem] sm:left-[2rem] xs:left-[2rem] xs:z-99 text-white font-serif font-bold">
          Looking forward to hearing from you
        </h1>
        <div className="absolute flex xs:text-[18px] sm:text-[24px] md:text-[30px] lg:text-[22px] xs:top-[8rem] sm:top-[14rem] md:top-[18rem] lg:top-[12rem] lg:left-[6rem] md:left-[6rem] sm:left-[2rem] xs:left-[2rem] xs:z-99 text-white">
          <img
            className="xs:h-[25px] sm:h-[34px] md:h-[40px] lg:h-[30px] mr-2"
            src={SMS}
            alt="SMS"
          />
          <p>info@treewalkernc.com</p>
        </div>
        <div className="absolute flex xs:text-[18px] sm:text-[24px] md:text-[30px] lg:text-[22px] xs:top-[10rem] sm:top-[17rem] md:top-[22rem] lg:top-[14rem] lg:left-[6rem] md:left-[6rem] sm:left-[2rem] xs:left-[2rem] xs:z-99 text-white xs:mt-1 lg:mt-4">
          <img
            className="xs:h-[25px] lg:h-[30px] md:h-[40px] sm:h-[34px] mr-2"
            src={Call}
            alt="Call"
          />
          <p>(980) 777-5224</p>
        </div>
        <button className="absolute flex bg-[#FF740A] xs:text-[12px] sm:text-[20px] md:text-[24px] lg:text-[19px] xs:top-[13rem] sm:top-[23rem] md:top-[28rem] lg:top-[20rem] lg:left-[6rem] md:left-[6rem] sm:left-[2rem] xs:left-[2rem] xs:px-8 lg:px-6 py-2 xs:mb-[22rem] md:mb-[16rem] lg:mb-[16rem] text-white rounded-[10px] ">
          <img
            className="xs:h-[20px] sm:h-[34px] md:h-[40px] lg:h-[30px] mr-2"
            src={MessageText}
            alt="MessageText"
          />
          Schedule your Free Evaluation Today
        </button>
      </div>
      <img
        className="xs:w-full xs:rounded-[18px] bg-[#268C76] lg:rounded-r-[18px] lg:rounded-none"
        src={VectorTree}
        alt="VectorTree"
      />
    </div>
  );
};

export default ContactPage;
