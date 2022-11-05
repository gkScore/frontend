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
      <div className="w-[500px] h-[500px] flex m-auto rounded-[12px] opacity-80 justify-center items-center">
        <div className="flex flex-col  text-white items-end">
          <p className="text-3xl pt-5">My Score</p>
          <p className="text-8xl pt-10">{score}</p>
        </div>
        <LeftSideBar nowPage="home" />
      </div>
    </div>
  );
};

export default Top;
