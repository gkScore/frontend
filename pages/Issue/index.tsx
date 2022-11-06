import { useState } from "react";
import LeftSideBar from "../LeftSideBar";
import style from "../../styles/bgimage.module.css";
import issueButton from "../../public/images/issueButton.svg";
import Image from "next/image";
import issueComplete from "../../public/images/IssueComplete.svg";
import issueLoading from "../../public/images/IssueLoading.svg";
import { ethers } from "ethers";
import contractAddr from "../../const/address.json";
import abi from "../../const/abi.json";

const Issue = () => {
  const [address, setAddress] = useState<string>("");
  const [score, setScore] = useState<string>("");
  //TODO isProgressの値に応じてプログレスバーを表示する
  const [isProgress, setProgress] = useState<boolean>(false);
  const [isCompleted, setCompleted] = useState<boolean>(false);

  const handleChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleChangeScore = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScore(e.target.value);
  };

  const issueClick = async () => {
    // TODO　onClickでする処理
    setProgress(true);
    // let scoreBytes = ethers.utils.toUtf8Bytes(score);
    // let hashedScore = ethers.utils.keccak256(scoreBytes);
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // await provider.send("eth_requestAccounts", []);
    // const signer = provider.getSigner();
    // const contract = new ethers.Contract(
    //   contractAddr.zkscore,
    //   abi.abi,
    //   provider
    // );
    // const contractWithSigner = contract.connect(signer);
    // try {
    //   const tx = await contractWithSigner.mint(address, hashedScore);
    //   console.log(tx);
    //   setCompleted(true);
    // } catch (e) {
    //   alert("You cannot issue this address");
    //   console.log(e);
    // }
    // setProgress(false);
  };

  const Loading = () => {
    // TODO ローディング画面 現状ローディング画面を実装していないのでissueCheck中に表示するように実装する
    return (
      <div>
        <Image src={issueLoading} alt="loading" />
      </div>
    );
  };
  const Complete = () => {
    // TODO　onClickで発行　モーダル画面　処理完了後に表示する。
    const setState = () => {
      setCompleted(false);
    };
    return (
      <div>
        <Image src={issueComplete} onClick={setState} alt="complete" />
      </div>
    );
  };

  return (
    <div className={style.issue}>
      {!isProgress ? (
        <div className="pl-[600px] pt-[320px] rounded-[12px]">
          <div className="flex flex-col w-[400px]">
            <input
              type="text"
              placeholder="Enter address here"
              className="p-2"
            />
            <input
              type="text"
              placeholder="Enter score here"
              className="mt-[150px] p-2"
            />
            <span className="pt-[60px] pl-[40px]">
              <Image
                src={issueButton}
                alt="button"
                className="rounded-[20px] cursor-pointer"
                onClick={issueClick}
              />
            </span>
          </div>
          <LeftSideBar nowPage="issue" />
        </div>
      ) : (
        <div className="flex items-center justify-center pt-[100px] pl-[130px]">
          <span onClick={() => setProgress(false)}>
            <Complete />
          </span>
          <LeftSideBar nowPage="issue" />
        </div>
      )}
    </div>
  );
};

export default Issue;
