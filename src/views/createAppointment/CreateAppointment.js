import React from 'react'

import axios from 'axios';
import CreateAppointmentView from './CreateAppointmentView';

const CreateAppointment = () => {
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        mobile: '',
        age: "",
        streetName: '',
        city: '',
        state: '',
        country: '',
        pinCode: '',
        preferences: '',
        package: '',
    }

    const onFormSubmit = async (values, { resetForm }) => {
        console.log("Test Value", values)
        await axios.post("http://localhost:3500/allfriends", values).then(res => {
            resetForm()
        })
    }
    return (
        <>
            <CreateAppointmentView
                initialValues={initialValues}
                onFormSubmit={onFormSubmit}
            />
        </>
    )
}


export default CreateAppointment
