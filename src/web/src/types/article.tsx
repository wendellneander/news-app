import Author from "./author";
import Category from "./category";

export default interface Article {
  id: number;
  title: string;
  content: string;
  slug: string;
  author: Author;
  category: Category;
  createdAt: string;
}
