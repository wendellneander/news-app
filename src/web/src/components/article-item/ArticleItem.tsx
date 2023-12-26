import Article from "../../types/article";
import "./ArticleItem.css";

const ArticleItem = (article: Article) => {
  const contentText =
    article.content.length > 150
      ? `${article.content.substring(0, 150)}...`
      : article.content;
  return (
    <div key={article.id} className="article-card">
      <a href={`/article/${article.url}`}>
        <h2 className="article-title">{article.title}</h2>
        <p className="article-content">{contentText}</p>
        <div className="article-footer">
          <p>
            {article.author.name} - {article.createdAt}
          </p>
        </div>
      </a>
    </div>
  );
};

export default ArticleItem;
