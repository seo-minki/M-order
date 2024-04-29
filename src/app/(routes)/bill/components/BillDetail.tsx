"use client";

import Image from "next/image";
import defaultProfileImage from "public/images/profile_img.png"

import MerchantDetailButton from "@/components/bill/MerchantDetailButton";
import { BillDetailOptions } from "@/types/bill";

export default function BillDetail({
  title,
  companyName,
  reason,
  amount,
  companyLogo,
}: BillDetailOptions) {

  function BillInfoList(): JSX.Element {
    return (
      <ul>
        <li className="flex justify-between items-start border-b py-4">
          <p className="text-sm text-black shrink-0">발급처</p>
          <div>
            <span className="font-bold text-black block text-right mb-[5px]">{companyName}</span>
            <MerchantDetailButton></MerchantDetailButton>
          </div>
        </li>
        <li className="flex justify-between items-center border-b py-4">
          <p className="text-sm text-black shrink-0">품목</p>
          <span className="font-bold text-black">{reason}</span>
        </li>
        <li className="flex justify-between items-center py-4">
          <p className="text-sm text-black shrink-0">금액</p>
          <span className="highlight-text">{amount}</span>
        </li>
      </ul>
    );
  }
  
  return (
    <section className="relative py-2 px-4 bg-white rounded-xl shadow-[0_4px_8px_0_rgba(0,0,0,0.1)]">
      <h2 className="py-4 text-lg font-bold">{title}</h2>
      <Image
        src={companyLogo ? companyLogo : defaultProfileImage}
        alt="사업장 로고"
        className="absolute right-4 top-[-20px] w-[72px] rounded-[27px]"
      ></Image>
      <BillInfoList></BillInfoList>
    </section>
  );
}
