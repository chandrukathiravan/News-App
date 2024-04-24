import { useEffect, useState } from 'react';
import News from './News';

export function App() {

  let [articles, setArticles] = useState([]);
  let [category, setCategory] = useState("india");

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=&apiKey=bdd85715e23b49688a760da8a322990b')
      .then((response) => response.json())
      .then((news) => {
        setArticles(news.articles);
        console.log(news.articles);
      })
      .catch((err) => { console.log(err); });
  }, [category]);


  return (
    <div className="App">
      <header className='header'>
        <h1>YOUR NEWS</h1>
        <input type="text" onChange={(event) => {
          if (event.target.value !== "") {
            setCategory(event.target.value);
          }
          else {
            setCategory("india");
          }
        }} placeholder='Search News'></input>
      </header>
      <section className='news-articles'>
        {articles.map((article) => {
          return (
            <News article={article}></News>
          );
        })}
      </section>
    </div>
  );
}
