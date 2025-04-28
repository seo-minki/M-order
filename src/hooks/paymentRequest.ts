import { loadPaymentWidget } from "@tosspayments/payment-widget-sdk";

export async function fetchPaymentWidget() {
  const clientKey: string = process.env.NEXT_PUBLIC_TOSS_PAYMENT_CLIENT_KEY || '';
  const customerKey: string = process.env.NEXT_PUBLIC_TOSS_PAYMENT_CUSTOMER_KEY || '';
  const paymentWidget = await loadPaymentWidget(clientKey, customerKey);
  return paymentWidget;
}

export function renderPaymentWidget(widget: any, price: number, ref: any) {
  const paymentMethodsWidget = widget.renderPaymentMethods("#payment-widget", {
    value: price,
  });
  paymentMethodsWidget.on("ready", () => {
    // 결제 버튼 활성화
    ref.current = paymentMethodsWidget;
  });
}

export function handlePaymentRequest(widget: any, productName: string) {
  widget?.requestPayment({
    orderId: "V1StGXR8_Z5jdHi6B-myT",
    orderName: productName,
    customerName: "김토스",
    customerEmail: "seominki0108@gmail.com",
    customerMobilePhone: "01012341234",
    successUrl: `${window.location.origin}/order/success`,
    failUrl: `${window.location.origin}/order/fail`,
  });
}
