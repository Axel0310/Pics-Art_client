import React from "react";
import "../styles/welcomePage.css";
import { Link } from 'react-router-dom';

export default function WelcomePage() {
  return (
    <div className="welcome-page">
        <div className="auth-menu">
            <Link to="/auth/signin">Sign in</Link>
            <span className="separator">|</span>
            <Link to="/auth/signup">Sign up</Link>
        </div>
      <div className="intro-wrapper">
        <h1 className="title">Pics-Art</h1>
        <p>
          A not-so-innovative social media to share pictures with your friends !
        </p>
      </div>
    </div>
  );
}
