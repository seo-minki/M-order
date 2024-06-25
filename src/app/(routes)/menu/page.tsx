"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchMenu } from "@/utils/api";
import { CategoryOptions, ProductOptions } from "@/types/menu";

import Header from "@/components/Header";
import CategoryNavigation from "@/components/menu/CategoryNavigation";
import ProductList from "@/components/menu/ProductList";
import ButtonComponent from "@/components/ButtonComponent";

const Menu = () => {
  const [menu, setMenu] = useState<Array<CategoryOptions>>([]);
  const [categoryId, setCategoryId] = useState<string>("");
  const [productList, setProductList] = useState<Array<ProductOptions>>([]);
  const router = useRouter();

  const goPaymentPage = (): void => {
    router.push("/payment", {scroll: false});
  };

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
    <div className="px-4 min-h-screen">
      <Header></Header>
      <section className="relative pt-[72px] pb-[144px] max-w-5xl mx-auto">
        <CategoryNavigation 
          categoryList={menu}
          selectId={categoryId} 
          handleCategory={handleCategoryType}
        ></CategoryNavigation>
        <ProductList
          list={productList}
        ></ProductList>
      </section>

      <div className="fixed bottom-4 left-0 w-full px-4">
        <ButtonComponent 
            buttonText="주문하기"
            classNames="block rounded-xl bg-blue font-bold text-center text-xl text-white h-[72px] w-full max-w-5xl mx-auto"
            handleClick={goPaymentPage}
          ></ButtonComponent>
      </div>

      
    </div>
  )
}

export default Menu;