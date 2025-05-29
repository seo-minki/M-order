"use client";

import {useState, useEffect, useMemo, Suspense, lazy} from "react";
import {useAtom, useAtomValue} from 'jotai';
import useCustomRouter from "@/utils/router";
import { OrderListAtom } from "@/store/orderListAtom";
import { menuAtom } from "@/store/menuAtom";

import { ProductOptions } from "@/types/menu";
import {navigateList} from '@/constants/navigate';

import Header from "@/components/Header";
import ButtonComponent from "@/components/ButtonComponent";
import MenuLoading from '@/components/menu/MenuLoading';
const CategoryNavigation = lazy(() => import('@/components/menu/CategoryNavigation'));
const ProductList = lazy(() => import('@/components/menu/ProductList'));

const Menu = () => {
  const menu = useAtomValue(menuAtom);
  const [categoryId, setCategoryId] = useState<string>("");
  const [productList, setProductList] = useState<ProductOptions[]>([]);
  const [orderList] = useAtom(OrderListAtom);
  const { navigate } = useCustomRouter();

  const orderCount = useMemo((): number => {
    return orderList.reduce((acc, item) => acc + item?.quantity, 0);
  }, [orderList]);

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
    if (menu.length > 0) {
      handleCategoryType(menu[0]?.categoryId);
    }
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
        <Suspense fallback={<MenuLoading/>}>
          <CategoryNavigation
            categoryList={menu}
            selectId={categoryId}
            handleCategory={handleCategoryType}
          ></CategoryNavigation>
          <ProductList list={productList}></ProductList>
        </Suspense>
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
