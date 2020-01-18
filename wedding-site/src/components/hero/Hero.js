import React from 'react';
import "./Hero.scss";
import {LinkButton} from "../button/Button";

export function Hero() {
    return (
        <section className="hero">
            <div className="overlay"/>
            <div className="content">
                <h1 className="title">Rebecca & Michael</h1>
                <div className="date">21st March 2020</div>
                <div className="location">Sefton Park, Liverpool</div>
            </div>
            <div className="buttonContainer">
                <LinkButton href="/rsvp">R.S.V.P</LinkButton>
            </div>
        </section>
    );
}