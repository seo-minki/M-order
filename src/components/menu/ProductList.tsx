import { ProductOptions } from "@/types/menu";
import Product from "./Product";
import { motion } from "framer-motion";
import { SlideLeftAndOpacity } from "@/utils/animation";
import { useEffect, useState } from "react";
import ProductDetail from "../product/ProductDetail";

interface PropsProductList {
  list: Array<ProductOptions>;
}

const ProductList = ({ list }: PropsProductList) => {
  const [currentList, setCurrentList] = useState<Array<ProductOptions>>([]);
  const [productDetailInfo, setProductDetailInfo] =
    useState<ProductOptions | null>(null);

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
              toggleProductDetail={() => setProductDetailInfo(info)}
            ></Product>
          ))}
        </motion.div>
      ) : (
        <p className="h-24 text-[#555555] text-center py-20">
          상품 준비중입니다.
        </p>
      )}

      {productDetailInfo && (
        <ProductDetail
          image={productDetailInfo.image}
          productName={productDetailInfo.productName}
          price={productDetailInfo.price}
          id={productDetailInfo.id}
          toggleProductDetail={() => setProductDetailInfo(null)}
        />
      )}
    </div>
  );
};

export default ProductList;
