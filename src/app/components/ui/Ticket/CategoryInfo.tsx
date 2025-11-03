import type { Category } from "@/app/types/ticket";
type CategoryProps = {
  category: Category;
};

const CategoryInfo: React.FC<CategoryProps> = ({ category }) => {
  return <span>{category.name}</span>;
};

export default CategoryInfo;
