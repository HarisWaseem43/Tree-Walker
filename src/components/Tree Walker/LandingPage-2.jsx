import Card1 from "../../assets/Images/Card1.png";
import Card2 from "../../assets/Images/Card2.png";

const LandingPage2 = () => {
  return (
    <>
      <h1 className="xs:pl-[3rem] xs:pr-[3rem] font-serif font-bold mt-[4rem] text-[38px] text-center">
        Are your trees hurting more than helping?
      </h1>
      <div className="lg:flex p-10 pb-24 justify-center">
        <div className="lg:max-w-[500px] overflow-hidden m-4 shadow-xl border-solid border-[#f1f5f9] border-[1px] rounded-lg">
          <img className="w-full px-4 py-4" src={Card1} alt="Mountain" />
          <div className="px-4 pb-10">
            <div className="font-bold text-xl mb-2 font-serif">
              Unchecked trees can be dangerous and unpredictable
            </div>
            <ul className="text-gray-700 text-base list-disc pl-4">
              <li>
                Is your foundation at risk of cracking from invasive roots?
              </li>
              <li>Is your roof in danger from dead or overgrown limbs?</li>
              <li>How safe are your parked vehicles? </li>
            </ul>
          </div>
        </div>
        <div className="lg:max-w-[500px] overflow-hidden m-4 shadow-xl border-solid border-[#f1f5f9] border-[1px] rounded-lg">
          <img className="w-full px-4 py-4" src={Card2} alt="Mountain" />
          <div className="px-4 pb-10">
            <div className="font-bold text-xl mb-2 font-serif">
              Trees are messy
            </div>
            <ul className="text-gray-700 text-base list-disc pl-4">
              <li>Is raking leaves a huge chore every year?</li>
              <li>Tired of tripping over roots while mowing?</li>
              <li>Overgrowth getting unsightly?</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage2;
