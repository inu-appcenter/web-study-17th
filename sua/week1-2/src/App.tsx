import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';  // CSS 파일을 import 합니다.

// 뉴스 API를 사용하기 위한 타입
interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

const App: React.FC = () => {
  // 뉴스 데이터를 저장할 state
  const [articles, setArticles] = useState<Article[]>([]);
  // 로딩 상태 관리
  const [loading, setLoading] = useState<boolean>(true);
  // 에러 상태 관리
  const [error, setError] = useState<string | null>(null);

  // API 호출
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = '41ce09aac61345d2bbdac9e60a3deed8';  // 실제 API 키로 교체
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
        setArticles(response.data.articles);
      } catch {
        setError('Failed to fetch news');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h1>Latest News</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="news-container">
        {articles.length === 0 ? (
          <p>No news available</p>
        ) : (
          articles.map((article, index) => (
            <div key={index} className="news-item">
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="image"
                />
              )}
              <h3><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a></h3>
              <p>{article.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
