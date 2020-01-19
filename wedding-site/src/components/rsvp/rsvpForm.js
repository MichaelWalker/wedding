import React from "react";
import {Section} from "../section/Section";

export function RsvpForm() {
    function onSubmit(event) {
        event.preventDefault();
        console.log("submitted the event!")
    }

    return (
        <Section>
            <form onSubmit={onSubmit}>
                <label>Name:
                    <input type="text" name="name"/>
                </label>

                <label>Attending:
                    <input type="checkbox" name="attending"/>
                </label>

                <label>Dietary Requirements:
                    <textarea name="dietaryRequirements"/>
                </label>

                <button type="submit">Submit</button>
            </form>
        </Section>
    );
}