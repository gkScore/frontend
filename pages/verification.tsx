import LeftSideBar from "./LeftSideBar";
import cat from "../public/top/cat_nml.svg";
import Image from "next/image";

const Verification = () => {
  // TODO スタイル調整
  // TODO OnClick処理
  return (
    <div>
      <div className="bg-bg_col w-[500px] h-[500px] flex m-auto rounded-[12px] opacity-80 justify-center items-center">
        <Image src={cat} alt="cat" />
        <div className="flex flex-col  text-white items-start">
          <p className="text-2xl pt-5">Address</p>
          <input type="text" placeholder="enter address here" />
          <p className="text-2xl pt-5">Score</p>
          <input type="text" placeholder="enter score here" />
          <button className="bg-[#AC8EFF]">Verification</button>
        </div>
        <LeftSideBar />
      </div>
    </div>
  );
};

export default Verification;
