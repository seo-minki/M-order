"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProductOptions } from "@/types/menu";
import { SlideUp } from "@/utils/animation";
import Image from "next/image";
import ButtonComponent from "../ButtonComponent";

interface PropsProductOptions extends ProductOptions {
  toggleProductDetail: () => void;
}

const ProductDetail = (product: PropsProductOptions) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantity = (type: string): void => {
    if (type === "plus") {
      setQuantity((prevQuantity) => prevQuantity + 1);
    } else if (type === "minus" && quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="w-full h-full fixed left-0 bottom-0 z-10 bg-opacity pt-[3%]">
      <motion.div
        className="rounded-t-3xl bg-red px-4 pt-4 h-full bg-white overflow-auto"
        initial={SlideUp.initial}
        animate={SlideUp.animate}
        exit={SlideUp.exit}
        transition={SlideUp.transition}
      >
        <section className="h-full min-h-[640px] max-w-5xl mx-auto relative">
          <ButtonComponent
            classNames="bg-slate-200 w-9 h-9 rounded-full absolute right-0 top-0"
            buttonText="X"
            handleClick={() => product.toggleProductDetail()}
          />
          <Image
            src={product.image}
            width={300}
            height={335}
            priority={true}
            alt="상품 이미지"
            className="mx-auto"
          />
          <p className="text-center mb-2 mx-2 text-2xl font-bold">
            {product.productName}
          </p>
          <span className="block text-center text-lg">{product.price}원</span>

          <div className="flex items-center justify-center mt-4">
            <ButtonComponent
              classNames="bg-blue rounded-md w-9 h-9 text-white"
              buttonText="-"
              handleClick={() => handleQuantity("minus")}
            />
            <span className="mx-2 min-w-[50px] text-center">{quantity}</span>
            <ButtonComponent
              classNames="bg-blue rounded-md w-9 h-9 text-white"
              buttonText="+"
              handleClick={() => handleQuantity("plus")}
            />
          </div>

          <ButtonComponent
            classNames="absolute bottom-4 left-0 block rounded-xl bg-blue font-bold text-center text-xl text-white h-[72px] w-full"
            buttonText="추가하기"
            handleClick={() => {}}
          ></ButtonComponent>
        </section>
      </motion.div>
    </div>
  );
};

export default ProductDetail;
