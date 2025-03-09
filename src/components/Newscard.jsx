
import "../css/NewsCard.css";

const NewsCard = ({ news }) => {
    return (
        <div className="news-card">
            <a href={news.url} target="_blank" rel="noopener noreferrer">
                <img 
                    src={news.urlToImage} 
                    alt={news.title} 
                    className="news-image" 
                />
                <div className="news-details">
                    <div className="news-meta">
                        <p className="news-date">{news.publishedAt?.slice(0, 10)}</p>
                        <p className="news-author">By: {news.author?.slice(0, 20) || "Unknown"}</p>
                    </div>
                    <h2 className="news-title">{news.title}</h2>
                    <p className="news-description">{news.description}</p>
                </div>
            </a>
        </div>
    );
};

export default NewsCard;