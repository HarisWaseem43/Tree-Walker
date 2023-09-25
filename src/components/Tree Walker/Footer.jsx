import LogoFooter from "../../assets/Images/LogoFooter.png";
import Insta from "../../assets/Images/Insta.png";
import Facebook from "../../assets/Images/Facebook.png";

const Footer = () => {
  return (
    <>
      <div className="xs:pl-[1rem] lg:px-[4rem] xs:mt-[5rem] lg:mt-[8rem] lg:flex justify-between">
        <span>
          <img className="xs:mb-[2rem]" src={LogoFooter} />
        </span>
        <div className="lg:flex mt-[1rem]">
          <span className="flex xs:mb-[1rem] mr-[1rem]">
            <img className="h-[30px] mr-[6px]" src={Insta} />
            <p>@treewalkerarborcare</p>
          </span>
          <span className="flex ">
            <img className="h-[30px] mr-[6px]" src={Facebook} />
            <p>/treewalkerarborcare</p>
          </span>
        </div>
      </div>
      <h1 className="xs:pl-[1rem] lg:pl-[4rem] my-[3rem]">
        © 2023 TreeWalker LLC.
      </h1>
    </>
  );
};

export default Footer;
