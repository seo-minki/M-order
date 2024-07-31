"use client";

import { CategoryOptions } from "@/types/menu";

interface Props {
  categoryList: CategoryOptions[];
  selectId: string;
  handleCategory: (id: string) => void;
}

const CategoryNavigation = ({
  categoryList,
  selectId,
  handleCategory,
}: Props) => {
  return (
    <nav>
      <ul className="flex items-center border-b border-slate-300 overflow-x-auto">
        {categoryList.map((category, index) => (
          <li
            className={`py-5 px-6 min-w-fit text-center text-m rounded-t-lg transition-colors cursor-pointer ${
              selectId === category.categoryId
                ? "bg-blue text-white font-bold"
                : "bg-white"
            }`}
            key={index}
            onClick={() => handleCategory(category.categoryId)}
          >
            {category.categoryName}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoryNavigation;
