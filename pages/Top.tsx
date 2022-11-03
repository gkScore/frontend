import { useState } from "react";
import LeftSideBar from "./LeftSideBar";
import SbtIssue from "./SbtIssue";
import bgTopImage from "../public/top/bg-top.svg";

const Top = () => {
  const [score, setScore] = useState(0);
  const [ownGenesis, setOwnGenesis] = useState<string>("");
  return (
    // TODO scoreの値をDBから取得
    // TODO スタイルの調整
    // TODO スコアに応じて円の色調整する
    <div className="mt-[100px]">
      {!ownGenesis ? (
        <div className="bg-bg_col w-[500px] h-[500px] flex m-auto rounded-[12px] opacity-80 justify-center items-center">
          <div className="flex flex-col  text-white items-end">
            <p className="text-3xl pt-5">My Score</p>
            <p className="text-8xl pt-10">{score}</p>
          </div>
          <LeftSideBar />
        </div>
      ) : (
        // TODO SbtIssue発行の画面遷移
        <SbtIssue />
      )}
    </div>
  );
};

export default Top;
