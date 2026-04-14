import React from 'react';
import { APP_FEATURES } from '../utils/APP_FEATURES';
import hero_image from '../assets/hero_image.jpg';

const LandingPage = () => {
  return (
   <div className="landing-container">

  <div className="hero">

    <div className="hero-text">
      <h1>AI Interview Preparation Platform</h1>
      <button>Login/SignUp</button>

      <button>AI Powered</button>
      <p>Ace Interviews with AI-Powered Learning</p>
      <p>...</p>
    </div>

    <div className="hero-image">
      <img src={hero_image} alt="" />
    </div>

  </div>

  <div className="features">
    <h2>Features That Make You Shine</h2>

    <div className="feature-grid">
      {APP_FEATURES.slice(0, 3).map((data) => (
        <div className="feature-card">
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </div>
      ))}
    </div>

    <div className="feature-grid">
      {APP_FEATURES.slice(3).map((data) => (
        <div className="feature-card">
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
