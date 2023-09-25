import PageBg from "../../assets/Images/Page5.png";
import Profile1 from "../../assets/Images/Profile1.png";
import Profile2 from "../../assets/Images/Profile2.png";
import Profile3 from "../../assets/Images/Profile3.png";

const LandingPage5 = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.tailgrids.com/tailgrids-fallback.css"
      />

      <section
        className="pt-[1rem] lg:pt-[3rem] pb-10 lg:pb-20 bg-[#F3F4F6] bg-no-repeat bg-cover "
        style={{
          backgroundImage: `url(${PageBg})`,
          backgroundColor: "#268C76",
        }}
      >
        <div className="text-[30px] pl-[1.4rem] pr-[1rem] pt-[2rem] lg:text-center lg:text-[38px] text-white font-serif font-bold pb-[3rem]">
          What our customers have to say…
        </div>
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 xl:w-1/3 lg:px-4">
              <div className="xs:w-[385px] xs:ml-[-2.5rem] bg-white rounded-lg overflow-hidden mb-10">
                <div className="p-8 sm:p-9 md:p-7 xl:p-9">
                  <p className="text-base leading-relaxed mb-7">
                    “Storm knocked a dead tree on my 69 Buick. Lesson learned...
                    TreeWalker cleared my property.”
                  </p>
                  <div className="flex">
                    <img className="mt-[6.5rem]" src={Profile1} />
                    <p className="mt-[7rem] ml-[1rem]">TJ Philmore</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 lg:px-4">
              <div className="xs:w-[385px] xs:ml-[-2.5rem] bg-white rounded-lg overflow-hidden mb-10">
                <div className="p-8 sm:p-9 md:p-7 xl:p-9">
                  <p className="text-base leading-relaxed mb-7">
                    “It’s a huge relief having the three large oak trees on our
                    property pruned back. I used to rake multiple times a week
                    to keep up with the leaves, but now things are back under
                    control. Josh was incredibly helpful. Go TreeWalker!”
                  </p>
                  <div className="flex">
                    <img className="mt-[1.6rem]" src={Profile3} />
                    <p className="mt-[2rem] ml-[1rem]">Mark Johnson</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 lg:px-4">
              <div className="xs:w-[385px] xs:ml-[-2.5rem] bg-white rounded-lg overflow-hidden mb-10">
                <div className="p-8 sm:p-9 md:p-7 xl:p-9">
                  <p className="text-base leading-relaxed mb-7">
                    “We just purchased our first home and inspection failed to
                    catch that tree roots were pushing against the foundation.
                    Josh removed the tree and stump. Grateful that our home, and
                    that we only paid for a tree to be removed rather than
                    fixing a cracked foundation.”
                  </p>
                  <div className="flex">
                    <img className="" src={Profile2} />
                    <p className="mt-[0.4rem] ml-[1rem]">Sharon White</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage5;
