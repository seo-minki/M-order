"use client";

import { useState, useEffect } from "react";
import { fetchMenu } from "@/utils/api";
import Header from "@/components/Header";
import CategoryNavigation from "@/components/menu/CategoryNavigation";
import ProductList from "@/components/menu/ProductList";
import { CategoryOptions, ProductOptions } from "@/types/menu";

const Menu = () => {
  const [menu, setMenu] = useState<Array<CategoryOptions>>([]);
  const [categoryId, setCategoryId] = useState<string>("");
  const [productList, setProductList] = useState<Array<ProductOptions>>([]);

  async function getMenu() {
    const data = await fetchMenu();    
    setMenu(data.result);
  };

  const handleCategoryType = (id: string) => {
    setCategoryId(id);
  }

  const handleProductList = () => {
    const list = menu.find((data: {categoryId: string}) => data.categoryId === categoryId);

    if (list) {
      setProductList(list.productList);
    }
  }

  useEffect(() => {
    getMenu();
  }, []);

  useEffect(() => {
    if(menu.length > 0) {
      handleCategoryType(menu[0].categoryId);
    }
  }, [menu]);

  useEffect(() => {
    handleProductList();
  }, [categoryId])

  return (
    <div className="px-4">
      <Header></Header>
      <section className="relative my-[72px] max-w-5xl mx-auto">
        <CategoryNavigation 
          categoryList={menu}
          selectId={categoryId} 
          handleCategory={handleCategoryType}
        ></CategoryNavigation>
        <ProductList
          list={productList}
        ></ProductList>
      </section>
    </div>
  )
}

export default Menu;