import PostCard1 from "../../assets/Images/PostCard1.png";
import PostCard2 from "../../assets/Images/PostCard2.png";
import Vector from "../../assets/Images/Vector.png";
import Ellipse from "../../assets/Images/Ellipse.png";
import Check from "../../assets/Images/check.png";

const LandingPage3 = () => {
  return (
    <div>
      <div className="lg:flex">
        <img className="hidden lg:block w-[43.22%]" src={PostCard1} />
        <div className="bg-[#242424] lg:w-[57%]">
          <div className="">
            <h1 className="pl-[2rem] pt-[3rem] text-[35px] lg:mt-[10rem] lg:ml-[14rem] lg:text-[30px] text-white font-bold font-serif">
              Storm happens all the time.
            </h1>
            <h6 className="pb-[8rem] ml-[2rem] mr-[4rem] text-[18px] lg:ml-[14rem] lg:mr-[6rem] lg:text-[16px] text-white font-serif mt-[2rem]">
              Even the best cared for trees can suffer horrible consequences at
              the hands of nature.
            </h6>
          </div>
        </div>
        <img className="w-[100%] lg:hidden lg:w-[43.22%]" src={PostCard1} />
      </div>
      <div className="lg:flex">
        <div
          className="bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${Vector})`,
            backgroundColor: "#268C76",
          }}
        >
          <h1 className="pt-[5rem] pl-[2rem] text-[36px] lg:text-[30px] lg:mt-[2rem] lg:pl-[9rem] lg:pr-[19rem] text-white font-bold font-serif pb-[1.5rem]">
            Healthy trees are safe trees
          </h1>
          <div className="lg:pl-[9rem] pl-[2rem]">
            <div className="flex mb-[1rem]">
              <img
                className="xs:relative xs:top-[0.7rem] h-[30px]"
                src={Ellipse}
              />
              <img
                className="h-[18px] relative xs:top-[17px] top-[7px] left-[-24px]"
                src={Check}
              />
              <h1 className="text-white font-serif xs:text-[20px]">
                Feel confident your property is safe from the next storm.
              </h1>
            </div>
            <div className="flex mb-[1rem]">
              <img
                className="xs:relative xs:top-[0.7rem] h-[30px]"
                src={Ellipse}
              />
              <img
                className="h-[18px] relative xs:top-[17px] top-[7px] left-[-24px]"
                src={Check}
              />
              <h1 className="text-white font-serif xs:text-[20px]">
                Trees are most beautiful when properly pruned and cared for
              </h1>
            </div>
            <div className="flex pb-[2rem] lg:mb-[2rem]">
              <img className="h-[30px]" src={Ellipse} />
              <img
                className="h-[18px] relative top-[7px] left-[-24px]"
                src={Check}
              />
              <h1 className="text-white font-serif xs:text-[20px]">
                Curb appeal impacts property value.
              </h1>
            </div>
          </div>
        </div>
        <img className="lg:w-[43.22%] w-[100%]" src={PostCard2} />
      </div>
    </div>
  );
};

export default LandingPage3;
