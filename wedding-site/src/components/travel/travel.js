import React from 'react';
import {Section} from "../section/Section";
import './travel.scss';

export function Travel() {
    return (
        <Section className="travel" title="Getting there">
            <h3>By Car</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

            <h3>By Public Transport</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

            <h3>Taxis</h3>
            <div>
                <h4>Uber</h4>
            </div>
            <div>
                <h4>QQ Taxi Corp</h4>
            </div>
        </Section>
    );
}