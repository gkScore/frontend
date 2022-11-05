import LeftSideBar from "../LeftSideBar";
import style from "../../styles/bgimage.module.css";
import Image from "next/image";
import verButton from "../../public/images/verificationButton.svg";
const Verification = () => {
  // TODO スタイル調整
  // TODO OnClick処理
  return (
    <div className={style.var}>
      <div className="h-screen w-screen flex flex-col justify-end items-center text-white">
        <div>
          <p>Address</p>
          <input type="text" />
        </div>
        <div>
          <p>Score</p>
          <input type="text" />
        </div>
        <Image src={verButton} alt="button" />
        <LeftSideBar nowPage="verification" />
      </div>
    </div>
  );
};

export default Verification;
