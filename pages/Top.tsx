import { useState } from "react";
import { LeftSideBar } from "./LeftSideBar";

const Top = () => {
  const [ownGenesis, setOwnGenesis] = useState<string>("");
  return (
    <div className="bg-[#2C2F35] min-w-full max-h-full top-0 absolute bottom-0">
      {!ownGenesis ? (
        <>
          <h1 className="zkscore">zkScore</h1>
          <div className="cube">
            <p className="text-8xl pt-10">45</p>
            <p className="text-3xl pt-5">My Score</p>
          </div>
          <LeftSideBar />
        </>
      ) : (
        <div className="text-white text-center">
          <p>Welcome to zkScore</p>
          <p>You can own your own identity by issuing a GENESIS SBT.</p>
          <button>ISSUE</button>
        </div>
      )}
    </div>
  );
};

export default Top;
