export interface CategoryOptions {
  categoryId: string,
  categoryName: string
  productList: Array<ProductOptions>
}

export interface ProductOptions {
  id: number,
  productName: string,
  price: number,
  image: string
}