import React from 'react';
import './Sections.css';

const Hero: React.FC = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h1 className="hero-title"><span>Keys</span> <span><span className="bounce-char">B</span>ar</span></h1>
                <p className="hero-subtitle">
                    La nostra, la vostra storia in ogni incontro, in ogni sorso ed assaggio.
                </p>
                <a href="#menu" className="btn btn-primary">
                    Scopri il Menu
                </a>
            </div>
        </section>
    );
};

export default Hero;
