import React from 'react';
import './FormErrors.css';

const FormErrors = ({ formErrors }) =>
    <div className='form-errors'>
        {Object.keys(formErrors).map((fieldName, i) => {
            if (formErrors[fieldName].length > 0) {
                return (
                    <p key={i}>{fieldName} {formErrors[fieldName]}</p>
                )
            } else {
                return '';
            }
        })}
    </div>

export default FormErrors;