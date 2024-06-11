import { ProductOptions } from "@/types/menu";
import Product from "./Product";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface PropsProductList {
  list: Array<ProductOptions>;
}

const animationSettings = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.4 },
};

const ProductList = ({ list }: PropsProductList) => {
  const [currentList, setCurrentList] = useState<Array<ProductOptions>>([]);

  useEffect(() => {
    const isChanged = list.some(
      (item, index) => item.id !== currentList[index]?.id
    );

    if (isChanged || list.length === 0) {
      setCurrentList(list);
    }
  }, [list]);

  return (
    <div className="mt-2">
      {currentList.length > 0 ? (
        <motion.div
          className="flex flex-wrap items-center"
          initial={animationSettings.initial}
          animate={animationSettings.animate}
          transition={animationSettings.transition}
          key={currentList.map((item) => item.id).join("-")}
        >
          {currentList.map((info) => (
            <Product
              key={info.id}
              id={info.id}
              productName={info.productName}
              price={info.price}
              image={info.image}
            ></Product>
          ))}
        </motion.div>
      ) : (
        <p className="h-24 text-[#555555] text-center py-20">
          상품 준비중입니다.
        </p>
      )}
    </div>
  );
};

export default ProductList;
