import React from 'react'
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
        trainerPreferences: '',
        physioRequired: '',
        weeks: 1,
        package: '',
        totalAmount: 0
    }

    const onFormSubmit = async (values) => {
        console.log("Values", values)
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
