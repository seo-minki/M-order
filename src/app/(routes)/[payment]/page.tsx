"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

import Title from "@/components/payment/Title";
import ShareButton from "@/components/payment/ShareButton";
import BillInfo from "@/containers/BillInfo";
import PayTypes from "@/containers/PayTypes";

type LedgerShortUrl = string;

const Payment = () => {
  const router = useRouter();
  const queryParams = useSearchParams();
  const ledgerShortUrl: LedgerShortUrl = usePathname().replace(/\//g, '');

  return (
    <div className="bg-neutral-100 min-h-screen flex justify-center px-5">
      <div className="max-w-[640px] w-full">
        <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative pl-2 pt-9 mb-7">
          <Title title={`청구서 \n 납부하기`}></Title>
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
        <h2 className="px-2 mt-7 mb-3 text-[18px] font-bold">결제수단 선택</h2>
        <PayTypes></PayTypes>
      </div>
    </div>
  );
};

export default Payment;
