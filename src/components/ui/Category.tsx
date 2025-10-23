import type { TCategory } from "@/types";

type CategoryProps = {
  category: TCategory;
};

const Category: React.FC<CategoryProps> = ({ category }) => {
  return <span>{category.name}</span>;
};

export default Category;
