"use client";

import { useState, useEffect, useMemo } from "react";
import useCustomRouter from "@/utils/router";
import { fetchMenu } from "@/utils/api";
import { CategoryOptions, ProductOptions } from "@/types/menu";
import { useRecoilValue } from "recoil";
import { OrderListState } from "@/store/orderListAtom";

import Header from "@/components/Header";
import CategoryNavigation from "@/components/menu/CategoryNavigation";
import ProductList from "@/components/menu/ProductList";
import ButtonComponent from "@/components/ButtonComponent";

const Menu = () => {
  const [menu, setMenu] = useState<Array<CategoryOptions>>([]);
  const [categoryId, setCategoryId] = useState<string>("");
  const [productList, setProductList] = useState<Array<ProductOptions>>([]);
  const orderList = useRecoilValue(OrderListState);
  const { navigate } = useCustomRouter();

  const goCartPage = (): void => {
    navigate("/cart");
  };

  async function getMenu() {
    const data = await fetchMenu();
    setMenu(data.result);
  }

  const handleCategoryType = (id: string) => {
    setCategoryId(id);
  };

  const handleProductList = () => {
    const list = menu.find(
      (data: { categoryId: string }) => data.categoryId === categoryId
    );

    if (list) {
      setProductList(list.productList);
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  useEffect(() => {
    if (menu.length > 0) {
      handleCategoryType(menu[0].categoryId);
    }
  }, [menu]);

  useEffect(() => {
    handleProductList();
  }, [categoryId]);

  // 주문 목록이 변경될때만 재렌더링 하기 위한 메모이제이션 처리
  const OrderCountChip = useMemo(() => {
    const countOrders = (): number => {
      return orderList.reduce((acc, item) => acc + item.quantity, 0);
    };

    const orderCount = countOrders();
    return () => (
      <>
        {orderCount > 0 && (
          <div className="absolute right-0 top-[-16px] w-8 h-8 text-center rounded-full bg-gray-300 text-white leading-[32px] count-chip">
            {orderCount}
          </div>
        )}
      </>
    );
  }, [orderList]);

  return (
    <div className="px-4 min-h-screen">
      <Header></Header>
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
          handleClick={goCartPage}
        >
          <OrderCountChip></OrderCountChip>
        </ButtonComponent>
      </div>
    </div>
  );
};

export default Menu;
