import LeftSideBar from "../LeftSideBar";
import Image from "next/image";
import style from "../../styles/bgimage.module.css";

// TODO コンポーネントを3つ作成して表示を整える（MyScore,ScoreValue,IdentityScore）
const Own = () => {
  // TODO scoreを受け取る
  // TODO TotalScoreを受け取る
  // TODO ReceivedScoreを受け取る
  // TODO IdentityStateを受け取る
  return (
    <div className={style.own}>
      <div className="pt-[130px] w-fit">
        {/* <div className="pt-[100px] pl-[440px]"> */}
        <div className="flex flex-row pl-[460px]">
          <h5 className="text-8xl w-fit">45</h5>
          <div className="flex flex-col text-4xl pl-[760px]">
            <h5 className="">450</h5>
            <h5 className="pt-[80px]">10</h5>
          </div>
        </div>
      </div>
      <div className="text-4xl pt-[160px] pl-[600px]">
        <p>0x93839a0a9a9</p>
        <p className="pt-[60px]">0x48ks049wntg</p>
        <p className="pt-[60px]">0x93839a0a9a9</p>
      </div>
      <LeftSideBar nowPage="own" />
    </div>
  );
};

export default Own;
