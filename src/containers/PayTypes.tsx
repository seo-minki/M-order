import PayTypeTitle from "@/components/payType/PayTypeTitle";
import PayApps from "./PayApps";
import { Fragment } from "react";

const payTypeList = [
  {
    pay_mapping_cd: "PTM375CB44A864911ED89341C872C5802CD",
    pay_type_idx: "CARD_VAN",
    pay_type_nm: "앱카드",
    pay_agency_nm: "KSNET",
  },
  {
    pay_mapping_cd: "PTM375CB4C6864911ED89341C872C5802CD",
    pay_type_idx: "KEYIN",
    pay_type_nm: "일반결제",
    pay_agency_nm: "KSNET",
  },
  {
    pay_mapping_cd: "PTM375CB4D8864911ED89341C872C5802CD",
    pay_type_idx: "EASY_PAY",
    pay_type_nm: "간편결제",
    pay_agency_nm: "KSNET",
  },
  {
    pay_mapping_cd: "PTM375CB4E7864911ED89341C872C5802CD",
    pay_type_idx: "CARD_RP",
    pay_type_nm: "자동결제",
    pay_agency_nm: "KSNET",
  },
];

const PayTypes = () => {
  return (
    <div className="bg-white rounded-xl shadow-[0_4px_8px_0_rgba(0,0,0,0.1)]">
      {payTypeList.map((payType, index) => (
        <section className="border-b border-[rgba(0,0,0,0.12)] last-of-type:border-0" key={index}>
          <PayTypeTitle
            payTypeName={payType.pay_type_nm}
            payTypeIdx={payType.pay_type_idx}
          ></PayTypeTitle>
          <PayApps></PayApps>
        </section>
      ))}
    </div>
  );
};

export default PayTypes;
