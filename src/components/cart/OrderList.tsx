"use client";

import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { OrderListState } from "@/store/orderListAtom";
import ButtonComponent from "@/components/ButtonComponent";
import CloseIcon from "public/images/icons/close.png";
import Image from "next/image";
import { comma } from "@/utils/helper";

const OrderList = () => {
  const [newOrderlist, setNewOrderList] = useRecoilState(OrderListState);
  const [totalPrice, setToalPrice] = useState<number>(0);
  const router = useRouter();

  const handleQuantity = (type: string, id: string): void => {
    const updatedOrderList = newOrderlist.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: type === "plus" ? item.quantity + 1 : item.quantity - 1,
        };
      }

      return item;
    }, []);

    setNewOrderList(updatedOrderList);
  };

  const removeItem = (id: string): void => {
    const updateOrderList = [...newOrderlist].filter((item) => item.id !== id);
    setNewOrderList(updateOrderList);
  };

  useEffect(() => {
    const sum = newOrderlist.reduce(
      (arr, cur) => arr + cur.price * cur.quantity,
      0
    );
    setToalPrice(sum);
  }, [newOrderlist]);

  const goPaymentPage = () => {
    router.push("/payment");
  };

  return (
    <section className="max-w-5xl mx-auto">
      <h2>장바구니</h2>
      <ul>
        {newOrderlist.map((order) => (
          <li key={order.id} className="py-4 relative">
            <ButtonComponent
              classNames="w-9 h-9 flex items-center justify-center rounded-full bg-gray-300 absolute right-0 top-0"
              buttonText=""
              handleClick={() => {
                removeItem(order.id);
              }}
            >
              <Image
                src={CloseIcon}
                alt="로고"
                width={16}
                height={16}
                priority={true}
                className="w-4"
              />
            </ButtonComponent>

            <div className="flex items-center justify-between max-sm:block">
              <Image
                src={order.image}
                alt="담은 상품"
                width={200}
                height={200}
                priority={true}
                className="max-sm:w-full"
              />

              <div>
                <h3 className="text-2xl font-bold text-blue text-right">
                  {order.productName}
                </h3>
                <p className="text-right max-sm:text-center text-xl">
                  금액: <span className="font-bold">{comma(order.price)}</span>
                </p>
                <div className="flex items-center justify-center mt-4">
                  <ButtonComponent
                    classNames="bg-blue rounded-md w-9 h-9 text-white"
                    buttonText="-"
                    isDisabled={order.quantity < 2}
                    handleClick={() => {
                      handleQuantity("minus", order.id);
                    }}
                  />
                  <span className="mx-2 min-w-[50px] text-center">
                    {order.quantity}
                  </span>
                  <ButtonComponent
                    classNames="bg-blue rounded-md w-9 h-9 text-white"
                    buttonText="+"
                    isDisabled={order.quantity >= 10}
                    handleClick={() => {
                      handleQuantity("plus", order.id);
                    }}
                  />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between text-2xl border-t-blue border-t-2 py-4">
        <p>총 금액</p>
        <span className="font-bold">{comma(totalPrice)}원</span>
      </div>

      <ButtonComponent
        buttonText="결제하기"
        classNames="block rounded-xl bg-blue font-bold text-center text-xl text-white h-[72px] w-full mt-4"
        handleClick={goPaymentPage}
      />
    </section>
  );
};

export default OrderList;
