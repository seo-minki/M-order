import { ProductOptions } from "@/types/menu";
import { comma } from "@/utils/helper";
import Image from "next/image";

interface PropsProductOptions extends ProductOptions {
  toggleProductDetail: (info: object) => void;
}

const Product = (product: PropsProductOptions) => {
  return (
    <div
      className="w-1/4 cursor-pointer max-md:w-1/3"
      onClick={() => product.toggleProductDetail(product)}
    >
      <Image
        src={product.image}
        width={256}
        height={335}
        className="w-full"
        priority={true}
        alt="상품 이미지"
      />
      <p className="text-center text-lg">{product.productName}</p>
      <span className="block text-center">{comma(product.price)}원</span>
    </div>
  );
};

export default Product;
