import React from 'react';
import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import Header from '../../Components/header';
import Footer from '../../Components/footer';


export default function Educational() {
  const [selectedSection, setSelectedSection] = useState('articles');
  const [dataSelected, setDataSelected] = useState();


  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('http://localhost:5500/educational_resources').then((res) =>
        res.json(),
      ),
  });


  const handleSectionClick = (section) => {
    setSelectedSection(section);
    const filtered = data.filter((ele) => ele.type === section);
    setDataSelected(filtered)

  };

  const getClassNames = (section) => {
    return selectedSection === section ? 'active' : '';
  };

  if (error) {
    return <div className='404'></div>
  }

  return (
    <div className="educational">

      <div className='educational-hero center-h'>
        <Header />

        <div className='container'>
          <div className='educational-hero-heading'>
            <h1 className='h1-hero-aria'>Educational Resources</h1>
            <p>Explore our library of articles, videos, and interactive tools to learn more about environmental protection, climate science, and sustainable living practices. Whether you're a student, educator, or concerned citizen, our resources are designed to inform, inspire, and empower you to make a difference in the world.</p>
          </div>
          <div className={`edu-container ${getClassNames(selectedSection)}`}>
            <div className='edu-links'>
              <button onClick={() => handleSectionClick('article')} className={"edu-link " + getClassNames('article')}>Articles</button>
              <button onClick={() => handleSectionClick('book')} className={"edu-link " + getClassNames('book')}>Books</button>
              <button onClick={() => handleSectionClick('documentary')} className={"edu-link " + getClassNames('documentary')}>Documentaries</button>
            </div>
          </div>
          <Ressource path={selectedSection} data={dataSelected} />
        </div>
      </div>
      <Footer />

    </div>
  )
}

const Ressource = ({ path, data }) => {

  switch (path) {
    case 'article':
      return (
        <div className="edu-content">
          <div className="articles">
            <div className="articles-list">
              {data && data.map(resource => {

                return (
                  <div key={resource.id} className="article-item">
                    <div className="article-item-cover">
                      <img src="" alt="Article cover" className="article-item-cover-img" />
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
              {data && data.map(resource => {
                return (
                  <div key={resource.id} className="book-item">
                    <div className="book-item-cover">
                      <img src="" alt="Book cover" className="book-item-cover-img" />
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
              {data && data.map(resource => {

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
