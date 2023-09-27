import OfferImg from "../../assets/Images/OfferImg.png";
// import Tick from "../../assets/Images/Tick.png";
// import Circle from "../../assets/Images/Circle.png";
import Page6 from "./Page6";

const OfferPage = () => {
  return (
    <div>
      <div
        className="bg-no-repeat bg-cover w-full mt-[2rem]"
        style={{
          backgroundImage: `url(${OfferImg})`,
          backgroundColor: "#268C76",
        }}
      >
        <h1 className="text-white font-bold font-serif text-[40px] lg:pl-[9rem] xs:pl-[1rem] lg:pr-[19rem] xs:pt-[3rem] lg:pt-[6rem] pb-[1.5rem]">
          What we have to offer
        </h1>
        <p className="text-[20px] text-white xs:pr-[1rem] lg:pr-[33rem] xs:pl-[1rem] lg:pl-[9rem] pb-[3rem]">
          TreeWalker Arbor Care Is fully licensed and insured. We offer
          professional tree services in the greater Charlotte area. We provide
          everything from tree trimming and stump grinding to pest mitigation
          and disease control. We specialize in keeping trees healthy and
          properties safe from damage. Let us know about your trees and schedule
          a free risk evaluation.
        </p>
        {/* Cards */}
        <div className="lg:flex justify-center w-full pb-[3rem]">
          <div className="bg-white m-4 lg:w-[38%] rounded-[20px]">
            <h1 className="font-serif font-bold text-[26px] py-[2rem] pl-[2rem]">
              Loaction
            </h1>
            <div className="lg:flex pb-[1rem]">
              <Page6 className="xs:pb-[1rem]" title="Concord" />
              <Page6 className="lg:ml-[5rem]" title="Mathews" />
            </div>
            <div className="lg:flex pb-[1rem]">
              <Page6 className="xs:pb-[1rem]" title="Kannapolis" />
              <Page6 className="lg:ml-[3.7rem]" title="University" />
            </div>
            <div className="lg:flex pb-[1rem]">
              <Page6 className="xs:pb-[1rem]" title="Charlotte" />
              <Page6 className="lg:ml-[4.6rem]" title="Harrisburg" />
            </div>
            <div className="lg:flex pb-[2rem]">
              <Page6 className="xs:pb-[1rem]" title="Huntersville" />
              <Page6
                className="lg:ml-[3.3rem]"
                title="Greater Charlotte area"
              />
            </div>
          </div>

          <div className="bg-white m-4 lg:w-[38%] rounded-[20px]">
            <h1 className="font-serif font-bold text-[26px] py-[2rem] pl-[2rem]">
              Services
            </h1>
            <div className="lg:flex pb-[1rem]">
              <Page6 className="xs:pb-[1rem]" title="Risk Evaluation" />
              <Page6 className="lg:ml-[3rem]" title="Tree Removal" />
            </div>
            <div className="lg:flex pb-[1rem]">
              <Page6 className="xs:pb-[1rem]" title="Emergency Storm Work" />
              <Page6 className="lg:ml-[-0.6rem]" title="Stump Grinding" />
            </div>
            <div className="lg:flex pb-[1rem]">
              <Page6 className="xs:pb-[1rem]" title="Tree Trimming" />
              <Page6
                className="lg:ml-[3.3rem]"
                title="Tree Pest & Disease Control"
              />
            </div>
            <div className="lg:flex pb-[2rem]">
              <Page6 title="Tree Pruning" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferPage;
