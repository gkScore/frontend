import { LeftSideBar } from "./LeftSideBar";

const Own = () => {
  return (
    <div className="text-white flex flex-col">
      <div>
        <div className="cube">
          <p>My Score</p>
          <p>45</p>
        </div>
        <div className="flex">
          <span>Total Score</span>
          <span>450</span>
        </div>
        <div className="flex">
          <span>Trade Counts</span>
          <span>10</span>
        </div>
        <div className="flex flex-col">
          <span>Identity State</span>
          <span>0x93839e0a9a9</span>
          <span>0x48342d32re3</span>
        </div>
        <LeftSideBar />
      </div>
    </div>
  );
};

export default Own;
