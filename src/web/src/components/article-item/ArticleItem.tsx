import "./ArticleItem.css";

interface ArticleItemProps {
  id: number;
  title: string;
  content: string;
  url: string;
  author: string;
  createdAt: string;
}

const ArticleItem = (props: ArticleItemProps) => {
  return (
    <div key={props.id} className="article-card">
      <a href={`/article/${props.url}`}>
        <h2 className="article-title">{props.title}</h2>
        <p className="article-content">{props.content}</p>
        <div className="article-footer">
          <p>
            {props.author} - {props.createdAt}
          </p>
        </div>
      </a>
    </div>
  );
};

export default ArticleItem;
