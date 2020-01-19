import React from 'react';
import {Banner} from "../components/banner/banner";
import {RsvpForm} from "../components/rsvp/rsvpForm";

export default function rsvp() {
    return (
        <main>
            <Banner image="/static/images/banner-image.jpg" title="R.S.V.P"/>
            <RsvpForm/>
        </main>
    );
}