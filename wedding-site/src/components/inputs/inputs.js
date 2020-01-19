import React from 'react';
import './inputs.scss';
import PropTypes from 'prop-types';

function TextField(props) {
    return (
        <Field label={props.label}>
            <input className="text-input" type="text" name={props.name}/>
        </Field>
    );
}

function CheckboxField(props) {
    return (
        <Field label={props.label}>
            <input className="checkbox-input" type="checkbox" name={props.name}/>
        </Field>
    );
}

function TextAreaField(props) {
    return (
        <Field label={props.label}>
            <textarea className="textarea-input" name={props.name}/>
        </Field>
    );
}

function Field(props) {
    return (
        <label className="label">{props.label}:
            {props.children}
        </label>
    );
}

Field.propTypes = {
    label: PropTypes.string.isRequired,
};

TextField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

CheckboxField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

TextAreaField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export {
    TextField,
    CheckboxField,
    TextAreaField,
}