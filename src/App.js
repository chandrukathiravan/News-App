import { useEffect, useState } from 'react';
import './App.css';
import News from './News';

function App() {

  let [articles,setArticles]=useState([]);
  let [category,setCategory]=useState("india");

  useEffect(()=>{
    fetch(`https://newsapi.org/v2/everything?q=${category}&apiKey=bdd85715e23b49688a760da8a322990b`)
    .then((response)=>response.json())
    .then((news)=>{
      setArticles(news.articles);
      console.log(news.articles);
    })
    .catch((err)=>{console.log(err);})
  },[category])


  return (
    <div className="App">
      <header className='header'>
      <h1>YOUR NEWS</h1>
      <input type="text" onChange={(event)=>{
        if(event.target.value!==""){
          setCategory(event.target.value);
        }
        else{
          setCategory("india");
        }
      }}placeholder='Search News'></input>
      </header>
      <section className='news-articles'>
        {
          articles.length!==0?
          articles.map((article)=>{
            return(
              <News article={article}></News>
            )
          })
          :
          <h3>NO NEWS FOUND</h3>
        }
      </section>
    </div>
  );
}

export default App;
