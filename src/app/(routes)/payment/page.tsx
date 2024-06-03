"use client";
import { useState } from "react";
import { AnimatePresence } from 'framer-motion';

import Title from "@/components/payment/Title";
import BillInfo from "@/containers/BillInfo";
import ButtonComponent from "@/components/ButtonComponent";
import PaymentWidget from "@/components/payment/PaymentWidget";

const Payment = () => {

  const price: number = 50000;
  const [payRequest, setPayRequest] = useState<boolean>(false);

  const togglePaymentWidget = ():void => {
    setPayRequest(!payRequest);
  }

  return (
    <div className="flex justify-center px-5">
      <div className="max-w-[640px] w-full">
        <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative pl-2 pt-9 mb-7">
          <Title title="결제하기"></Title>
        </div>
        <BillInfo
          title="청구내역"
          companyName="회사이름"
          reason="커피값 2월달"
          amount={price}
          companyLogo=""
          messageTitle="안내메세지"
          message="안녕"
        ></BillInfo>

        <ButtonComponent
          buttonText="결제하기"
          classNames="block rounded-xl bg-blue font-bold text-center text-white h-[72px] w-full mt-7"
          handleClick={togglePaymentWidget}
        ></ButtonComponent>

        <AnimatePresence>
          { payRequest && <PaymentWidget price={price} payRequest={payRequest} handleWidget={togglePaymentWidget}/>}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Payment;
