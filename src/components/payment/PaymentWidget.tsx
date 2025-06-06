import { useState, useEffect, useRef } from 'react';
import { PaymentWidgetInstance } from '@tosspayments/payment-widget-sdk';

import { fetchPaymentWidget, renderPaymentWidget, handlePaymentRequest } from '@/hooks/paymentRequest';
import { motion } from 'framer-motion';
import { SlideUp } from '@/utils/animation';
import WidgetLoading from '@/components/payment/WidgetLoading';

interface PaymentWidgetProps {
  price: number;
  payRequest: boolean;
  productName: string;
  handleWidget: () => void;
}

const PaymentWidget = ({ price, payRequest, handleWidget, productName }: PaymentWidgetProps) => {
  const [paymentWidget, setPaymentWidget] = useState<PaymentWidgetInstance | null>(null);
  const [isReady, setReady] = useState(false);
  const paymentMethodsWidgetRef = useRef<HTMLDivElement>(null);

  const initializeWidget = async () => {
    try {
      const fetch = await fetchPaymentWidget();
      setPaymentWidget(fetch);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (payRequest) {
      initializeWidget();
    }
  }, [payRequest]);

  useEffect(() => {
    if (paymentWidget && price) {
      const render = async () => {
        try {
          await renderPaymentWidget(paymentWidget, price, paymentMethodsWidgetRef);
          setReady((prev) => !prev);
        } catch (e) {
          console.error(e);
        }
      };
      render();
    }
  }, [paymentWidget, price]);

  return (
    <div className="fixed px-5 left-0 top-0 w-full h-full bg-opacity z-10">
      <motion.div
        className="px-5 w-full h-full flex items-center justify-center"
        onClick={handleWidget}
        initial={SlideUp.initial}
        animate={SlideUp.animate}
        exit={SlideUp.exit}
        transition={SlideUp.transition}
      >
        {!isReady && <WidgetLoading />}
        <section className="w-[640px] rounded-xl overflow-hidden">
          <div id="payment-widget"></div>
          <button
            onClick={() => handlePaymentRequest(paymentWidget, productName)}
            className="w-full bg-blue p-4 text-white"
          >
            결제하기
          </button>
        </section>
      </motion.div>
    </div>
  );
};

export default PaymentWidget;
