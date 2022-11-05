import Link from "next/link";
import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { AiOutlineFileSearch } from "react-icons/ai";
import { AiOutlineIdcard } from "react-icons/ai";
import icon from "../public/leftSideBar/Union@2x.svg";

const LeftSideBar = () => {
  return (
    //TODO スタイル整形
    <body className="bg-blue-600">
      <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center">
        <div className="p-2.5 mt-1 flex items-center">
          <Image src={icon} alt="icon" />
        </div>
        <div className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold">
          <Link href="/Top">
            <span className="flex text-white items-center p-2 hover:bg-blue-600 rounded-md mt-1">
              <AiOutlineHome />
              <h1 className="pl-3">HOME</h1>
            </span>
          </Link>
          <Link href="/Own">
            <span className="flex text-white items-center p-2 hover:bg-blue-600 rounded-md mt-1">
              <CgProfile />
              <h1 className="pl-3">Own</h1>
            </span>
          </Link>
          <Link href="/Issue">
            <span className="flex text-white items-center p-2 hover:bg-blue-600 rounded-md mt-1">
              <AiOutlineFileSearch />
              <h1 className="pl-3">Issue</h1>
            </span>
          </Link>
          <Link href="/Verification">
            <span className="flex text-white items-center p-2 hover:bg-blue-600 rounded-md mt-1">
              <AiOutlineIdcard />
              <h1 className="pl-3">Verification</h1>
            </span>
          </Link>
        </div>
      </div>
    </body>
  );
};

export default LeftSideBar;
