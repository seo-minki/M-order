import { ProductOptions } from "@/types/menu";
import Product from "./Product";

interface PropsProductList {
  list : Array<ProductOptions>
}
const ProductList = ( {list} : PropsProductList ) => {
  return (
    <div className="flex items-center gap-4 mt-2">
      {list.map((info, index) => (
        <Product key={index}
          id={info.id}
          productName={info.productName}
          price={info.price}
          image={info.image}
        ></Product>
      ))}
    </div>
  )
}

export default ProductList;