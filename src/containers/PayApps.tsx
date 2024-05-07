import PayApp from "@/components/payType/PayApp";

interface PayAppList {
  pay_app_mapping_cd: string,
  pay_type_idx: string,
  img_path: string,
  pay_app_nm: string,
  pay_app_cd: string,
  pay_auth_cd: string,
}

const payAppList: PayAppList[] = [
  {
    pay_app_mapping_cd: "PAM0F15D289D5F611EEB81F00EE22AA4FC3",
    pay_type_idx: "CARD_VAN",
    img_path:
      "https://s3.ap-northeast-2.amazonaws.com/paymint.linq.seoul/system/payapp/PAYAPP_SH001_20181101102747_icon.png?v3",
    pay_app_nm: "신한페이판",
    pay_app_cd: "P0007",
    pay_auth_cd: "SHINHANAPPCARD",
  },
  {
    pay_app_mapping_cd: "PAM0F168460D5F611EEB81F00EE22AA4FC3",
    pay_type_idx: "CARD_VAN",
    img_path:
      "https://s3.ap-northeast-2.amazonaws.com/paymint.linq.seoul/dev/system/payapp/PAYAPP_APP02_20190903100642_icon.png",
    pay_app_nm: "현대카드",
    pay_app_cd: "P0018",
    pay_auth_cd: "HYUNDAIAPPCARD",
  },
  {
    pay_app_mapping_cd: "PAM0F169B9ED5F611EEB81F00EE22AA4FC3",
    pay_type_idx: "CARD_VAN",
    img_path:
      "https://s3.ap-northeast-2.amazonaws.com/paymint.linq.seoul/system/payapp/PAYAPP_SS001_20200221113642_icon.png",
    pay_app_nm: "삼성카드",
    pay_app_cd: "P0027",
    pay_auth_cd: "SAMSUNGAPPCARD",
  },
  {
    pay_app_mapping_cd: "PAM0F16B50AD5F611EEB81F00EE22AA4FC3",
    pay_type_idx: "CARD_VAN",
    img_path:
      "https://s3.ap-northeast-2.amazonaws.com/paymint.linq.seoul/dev/system/payapp/PAYAPP_NH001_20200521111728_icon.png",
    pay_app_nm: "NH올원페이",
    pay_app_cd: "P0031",
    pay_auth_cd: "NONGHYUPAPPCARD",
  },
];

const PayApps = () => {
  return (
  <div className="py-2 px-2 flex flex-wrap">
    {payAppList.map((payApp, index) => (
      <PayApp
        key={index}
        payAppName={payApp.pay_app_nm}
        payAppImage={payApp.img_path}
        payAuthCode={payApp.pay_auth_cd}
        payAppCode={payApp.pay_app_cd}
        payTypeIdx={payApp.pay_type_idx}
      ></PayApp>
    ))}
  </div>
  )
};

export default PayApps;
