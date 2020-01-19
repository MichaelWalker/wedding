import React from "react";
import {Section} from "../section/Section";
import {CheckboxField, TextAreaField, TextField} from "../inputs/inputs";
import {SubmitButton} from "../button/Button";

export function RsvpForm() {
    function onSubmit(event) {
        event.preventDefault();
        console.log("submitted the event!")
    }

    return (
        <Section>
            <form onSubmit={onSubmit}>
                <TextField name="name" label="Name"/>
                <CheckboxField name="attending" label="Attending"/>
                <TextAreaField name="dietaryRequirements" label="Dietary Requirements"/>

                <SubmitButton>Submit</SubmitButton>
            </form>
        </Section>
    );
}