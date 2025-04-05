import React from 'react';
//import './NewsItem.css';

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

const NewsItem: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <div className="news-item">
      {article.urlToImage && (
        <img src={article.urlToImage} alt={article.title} className="image" />
      )}
      <h3>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          {article.title}
        </a>
      </h3>
      <p>{article.description}</p>
    </div>
  );
};

export default NewsItem;
