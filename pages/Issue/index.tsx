import LeftSideBar from "../LeftSideBar";
import style from "../../styles/bgimage.module.css";
import issueButton from "../../public/images/issueButton.svg";
import Image from "next/image";
import issueComplete from "../../public/images/IssueComplete.svg";
import issueLoading from "../../public/images/IssueLoading.svg";

const Loading = () => {
  // TODO　onClickで発行　ローディング画面
  return (
    <div>
      <Image src={issueLoading} alt="loading" />
    </div>
  );
};
const Complete = () => {
  // TODO　onClickで発行　モーダル画面
  return (
    <div>
      <Image src={issueComplete} alt="complete" />
    </div>
  );
};
const issueClick = () => {
  // TODO　onClickで発行　API
  setTimeout(Loading, 1);
  setTimeout(Complete, 1);
};
// TODO スタイルの整形
const Issue = () => {
  return (
    <div className={style.home}>
      <div className="w-[500px] h-[500px] flex m-auto rounded-[12px] opacity-80 justify-center items-center">
        <div className="flex flex-col  text-white items-start">
          <p className="text-2xl pt-5">Address</p>
          <input type="text" placeholder="enter address here" />
          <p className="text-2xl pt-5">Score</p>
          <input type="text" placeholder="enter score here" />
          <span onClick={issueClick}>
            <Image src={issueButton} alt="button" />
          </span>
          <LeftSideBar />
        </div>
      </div>
    </div>
  );
};

export default Issue;
