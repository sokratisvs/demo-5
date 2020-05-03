import React, { Component } from "react";
import FormErrors from './FormErrors';
import { FORM_SUBTITLE } from '../../constants';
import './ContactForm.css';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            email: '',
            password: '',
            formErrors: { email: '', password: '', phone: '' },
            phoneValid: false,
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
    }

    validateField(e) {
        e.preventDefault();
        const { phone, email, password, emailValid, phoneValid, passwordValid, formErrors } = this.state;
        let fieldValidationErrors = formErrors;
        let isPhoneValid = phoneValid;
        let isEmailValid = emailValid;
        let isPasswordValid = passwordValid;
        // Validate phone
        isPhoneValid = phone.match(/^((06)|(07))[0-9]{10,12}$/i);
        console.log('isPhoneValid', isPhoneValid)
        fieldValidationErrors.phone = isPhoneValid ? '' : ' is invalid';
        // validate email
        isEmailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        console.log('isEmailValid', isEmailValid)
        fieldValidationErrors.email = isEmailValid ? '' : ' is invalid';
        // validate password
        isPasswordValid = password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
        console.log('isPasswordValid', isPasswordValid)
        fieldValidationErrors.password = isPasswordValid ? '' : "More than 8 digits & at least: 1 number, 1 capital letter, 1 symbol and 1 low case letter";

        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: isEmailValid,
            passwordValid: isPasswordValid,
            phoneValid: isPhoneValid,
        }, this.validateForm);
    }

    validateForm() {
        const { emailValid, passwordValid, phoneValid, formValid } = this.state;
        this.setState({ formValid: emailValid && passwordValid && phoneValid });
        if (!formValid) return false;
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }
    render() {
        const { content } = this.props;
        const { phone, email, password, formValid, formErrors } = this.state;
        return (
            <form className='form' method='POST'>
                <div className='form-title'>{content.formText}</div>
                <div className='form-subtitle'>{FORM_SUBTITLE}</div>
                <div className="validation">
                    <FormErrors formErrors={formErrors} />
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        className='form-control'
                        name='phone'
                        placeholder={content.formLabels[0]}
                        value={phone}
                        onChange={(e) => this.handleUserInput(e)}
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='email'
                        className='form-control'
                        name='email'
                        placeholder={content.formLabels[1]}
                        value={email}
                        onChange={(e) => this.handleUserInput(e)}
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='password'
                        className='form-control'
                        name='password'
                        placeholder={content.formLabels[2]}
                        value={password}
                        onChange={(e) => this.handleUserInput(e)}
                    />
                </div>
                <button type='submit' className='submit-button' onClick={(e) => this.validateField(e)}>
                    Submit
       </button>
            </form>
        )
    }
}

export default ContactForm;