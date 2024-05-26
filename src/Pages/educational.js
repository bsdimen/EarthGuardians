import React from 'react';
import  { useState, useEffect } from 'react';
import article_cover_item from "../IMGS/articles-covers/article-cover-01.jpg";

const Educational = () => {
  const [data, setData] = useState([]);
  const [type, setType] = useState('articles'); // Set default type

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/resources'); // Path to your JSON file
        console.log(response);
        const jsonData = await response.json();
        console.log('Fetched data:', jsonData);
        setData(jsonData);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  switch (type) {
    case 'articles':
      return (
        <div className="edu-content">
          <div className="articles">
            <div className="articles-list">
              {data && data.map(resource => {
                if (resource.type === "article") {
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
                } else {
                  return null; // return null if the type is not "article"
                }
              })}
            </div>
          </div>
        </div>
      );
    case 'books':
      return (
        <div className="edu-content">
          <div className="books">
            <div className="books-list">
              {data && data.map(resource => {
                if (resource.type === "book") {
                  return (
                    <div key={resource.id} className="book-item">
                      <div className="book-item-cover">
                        <img src={resource.image} alt="Book cover" className="book-item-cover-img" />
                      </div>
                      <div className="book-item-content">
                        <h3>{resource.title}</h3>
                        <p>{resource.publication_date}</p>
                        <p>{resource.description}</p>
                        <p>Written by <span>{resource.author}</span></p>
                      </div>
                    </div>
                  );
                } else {
                  return null; // return null if the type is not "book"
                }
              })}
            </div>
          </div>
        </div>
      );
    case 'documentaries':
      return (
        <div className="edu-content">
          <div className="documentaries">
            <div className="documentaries-list">
              {data && data.map(resource => {
                if (resource.type === "documentary") {
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
                } else {
                  return null; // return null if the type is not "documentary"
                }
              })}
            </div>
          </div>
        </div>
      );
    default:
      return null; // handle other types or return null
  }
};

export default Educational;
