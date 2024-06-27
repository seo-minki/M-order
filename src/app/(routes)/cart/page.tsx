"use client";
import Image from "next/image";
import ButtonComponent from "@/components/ButtonComponent";
import coffee from "public/images/menu/아메리카노.png";
import TrashIcon from "public/images/icons/trash.png";
import CloseIcon from "public/images/icons/close.png";

const Cart = () => {
  return (
    <div className="px-4 min-h-screen">
      <section className="relative pt-[72px] pb-[144px] max-w-5xl mx-auto">
        <h2>장바구니</h2>

        <ul>
          <li className="py-4">
            <h3 className="flex items-center justify-between text-2xl font-bold bg-blue text-white p-2">
              아메리카노
              <ButtonComponent
                classNames="w-8 h-8 flex items-center justify-center"
                buttonText=""
                handleClick={() => {}}
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
            </h3>
            <div className="flex items-center justify-between max-sm:block">
              <Image
                src={coffee}
                alt="담은 상품"
                width={200}
                height={200}
                priority={true}
                className="max-sm:w-full"
              />

              <div>
                <p className="text-right max-sm:text-center text-xl">
                  금액: <span className="font-bold">5000</span>
                </p>
                <div className="flex items-center justify-center mt-4">
                  <ButtonComponent
                    classNames="bg-blue rounded-md w-9 h-9 text-white"
                    buttonText="-"
                    handleClick={() => {}}
                  />
                  <span className="mx-2 min-w-[50px] text-center">{"1"}</span>
                  <ButtonComponent
                    classNames="bg-blue rounded-md w-9 h-9 text-white"
                    buttonText="+"
                    handleClick={() => {}}
                  />
                </div>
              </div>
            </div>
          </li>
        </ul>

        <div className="flex items-center justify-between text-2xl border-t-blue border-t-2 py-4">
          <p>총 금액</p>
          <span className="font-bold">5000원</span>
        </div>
      </section>
    </div>
  );
};

export default Cart;
