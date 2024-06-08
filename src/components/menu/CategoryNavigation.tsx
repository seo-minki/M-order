"use client";

import { CategoryOptions } from "@/types/menu";

interface Props {
  categoryList: Array<CategoryOptions>
  selectId: string,
  handleCategory: (id: string) => void
}

const CategoryNavigation = ({categoryList, selectId, handleCategory} : Props) => {
  
  return (
    <nav>
      <ul className="flex items-center border-b border-slate-300">
        {categoryList.map((category, index) => (
          <li className={`py-5 w-1/6 text-center text-m rounded-t-lg transition-colors cursor-pointer ${selectId === category.categoryId ? "bg-blue text-white font-bold" : "bg-white"}`}
            key={index} onClick={() => handleCategory(category.categoryId)}>
            {category.categoryName}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default CategoryNavigation;