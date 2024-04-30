import { InfoMessageOptions } from "@/types/bill";

const InfoMessage = ({ messageTitle, message}: InfoMessageOptions) => {
  return (
    <section className="p-4 mt-4 bg-white rounded-xl shadow-[0_4px_8px_0_rgba(0,0,0,0.1)]">
      <h2 className="text-[18px] mb-1 font-bold">{ messageTitle ? messageTitle : "안내 메시지" }</h2>
      <p className="leading-[22px]">{ message }</p>
    </section>
  )
}

export default InfoMessage;