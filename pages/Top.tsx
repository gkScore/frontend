import Link from "next/link";
import { useState } from "react";

const Home = () => {
  const [ownGenesis, setOwnGenesis] = useState<string>("");
  return (
    <div>
      {!ownGenesis ? (
        <>
          <div className="cube">
            <p className="text-8xl pt-10">45</p>
            <p className="text-3xl pt-5">My Score</p>
          </div>
          <div className="pt-36 grid grid-cols-3 gap-10 mx-auto text-white place-content-around">
            <Link href="/Issue">
              <button className="btn-link">Issue</button>
            </Link>
            <Link href="/Own">
              <button className="btn-link">Own</button>
            </Link>
            <Link href="/Verification">
              <button className="btn-link">Verification</button>
            </Link>
          </div>
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

export default Home;
