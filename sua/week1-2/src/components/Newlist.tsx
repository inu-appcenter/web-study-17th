import React from 'react';
import NewsItem from './Newsitem';
//import './NewsList.css';

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

interface NewsListProps {
  articles: Article[];
  loading: boolean;
  error: string | null;
}

const NewsList: React.FC<NewsListProps> = ({ articles, loading, error }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (articles.length === 0) return <p>No news available</p>;

  return (
    <div className="news-container">
      {articles.map((article, index) => (
        <NewsItem key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
