import { Fragment } from "react";
import BillDetail from "@/components/payment/PaymentDetail";
import InfoMessage from "@/components/payment/InfoMessage";

import { BillInfoOptions } from "@/types/bill";

const BillInfo = ({title, companyName, reason, amount, companyLogo, messageTitle, message}: BillInfoOptions) => {
  return (
    <Fragment>
      <BillDetail 
        title={title}
        companyName={companyName}
        reason={reason}
        amount={amount}
        companyLogo={companyLogo}
      ></BillDetail>
      {message ? <InfoMessage messageTitle={messageTitle} message={message}></InfoMessage> : <></>}
    </Fragment>
  )
}

export default BillInfo;