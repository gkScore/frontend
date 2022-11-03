import LeftSideBar from "./LeftSideBar";

const Verification = () => {
  return (
    <div>
      <span>
        <p>Enter Wallet Address</p>
        <input type="text"></input>
        <p>Enter Score</p>
        <input type="text"></input>
      </span>
      <button>Verification</button>
      <LeftSideBar />
    </div>
  );
};

export default Verification;
