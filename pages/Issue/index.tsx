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

// TODO スタイルの整形
const Issue = () => {
  const [address, setAddress] = useState<string>('')
  const [score, setScore] = useState<string>('')
  const [isProgress, setProgress] = useState<boolean>(false);
  const [isCompleted, setCompleted] = useState<boolean>(false);

  const handleChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value)
  }

  const handleChangeScore = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScore(e.target.value)
  }

  const issueClick = async () => {
    // TODO　onClickで発行　API
    setProgress(true);
    let scoreBytes = ethers.utils.toUtf8Bytes(score);
    let hashedScore = ethers.utils.keccak256(scoreBytes);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner()
    const contract = new ethers.Contract(contractAddr.zkscore, abi.abi, provider);
    const contractWithSigner = contract.connect(signer);
    try{
      const tx =  await contractWithSigner.mint(address, hashedScore);
      console.log(tx);
      setCompleted(true);
    }catch(e){
      alert("You cannot issue this address");
      console.log(e);
    }
    setProgress(false);
  };

  const Loading = () => {
    // TODO　onClickで発行　ローディング画面
    return (
      <div>
        <Image src={issueLoading} alt="loading" />
      </div>
    );
  };
  const Complete = () => {
    // TODO　onClickで発行　モーダル画面
    const setState = () => {
      setCompleted(false);
    }
    return (
      <div>
        <Image src={issueComplete} onClick={setState} alt="complete" />
      </div>
    );
  };

  return (
    <div className={style.home}>
      <div className="w-[500px] h-[500px] flex m-auto rounded-[12px] opacity-80 justify-center items-center">
        <div className="flex flex-col items-start">
          {isProgress ? (
            <Loading/>
          ):(isCompleted ? (
            <Complete/>
            ):(
              <div>
                <p className="text-2xl text-white pt-5">Address</p>
                <input type="text" placeholder="enter address here" onChange={handleChangeAddress}/>
                <p className="text-2xl text-white pt-5">Score</p>
                <input type="text" placeholder="enter score here" onChange={handleChangeScore}/>
                <span onClick={issueClick}>
                  <Image src={issueButton} alt="button" />
                </span>
              </div>
            )
          )}
          <LeftSideBar nowPage="issue" />
        </div>
      </div>
    </div>
  );
};

export default Issue;
