import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { AiOutlineFileSearch } from "react-icons/ai";
import { AiOutlineIdcard } from "react-icons/ai";

export const LeftSideBar = () => {
  return (
    <div className="flex flex-col left-0 top-60 w-4/12">
      <div className="w-fit">
        <Link href="/Top">
          <span className="flex text-white items-center cursor-pointer">
            <AiOutlineHome />
            <p>HOME</p>
          </span>
        </Link>
        <Link href="/Own">
          <span className="flex text-white items-center cursor-pointer">
            <CgProfile />
            <p>Own</p>
          </span>
        </Link>
        <Link href="/Issue">
          <span className="flex text-white items-center cursor-pointer">
            <AiOutlineFileSearch />
            <p>Issue</p>
          </span>
        </Link>
        <Link href="/Verification">
          <span className="flex text-white items-center cursor-pointer">
            <AiOutlineIdcard />
            <p>Verification</p>
          </span>
        </Link>
      </div>
    </div>
  );
};
