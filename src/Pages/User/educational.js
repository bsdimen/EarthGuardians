import React from 'react';
import  { useState, useEffect } from 'react';
import Ressource from './ressource.js';

const Educational = () => {
  const [data, setData] = useState([]);
  const [selectedSection, setSelectedSection] = useState('articles');

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

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const getClassNames = (section) => {
    return selectedSection === section ? 'active' : '';
  };

  return (
    <div className="educational">
      <div className='edu-content'>
        <h1>Educational Resources</h1>
        <p>Explore our library of articles, videos, and interactive tools to learn more about environmental protection, climate science, and sustainable living practices. Whether you're a student, educator, or concerned citizen, our resources are designed to inform, inspire, and empower you to make a difference in the world.</p>
      </div>
      <div className={`edu-container ${getClassNames(selectedSection)}`}>
        <div className='edu-links'>
          <button onClick={() => handleSectionClick('article')} className= {"edu-link "+ getClassNames('article')}>Articles</button>
          <button onClick={() => handleSectionClick('book')} className={"edu-link "+ getClassNames('book')}>Books</button>
          <button onClick={() => handleSectionClick('documentary')} className={"edu-link "+ getClassNames('documentary')}>Documentaries</button>
        </div>
    </div>
    <Ressource path={selectedSection}  data={data} />
    </div>
  )
 } 


export default Educational;
