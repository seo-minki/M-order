export interface CategoryOptions {
  categoryId: string;
  categoryName: string;
  productList: ProductOptions[];
}

export interface ProductOptions {
  id: string;
  productName: string;
  price: number;
  image: string;
}
