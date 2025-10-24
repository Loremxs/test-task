import type { TCategory } from "@/app/types/types";

type CategoryProps = {
  category: TCategory;
};

const Category: React.FC<CategoryProps> = ({ category }) => {
  return <span>{category.name}</span>;
};

export default Category;
