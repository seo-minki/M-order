import { loadPaymentWidget } from '@tosspayments/payment-widget-sdk'


export async function fetchPaymentWidget() {
  const clientKey: string = 'test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm'
  const customerKey: string = 'mZldYje7xPVYoSu1vA_jy'
  const paymentWidget = await loadPaymentWidget(clientKey, customerKey);
  return paymentWidget;
}

export function renderPaymentWidget(widget: any, price: number, ref: any) {
  const paymentMethodsWidget = widget.renderPaymentMethods(
    "#payment-widget",
    { value: price },
  );

  ref.current = paymentMethodsWidget;

}

export async function handlePaymentRequest(widget: any) {
  try {
    await widget?.requestPayment({
      orderId: "V1StGXR8_Z5jdHi6B-myT",
      orderName: "토스 티셔츠 외 2건",
      customerName: "김토스",
      customerEmail: "customer123@gmail.com",
      customerMobilePhone: "01012341234",
      successUrl: `${window.location.origin}/success`,
      failUrl: `${window.location.origin}/fail`,
    });
  } catch(e) {
    console.error(e);
  }
}