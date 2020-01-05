import React from 'react';
import {Section} from "../section/Section";
import './Introduction.scss';

export function Introduction() {
    return (
        <Section className="introduction" title="Welcome">
            <p>
                Mike and Rebecca and delighted to invite you to our wedding.
            </p>
            <p>
                We hope that you will be able to join us at the Palm House in Sefton Park, Liverpool from 2pm on
                Saturday the 21st March 2020.
            </p>
        </Section>
    );
}