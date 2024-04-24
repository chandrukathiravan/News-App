function News(props)
{
    return(
        <div className="news">
            <div className="news-img">
                <img src={props.article.urlToImage} alt="No Image Availbale"></img>
            </div>
            <h1>{props.article.title}</h1>
            <h3>{props.article.description?.substring(0,100).concat("...")}<a href={props.article.url} target="_blank">Read More</a></h3>
            <div  className="source">
                <h4>Author: {props.article.author}</h4>
                <h4>{props.article.source.name}</h4>
            </div>
        
        </div>
    )
}

export default News;