import { useState } from "react";
import LeftSideBar from "../LeftSideBar";
import SbtIssue from "../SbtIssue";
import bgTopImage from "../public/top/bg-top.svg";
import style from "../../styles/bgimage.module.css";

const Top = () => {
  // TODO scoreの値をDBから取得
  const [score, setScore] = useState(45);
  return (
    // TODO スコアに応じて円の色調整する
    <div className={style.home}>
      {/* TODO: 文字のフォントなど*/}
      <div className="text-white ">
        <p className="text-8xl pt-[270px] pl-[720px]">{score}</p>
      </div>
      <LeftSideBar nowPage="home" />
    </div>
  );
};

export default Top;
