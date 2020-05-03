import React from "react";
import Services from '../Services/Services';
import ContactForm from '../ContactForm/ContactForm';
import "./FormContent.css";

const FormContent = (props) => {
    const { content } = props;

    return (
        <div className="form-content">
            <Services content={content} />
            <ContactForm content={content} />
        </div>
    );
};

export default FormContent;