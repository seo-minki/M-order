import { useState, useEffect, useRef } from "react";
import { fetchPaymentWidget, renderPaymentWidget, handlePaymentRequest } from "@/hooks/paymentRequest";
import { motion } from 'framer-motion';

interface PaymentWidgetProps {
  price: number;
  payRequest: boolean,
  handleWidget: () => void;
}

const PaymentWidget = (({ price, payRequest, handleWidget }: PaymentWidgetProps) => {
    const [paymentWidget, setPaymentWidget] = useState<any>(null);
    const paymentMethodsWidgetRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const init = async () => {
        const fetch = await fetchPaymentWidget();
        setPaymentWidget(fetch);
      };

      if (payRequest) {
        init();
      }

      
    }, [payRequest]);

    useEffect(() => {
      if (!paymentWidget || !price) {
        return;
      }
      
      renderPaymentWidget(paymentWidget, price, paymentMethodsWidgetRef)
    }, [paymentWidget, price]);

    return (
      <div className="fixed px-5 left-0 top-0 w-full h-full bg-opacity ">
        <motion.div className="px-5 w-full h-full flex items-center justify-center"
          onClick={handleWidget}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.5 }}
        >
          <section className="w-[640px] rounded-xl overflow-hidden">
            <div id="payment-widget" />
            <button
              onClick={() => handlePaymentRequest(paymentWidget)}
              className="w-full bg-[#3282f6] p-4 text-white"
            >
              결제하기
            </button>
          </section>
        </motion.div>
      </div>
    );
  }
);

export default PaymentWidget;
