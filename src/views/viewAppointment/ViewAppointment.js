import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ViewAppointmentView from './ViewAppointmentView';


const ViewAppointment = () => {

    const [data, setData] = useState([])
    const fields = ['firstName', 'lastName', 'email', 'mobile', 'age', 'streetName', 'city', 'state', 'country', 'pinCode', 'preferences', 'package', 'action(s)']

    useEffect(() => {
        const fetchData = async () => {
            await axios.get("http://localhost:3500/allfriends").then(res => {
                console.log("Res,", res)
                setData(res.data)
            })
        }
        fetchData()
    }, [])

    return (
        <ViewAppointmentView data={data} fields={fields} />
    )
}

export default ViewAppointment
