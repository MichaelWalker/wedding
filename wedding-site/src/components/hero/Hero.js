import React from 'react';
import "./Hero.scss";

export default function Hero() {
    return (
        <div className="hero">
            <div className="overlay"/>
            <div className="content">
                <h1 className="title">Rebecca & Michael</h1>
                <div className="date">21st March 2020</div>
                <div className="location">Sefton Park, Liverpool</div>
            </div>
        </div>
    );
}