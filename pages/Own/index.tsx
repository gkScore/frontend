import LeftSideBar from "../LeftSideBar";
import Image from "next/image";
import style from "../../styles/bgimage.module.css";

const Own = () => {
  // TODO スタイル整形
  return (
    <div className={style.own}>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="flex flex-col  text-white items-end">
          <p className="text-3xl pt-5">My Score</p>
          <p className="text-8xl pt-10">45</p>
        </div>

        <LeftSideBar nowPage="own" />
      </div>
    </div>
  );
};

export default Own;
