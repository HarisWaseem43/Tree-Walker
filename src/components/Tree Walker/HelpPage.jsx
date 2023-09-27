import HelpImage from "../../assets/Images/HelpIMage.png";
import EllipseCircle from "../../assets/Images/EllipseCircle.png";
import No1 from "../../assets/Images/1.png";
import No2 from "../../assets/Images/2.png";
import No3 from "../../assets/Images/3.png";
import MessageText from "../../assets/Images/Messagetext.png";

const HelpPage = () => {
  return (
    <div>
      <div className="lg:flex">
        <div className="lg:w-1/2 lg:pl-[8rem] lg:pb-[4rem] md:pl-[6rem] pt-[5rem] ">
          <h1 className="font-bold font-serif text-[40px] xs:pl-[1rem]">
            How can we help?
          </h1>
          <p className="text-[17px] mr-[3rem] mt-[1.5rem] mb-[2.5rem] xs:pl-[1rem]">
            Unhealthy trees will only get worse over time. Let’s talk about your
            trees. We can take a look and bring peace of mind by offering our
            recommendations.
          </p>
          <img className="xs:hidden lg:block " src={HelpImage} />
        </div>
        <div className="lg:w-1/2">
          {/* Text 1 */}
          <div className="flex mb-[1rem] lg:mt-[5rem] xs:ml-[1rem] md:ml-[6rem] lg:ml-[4rem]">
            <img className="h-[40px] mt-[5px] mr-[1rem]" src={EllipseCircle} />
            <img
              className="h-[10px] relative top-[19px] left-[-38px]"
              src={No1}
            />
            <h1 className="font-serif font-bold text-[28px]">
              Tell us about your trees.
            </h1>
          </div>
          <p className="text-[18px] xs:ml-[5rem] md:ml-[10rem] lg:ml-[8rem] xs:mr-[3rem]">
            Reach out and let us know about your trees. Feel <br /> free to send
            pictures.
          </p>
          {/* Text 2 */}
          <div className="flex mb-[1rem] mt-[2rem] xs:ml-[1rem] md:ml-[6rem] lg:ml-[4rem]">
            <img className="h-[40px] mt-[5px] mr-[1rem]" src={EllipseCircle} />
            <img
              className="h-[10px] relative top-[19px] left-[-38px]"
              src={No2}
            />
            <h1 className="font-serif font-bold text-[28px]">
              Schedule your free evaluation.{" "}
            </h1>
          </div>
          <p className="text-[18px] xs:ml-[5rem] md:ml-[10rem] lg:ml-[8rem] xs:mr-[3rem]">
            We’ll come on-site to perform a tree health and <br />
            safety evaluation no cost to you.
          </p>
          {/* Text 3 */}
          <div className="flex mb-[1rem] mt-[2rem] xs:ml-[1rem] md:ml-[6rem] lg:ml-[4rem]">
            <img className="h-[40px] mt-[5px] mr-[1rem]" src={EllipseCircle} />
            <img
              className="h-[10px] relative top-[19px] left-[-38px]"
              src={No3}
            />
            <h1 className="font-serif font-bold text-[28px]">
              We’ll recommend a plan.
            </h1>
          </div>
          <p className="text-[18px] xs:ml-[5rem] md:ml-[10rem] lg:ml-[8rem] xs:mr-[3rem]">
            You’ll know exactly what is needed to keep your <br /> trees health
            and your property safe from damage.
          </p>
          <button className="flex bg-[#FF740A] text-[white] text-[18px] xs:mx-auto sm:mx-auto md:mx-auto xs:px-[2rem] lg:px-12 lg:ml-[8rem] mt-[4rem] mb-[2rem] py-2 rounded-md md">
            <img className="mr-[0.6rem]" src={MessageText} />
            Schedule your Free Evaluation Today
          </button>
          <img
            className="lg:hidden xs:px-4 xs:pt-[1rem] xs:pb-[4rem] md:mx-auto"
            src={HelpImage}
          />
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
