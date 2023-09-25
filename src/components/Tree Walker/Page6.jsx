import Tick from "../../assets/Images/Tick.png";
import Circle from "../../assets/Images/Circle.png";

const Page6 = (props) => {
  const { title } = props;
  return (
    <div className={`flex pl-[2rem] ${props.className}`}>
      <img className={`h-[24px]`} src={Circle} />
      <img className={`h-[10px] relative top-[7px] left-[-20px]`} src={Tick} />
      <h1 className={`font-serif`}>{title}</h1>
    </div>
  );
};

export default Page6;
