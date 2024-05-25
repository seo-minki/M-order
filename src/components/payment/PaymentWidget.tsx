import { useState, useEffect, useRef } from "react";
import { fetchPaymentWidget, renderPaymentWidget, handlePaymentRequest } from "@/hooks/paymentRequest";

const PaymentWidget = () => {
  const [paymentWidget, setPaymentWidget] = useState<any>(null);
  const paymentMethodsWidgetRef = useRef(null);

  useEffect(() => {
    const init = async () => {
      const fetch = await fetchPaymentWidget();
      setPaymentWidget(fetch);
    }
    init();
    
  }, [])

  useEffect(() => {
    if (paymentWidget == null) {
      return;
    }

    renderPaymentWidget(paymentWidget, "10000", paymentMethodsWidgetRef);

  }, [paymentWidget])

  return (
    <div className="fixed px-5 left-0 top-0 w-full h-full bg-opacity flex items-center justify-center">
      <section className="w-[640px] rounded-xl overflow-hidden">
        <div id="payment-widget"/>
        <div id="agreement"/>
        <button onClick={() => handlePaymentRequest(paymentWidget)}
          className="w-full bg-[#3282f6] p-4 text-white"
        >
          결제하기
        </button>
      </section>
    </div>
  )
}
export default PaymentWidget;