import Image from "next/image";
import { PayAppOptions } from "@/types/payType";

const PayApp = ({payAppName, payAppImage}: PayAppOptions) => {
  return (
    <div className="px-2 pb-4">
      <Image 
        src={payAppImage} alt="결제앱 이미지"
        className="rounded-[14px]"
        width={60}
        height={60}
      ></Image>
      <p className="text-[10px] font-medium text-center mt-2">{ payAppName }</p>
    </div>
  )
}

export default PayApp;