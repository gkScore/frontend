import LeftSideBar from "../LeftSideBar";
import style from "../../styles/bgimage.module.css";
import Image from "next/image";
import verButton from "../../public/images/verificationButton.svg";
import YesModal from "../../public/images/verYes.png";
import NoModal from "../../public/images/verNo.png";
import { useState } from "react";

// TODO IssueCompを作成して整形する（Figmaを見てbg-colorで区切ると良い）
// TODO 以下のモーダル切り替えの処理は綺麗ではない。かなり無理やりしているので修正すること。
const Verification = () => {
  const [score, setScore] = useState<number>();
  const [show, setShow] = useState<boolean>(true);
  const JudgeScore = () => {
    return (
      <div className="pl-[430px] pt-[120px] cursor-pointer">
        {typeof score === "number" && score >= 50 ? (
          <Image src={YesModal} alt="yes" onClick={() => setShow(true)} />
        ) : (
          <Image
            src={NoModal}
            alt="no"
            onClick={() => setShow(true)}
            className="w-[400px]"
          />
        )}
      </div>
    );
  };
  // TODO OnClick処理
  return (
    <div className={style.ver}>
      {show ? (
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
              value={score}
              onChange={(event) => setScore(Number(event.target.value))}
            />
          </div>
          <div className="cursor-pointer  mt-[50px] ml-[30px]">
            <Image
              src={verButton}
              alt="button"
              className="rounded-[20px]"
              onClick={() => setShow(false)}
            />
          </div>
        </div>
      ) : (
        <JudgeScore />
      )}
      <LeftSideBar nowPage="verification" />
    </div>
  );
};

export default Verification;
