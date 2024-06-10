import { ProductOptions } from "@/types/menu";
import Product from "./Product";

interface PropsProductList {
  list : Array<ProductOptions>
}
const ProductList = ( {list} : PropsProductList ) => {
  return (
    <div className="flex items-center flex-wrap mt-2">
      {list.length > 0 ? list.map((info, index) => (
        <Product key={index}
          id={info.id}
          productName={info.productName}
          price={info.price}
          image={info.image}
        ></Product>
      )) 
        : <p className="w-full h-40 flex items-center justify-center text-[#555555]">메뉴 준비중입니다.</p>
      }
    </div>
  )
}

export default ProductList;