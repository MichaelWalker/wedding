import React from "react"
import { Hero } from "../components/hero/Hero";
import "../styles/reset.scss";
import {Introduction} from "../components/introduction/Introduction";
import {Footer} from "../components/footer/Footer";
import {Venue} from "../components/venue/venue";
import {Travel} from "../components/travel/travel";
import {Schedule} from "../components/schedule/schedule";

function IndexPage() {
    return (
        <main>
            <Hero/>
            <Introduction/>
            <Schedule/>
            <Venue/>
            <Travel/>
            <Footer/>
        </main>
    );
}

export default IndexPage
