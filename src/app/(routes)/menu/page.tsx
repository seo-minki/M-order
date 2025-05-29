"use client";

import { useState, useEffect, useMemo } from "react";
import useCustomRouter from "@/utils/router";
import { fetchMenu } from "@/utils/api";
import { CategoryOptions, ProductOptions } from "@/types/menu";
import { useAtom } from 'jotai';
import { OrderListAtom } from "@/store/orderListAtom";

import Header from "@/components/Header";
import HomeIcon from "public/images/icons/home.png";
import CartIcon from "public/images/icons/cart.png";

import CategoryNavigation from "@/components/menu/CategoryNavigation";
import ProductList from "@/components/menu/ProductList";
import ButtonComponent from "@/components/ButtonComponent";

const Menu = () => {
  const [menu, setMenu] = useState<CategoryOptions[]>([]);
  const [categoryId, setCategoryId] = useState<string>("");
  const [productList, setProductList] = useState<ProductOptions[]>([]);
  const [orderList] = useAtom(OrderListAtom);
  const { navigate } = useCustomRouter();

  const orderCount = useMemo((): number => {
    return orderList.reduce((acc, item) => acc + item?.quantity, 0);
  }, [orderList]);

  // 헤더 네비게이션 정보
  const navigateList = [
    {
      imagePath: HomeIcon,
      routePath: "/",
    },
    {
      imagePath: CartIcon,
      routePath: "/cart",
    },
  ];

  async function getMenu() {
    const data = await fetchMenu();
    setMenu(data.result);
  }

  const handleCategoryType = (id: string) => {
    setCategoryId(id);
    handleProductList(id);
  };

  const handleProductList = (id: string) => {
    const list = menu.find(
      (data: { categoryId: string }) => data.categoryId === id
    );

    if (list) {
      setProductList(list.productList);
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  useEffect(() => {
    handleCategoryType(menu[0]?.categoryId);
  }, [menu]);
  
  const OrderCountChip = () => {
    if (orderCount <= 0) return null;
    
    return (
      <div className="absolute right-0 top-[-16px] w-8 h-8 text-center rounded-full bg-gray-300 text-white leading-[32px] count-chip">
        {orderCount}
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      <Header navigateList={navigateList}></Header>
      <section className="relative pt-[72px] pb-[144px] max-w-5xl mx-auto">
        <CategoryNavigation
          categoryList={menu}
          selectId={categoryId}
          handleCategory={handleCategoryType}
        ></CategoryNavigation>
        <ProductList list={productList}></ProductList>
      </section>

      <div className="fixed bottom-4 left-0 w-full px-4">
        <ButtonComponent
          buttonText="주문하기"
          classNames="block rounded-xl bg-blue font-bold text-center text-xl text-white h-[72px] w-full max-w-5xl mx-auto relative"
          handleClick={() => navigate("/cart")}
          isDisabled={orderCount === 0}
        >
          <OrderCountChip></OrderCountChip>
        </ButtonComponent>
      </div>
    </div>
  );
};

export default Menu;
