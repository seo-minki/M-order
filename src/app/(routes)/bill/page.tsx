"use client";

import BillTitle from "@/components/bill/BillTitle";
import ShareButton from "@/components/bill/ShareButton";
import BillInfo from "./containers/BillInfo";

type LedgerShortUrl = string;

const Bill = () => {
  return (
    <div className="max-w-[640px] w-full">
      <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative pl-2 pt-9 mb-7">
        <BillTitle title={`청구서 \n 납부하기`}></BillTitle>
        <ShareButton></ShareButton>
      </div>
      <BillInfo
        title="청구내역"
        companyName="회사이름"
        reason="커피값 2월달"
        amount={50000}
        companyLogo=""
        messageTitle="안내메123"
        message="안녕"
      ></BillInfo>
    </div>
  );
};

export default Bill;