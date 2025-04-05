import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import CategoryBar from './components/Categorybar';
import NewsList from './components/Newlist'

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

const App = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [category, setCategory] = useState('general');

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const apiKey = '41ce09aac61345d2bbdac9e60a3deed8';
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`
        );
        setArticles(response.data.articles);
      } catch {
        console.error(error);
        setError('Failed to fetch news');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div className="app-container">
      <h1>Latest News</h1>
      <CategoryBar selected={category} onSelectCategory={setCategory} />
      <NewsList articles={articles} loading={loading} error={error} />
    </div>
  );
};

export default App;
