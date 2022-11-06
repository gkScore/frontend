import { useState } from "react";
import LeftSideBar from "../LeftSideBar";
import SbtIssue from "../SbtIssue";
import bgTopImage from "../public/top/bg-top.svg";
import style from "../../styles/bgimage.module.css";

// TODO MyScoreコンポーネントを作成してbg-colorと文字をFigmaに合わせて適用する（現状bg-imageで無理やり実装している）
const Top = () => {
  // TODO scoreの値をDBから取得
  const [score, setScore] = useState(45);
  return (
    // TODO スコアに応じて円状にパーセンテージバーを表示（Max100）
    <div className={style.home}>
      <div className="text-white ">
        <p className="text-8xl pt-[270px] pl-[720px]">{score}</p>
      </div>
      <LeftSideBar nowPage="home" />
    </div>
  );
};

export default Top;
