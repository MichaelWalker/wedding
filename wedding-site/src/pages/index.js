import React from "react"
import { Hero } from "../components/hero/Hero";
import "../styles/reset.scss";
import {Introduction} from "../components/introduction/Introduction";

function IndexPage() {
    return (
        <main>
            <Hero/>
            <Introduction/>
        </main>
    );
}

export default IndexPage
