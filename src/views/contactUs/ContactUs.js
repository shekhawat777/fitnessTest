import React from 'react'
import axios from 'axios';
import ContactUsView from './ContactUsView';

const ContactUs = () => {

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        mobile: '',
        message: '',
    }


    const onFormSubmit = async (values, { resetForm }) => {
        await axios.post("http://localhost:3500/contactUs", values).then(res => {
            resetForm()
        })
    }
    return (
        <>
            <ContactUsView initialValues={initialValues} onFormSubmit={onFormSubmit} />
        </>
    )
}

export default ContactUs
