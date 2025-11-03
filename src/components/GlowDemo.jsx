import { useState } from 'react';
import './GlowDemo.css';

const GlowDemo = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div className="glow-container" onMouseMove={handleMouseMove}>
      {/* Background gradient orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>
      
      {/* Interactive glow that follows mouse */}
      <div 
        className="mouse-glow"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`
        }}
      ></div>

      {/* Glassmorphism card */}
      <div className="glass-card">
        <h1 className="glow-text">Ethereal Glow</h1>
        <p className="subtitle">Pure CSS Gaussian Blur & Glow Effects</p>
        
        <div className="feature-grid">
          <div className="feature-item">
            <div className="feature-icon pulse-glow"></div>
            <span>Pulsing Glow</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon blur-glow"></div>
            <span>Blur Effect</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon rainbow-glow"></div>
            <span>Rainbow Glow</span>
          </div>
        </div>

        <button className="glow-button">Experience the Magic</button>
      </div>

      {/* Floating particles */}
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
    </div>
  );
};

export default GlowDemo;
