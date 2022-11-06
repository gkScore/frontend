import LeftSideBar from "../LeftSideBar";
import style from "../../styles/bgimage.module.css";
import Image from "next/image";
import verButton from "../../public/images/verificationButton.svg";
const Verification = () => {
  // TODO スタイル調整
  // TODO OnClick処理
  return (
    <div className={style.ver}>
      <div className="pl-[530px] pt-[320px] rounded-[12px]">
        <div className="flex flex-col w-[400px]">
          <input
            type="text"
            placeholder="Enter address here"
            className="p-2 mt-[150px]"
          />
          <input
            type="text"
            placeholder="Enter score here"
            className="mt-[110px] p-2"
          />
        </div>
        <div className="cursor-pointer  mt-[50px] ml-[30px]">
          <Image src={verButton} alt="button" className="rounded-[20px]" />
        </div>
        <LeftSideBar nowPage="verification" />
      </div>
    </div>
  );
};

export default Verification;
