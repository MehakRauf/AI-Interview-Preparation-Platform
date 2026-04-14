import React from 'react';
import { APP_FEATURES } from '../utils/APP_FEATURES';
import hero_image from '../assets/hero_image.jpg';
import { LuSparkle } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  }

  return (
    <div className="landing-container">
      <div className='header'>
        <h1>AI Interview Preparation Platform</h1>
        <button className='h-button' onClick={handleClick}>Login/SignUp</button>
      </div>
      <div className="hero">

        <div className="hero-text">
          <div>
            <div className='heading-container'>
              <div className='heading'>
                <button className='ai-button'><LuSparkle />AI Powered</button>
                <h3>Ace Interviews With
                  <span> AI-Powered</span> Learning</h3>
              </div>
              <div>
                <p>
                  Get role-specific questions, expand answers when you need time,
                  dive deeper into concepts, and organize everything your way.
                  From preparation to mastery - your ultimate interview toolkit is here.
                  Plus, analyze your resume with AI-powered feedback to improve it,
                  identify skill gaps, and optimize it for better job opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src={hero_image} alt="" />
        </div>

      </div>


      <div className="features">
        <h2>Features That Make You Shine</h2>

        <div className="feature-grid">
          {APP_FEATURES.slice(0, 3).map((data) => (
            <div className="feature-card" id={data.id}>
              <h3>{data.title}</h3>
              <p>{data.description}</p>
            </div>
          ))}
        </div>

        <div className="feature-grid">
          {APP_FEATURES.slice(3).map((data) => (
            <div className="feature-card" id={data.id}>
              <h3>{data.title}</h3>
              <p>{data.description}</p>
            </div>
          ))}
        </div>
      </div>

    </div>

  )
}

export default LandingPage
