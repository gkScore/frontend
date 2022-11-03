import LeftSideBar from "./LeftSideBar";

const Issue = () => {
  return (
    // TODO　onClickで発行　→モーダル表示
    // TODO スタイルの整形
    <div>
      <div className="bg-bg_col w-[500px] h-[500px] flex m-auto rounded-[12px] opacity-80 justify-center items-center">
        <div className="flex flex-col  text-white items-start">
          <p className="text-2xl pt-5">Address</p>
          <input type="text" placeholder="enter address here" />
          <p className="text-2xl pt-5">Score</p>
          <input type="text" placeholder="enter score here" />
          <button className="bg-[#AC8EFF]">Issue</button>
        </div>
        <LeftSideBar />
      </div>
    </div>
  );
};

export default Issue;
