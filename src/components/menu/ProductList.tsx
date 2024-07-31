import { ProductOptions } from "@/types/menu";
import Product from "./Product";
import { motion, AnimatePresence } from "framer-motion";
import { SlideLeftAndOpacity } from "@/utils/animation";
import { useEffect, useState } from "react";
import ProductDetail from "../product/ProductDetail";

interface PropsProductList {
  list: ProductOptions[];
}

const ProductList = ({ list }: PropsProductList) => {
  const [currentList, setCurrentList] = useState<ProductOptions[]>([]);
  const [productDetailInfo, setProductDetailInfo] =
    useState<ProductOptions | null>(null);

  useEffect(() => {
    if (
      list.length !== currentList.length ||
      list.some((item, index) => item.id !== currentList[index]?.id)
    ) {
      setCurrentList(list);
    }
  }, [list, currentList]);

  const handleToggleProductDetail = (info: ProductOptions | null) => {
    setProductDetailInfo(info);
  };

  return (
    <div className="mt-2">
      {currentList.length > 0 ? (
        <motion.div
          className="flex flex-wrap items-center"
          initial={SlideLeftAndOpacity.initial}
          animate={SlideLeftAndOpacity.animate}
          transition={SlideLeftAndOpacity.transition}
          key={currentList.map((item) => item.id).join("-")}
        >
          {currentList.map((info) => (
            <Product
              key={info.id}
              id={info.id}
              productName={info.productName}
              price={info.price}
              image={info.image}
              toggleProductDetail={() => handleToggleProductDetail(info)}
            ></Product>
          ))}
        </motion.div>
      ) : (
        <p className="h-24 text-[#555555] text-center py-20">
          상품 준비중입니다.
        </p>
      )}

      <AnimatePresence>
        {productDetailInfo && (
          <ProductDetail
            image={productDetailInfo.image}
            productName={productDetailInfo.productName}
            price={productDetailInfo.price}
            id={productDetailInfo.id}
            toggleProductDetail={() => handleToggleProductDetail(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductList;
