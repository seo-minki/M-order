"use client";

import { useState, useEffect } from "react";
import { fetchMenu } from "@/utils/api";
import Header from "@/components/Header";
import CategoryNavigation from "@/components/menu/CategoryNavigation";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [categoryId, setCategoryId] = useState<string>("");

  async function getMenu() {
    const data = await fetchMenu();
    setMenu(data.result);
  };

  const handleCategoryType = (id: string) => {
    setCategoryId(id);
  }

  useEffect(() => {
    getMenu();
  }, []);

  useEffect(() => {
    if(menu.length > 0) {
      handleCategoryType(menu[0].categoryId);
    }
  }, [menu]);

  return (
    <div>
      <Header></Header>
      <section className="relative my-[72px]">
        <CategoryNavigation categoryList={menu} selectId={categoryId} handleCategory={handleCategoryType}></CategoryNavigation>
      </section>
    </div>
  )
}

export default Menu;