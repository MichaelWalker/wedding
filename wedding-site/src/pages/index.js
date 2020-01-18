import React from "react"
import { Hero } from "../components/hero/Hero";
import "../styles/reset.scss";
import {Introduction} from "../components/introduction/Introduction";
import {Footer} from "../components/footer/Footer";
import {Venue} from "../components/venue/venue";

function IndexPage() {
    return (
        <main>
            <Hero/>
            <Introduction/>
            <Venue/>
            <Footer/>
        </main>
    );
}

export default IndexPage
