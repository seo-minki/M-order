import { ProductOptions } from "@/types/menu";
import { comma } from "@/utils/helper";
import Image from "next/image";

const Product = ( product: ProductOptions ) => {
  return (
    <div className="w-1/4 cursor-pointer">
      <Image
        src={product.image}
        width={100}
        height={100}
        className="w-full"
        alt="상품 이미지"
      />
      <p className="text-center text-lg">{product.productName}</p>
      <span className="block text-center">{comma(product.price)}원</span>
    </div>
  )
}

export default Product;