import LeftSideBar from "./LeftSideBar";
import ideState from "../public/top/Group10.svg";
import Image from "next/image";

const Own = () => {
  // TODO スタイル整形
  return (
    <div className="mt-[100px]">
      <div className="bg-bg_col w-[500px] h-[500px] flex m-auto rounded-[12px] opacity-80 justify-center items-center">
        <div className="flex flex-col  text-white items-end">
          <p className="text-3xl pt-5">My Score</p>
          <p className="text-8xl pt-10">45</p>
        </div>
        <div className="text-white">
          <p>Total Score</p>
          <p>450</p>
          <p>Received Score</p>
          <p>10</p>
        </div>
        <div>
          <Image src={ideState} alt="state" />
        </div>
        <LeftSideBar />
      </div>
    </div>
  );
};

export default Own;
