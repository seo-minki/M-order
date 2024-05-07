import { PayTypeOpions } from "@/types/payType";

const PayTypeTitle = ({ payTypeName, payTypeIdx }: PayTypeOpions) => {

  return (
    <div className="flex items-center px-4 py-6">
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="none"
      >
        <circle cx={12} cy={12} r={10} fill="#00FE9A" />
        <path d="M5 10.5L11 16L22 5" stroke="black" strokeWidth={3} />
      </svg>
      <h3 className="font-bold ml-3">{ payTypeName }</h3>
    </div>
  )
}

export default PayTypeTitle;