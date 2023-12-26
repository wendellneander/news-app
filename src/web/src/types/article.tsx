import Author from "./author";
import Category from "./category";

export default interface Article {
  id: number;
  title: string;
  content: string;
  url: string;
  author: Author;
  category: Category;
  createdAt: string;
}
