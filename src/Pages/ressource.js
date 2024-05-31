
import React from 'react';
import { useParams } from 'react-router-dom';
import article_cover_item from "../IMGS/articles-covers/article-cover-01.jpg";
import book_cover_item from "../IMGS/articles-covers/Book-cover-01.jpg";

const Ressource = ({ path, data }) => {
    console.log(data); // This should now log the data passed from Educational
    console.log(path); 
  
    // You can filter or process the data based on the path (selectedSection)
   const filteredData = data.filter(item => item.type == path);
   console.log(filteredData);
       switch (path) {
            case 'article':
            return (
                <div className="edu-content">
                <div className="articles">
                    <div className="articles-list">
                    {filteredData && filteredData.map(resource => {
                        
                        return (
                            <div key={resource.id} className="article-item">
                            <div className="article-item-cover">
                                <img src={article_cover_item} alt="Article cover" className="article-item-cover-img" />
                            </div>
                            <div className="article-item-content">
                                <h3>{resource.title}</h3>
                                <p>{resource.publication_date}</p>
                                <p>{resource.description}</p>
                                <p>Written by <span>{resource.author}</span></p>
                            </div>
                            </div>
                        );
                       
                    })}
                    </div>
                </div>
                </div>
            );
            case 'book':
            return (
                <div className="edu-content">
                <div className="books">
                    <div className="books-list">
                    {filteredData && filteredData.map(resource => {
                        return (
                            <div key={resource.id} className="book-item">
                            <div className="book-item-cover">
                                <img src={book_cover_item} alt="Book cover" className="book-item-cover-img" />
                            </div>
                            <div className="book-item-content">
                                <h5>{resource.title}</h5>
                                <p>By <span className='book-author'>{resource.author}</span></p>
                                <p className='book-date-pub'>{resource.publication_date}</p>
                                <button className='download-ress'>Download</button>
                            </div>
                            </div>
                        );
                        
                    })}
                    </div>
                </div>
                </div>
            );
            case 'documentary':
            return (
                <div className="edu-content">
                <div className="documentaries">
                    <div className="documentaries-list">
                    {filteredData && filteredData.map(resource => {
                      
                        return (
                            <div key={resource.id} className="documentary-item">
                            <div className="documentary-item-cover">
                                <img src={resource.image} alt="Documentary cover" className="documentary-item-cover-img" />
                            </div>
                            <div className="documentary-item-content">
                                <h3>{resource.title}</h3>
                                <p>{resource.release_date}</p>
                                <p>{resource.description}</p>
                                <p>Directed by <span>{resource.director}</span></p>
                            </div>
                            </div>
                        );
                       
                    })}
                    </div>
                </div>
                </div>
            );
            default:
            return null; // handle other types or return null
        }
           
}

export default Ressource;
