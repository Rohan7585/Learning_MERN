const NewsCard = ({ article }) => {
    return (
      <div>
        {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
        <div>
          <div>{article.title}</div>
          <p>
            {article.description}
          </p>
        </div>
  <div>
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Read more
          </a>
        </div>
      </div>
    );
  };
  
  export default NewsCard;