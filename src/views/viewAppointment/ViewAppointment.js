/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import ViewAppointmentView from './ViewAppointmentView';


const ViewAppointment = () => {

    const [data, setData] = useState([])
    const fields = ['S.No.', 'Name', 'email', 'phone', 'age', 'completeAddress', 'trainerPreferences', 'physioRequired', 'package', 'totalAmount']

    useEffect(() => {
        //fetch data here
    }, [])

    return (
        <ViewAppointmentView data={data} fields={fields} />
    )
}

export default ViewAppointment
