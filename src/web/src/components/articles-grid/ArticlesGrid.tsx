import "./ArticlesGrid.css";
import ArticleItem from "../article-item";
import Article from "../../types/article";

interface ArticleProps {
  articles: Article[];
}

const ArticlesGrid = ({ articles }: ArticleProps) => {
  return (
    <div className="article-grid">
      {articles.map((article) => (
        <ArticleItem key={article.id} {...article} />
      ))}
    </div>
  );
};

export default ArticlesGrid;
