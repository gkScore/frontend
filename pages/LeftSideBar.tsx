import Link from "next/link";
import Image from "next/image";
import zkscore from "../public/sideButton/zkscore.svg";
import home from "../public/sideButton/home.svg";
import homeActive from "../public/sideButton/homeActive.svg";
import own from "../public/sideButton/own.svg";
import ownActive from "../public/sideButton/ownActive.svg";
import issue from "../public/sideButton/issue.svg";
import issueActive from "../public/sideButton/issueActive.svg";
import verification from "../public/sideButton/verification.svg";
import verificationActive from "../public/sideButton/verificationActive.svg";
const LeftSideBar = ({ nowPage }) => {
  return (
    //TODO スタイル整形
    <div>
      <div className="fixed top-[100px] left-10 px-auto">
        <div className="flex justify-center">
          <Image src={zkscore} alt="icon" />
        </div>
        <div className="flex flex-col items-start pt-20">
          <Link href="/Top">
            {nowPage === "home" ? (
              <Image src={homeActive} alt="home" />
            ) : (
              <Image src={home} alt="home" />
            )}
          </Link>
          <div className="pt-3">
            <Link href="/Own">
              {nowPage === "own" ? (
                <Image src={ownActive} alt="own" />
              ) : (
                <Image src={own} alt="own" />
              )}
            </Link>
          </div>
          <div className="pt-3">
            <Link href="/Issue">
              {nowPage === "issue" ? (
                <Image src={issueActive} alt="issue" />
              ) : (
                <Image src={issue} alt="issue" />
              )}
            </Link>
          </div>
          <div className="pt-3">
            <Link href="/Verification">
              {nowPage === "verification" ? (
                <Image src={verificationActive} alt="verification" />
              ) : (
                <Image src={verification} alt="verification" />
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
