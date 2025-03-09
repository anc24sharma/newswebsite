import React from 'react';
import "../css/About.css";

const About = () => {
  return (
    <div className='about-container' id='about'>
        <div className='news-section'>
            <h1><span>Breaking news </span>from around the world</h1>
            <p>Get real-time updates on global events with our comprehensive news coverage powered by NewsBIT</p>
            <button className='read-more'>Read the full story</button>
        </div>
        <div className='news-placeholder'>
        <h3>getting recent updates....</h3>
        </div>
    </div>
  )
}

export default About
