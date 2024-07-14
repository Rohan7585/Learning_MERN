import { useEffect, useState } from 'react';
import NewsList from './NewsList';

const App = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = 'YOUR_NEWS_API_KEY'; 

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=0f3175aef5d04f0895880f48efe229ad");
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error("Error fetching the news: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [apiKey]);

  return (
    <div className="App p-4">
      <h1 className="text-4xl font-bold mb-4">Top Headlines</h1>
      {loading ? <p>Loading...</p> : <NewsList news={news} />}
    </div>
  );
};

export default App;