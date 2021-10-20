import { CCard, CCardBody, CCardHeader, CCol, CDataTable, CRow } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CIcon from '@coreui/icons-react';
import axios from 'axios';

const fields = ['firstName', 'lastName', 'email', 'mobile', 'age', 'streetName', 'city', 'state', 'country', 'pinCode', 'preferences', 'package', 'action(s)']

const ViewAppointment = () => {

    const [data, setData] = useState([])
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
        <CRow>
            <CCol>
                <CCard>
                    <CCardHeader>
                        View Appointment
                        {/* <Link to="/help/create">
                            <CButton color="primary" className="px-4" style={{ float: "right" }}>Add Help</CButton>
                        </Link> */}
                    </CCardHeader>
                    <CCardBody>
                        <CDataTable
                            items={data}
                            fields={fields}
                            tableFilter
                            sorter
                            itemsPerPageSelect={{ label: 'Items per page:', values: [10, 20, 30, 40, 50] }}
                            hover
                            striped
                            itemsPerPage={10}
                            pagination
                            scopedSlots={{
                                'action(s)': (item) => (
                                    <td>
                                        <Link
                                            className='mr-2'
                                            /*  to={`/edit-appointment/${item.id}`} */
                                            to='#'
                                            onClick={() => console.log("write a api for calling data by id")}
                                            title="Edit"
                                        >
                                            <CIcon name="cil-pencil" className="mfe-2" title="Edit" />
                                        </Link>
                                        <Link
                                            className='mr-2'
                                            to='#'
                                            onClick={() => console.log("write a api for deleting data by id")}
                                            title="Delete"
                                        >
                                            <CIcon name="cil-trash" className="mfe-2" title="Delete" />
                                        </Link>
                                    </td>
                                )

                            }}
                        />
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>

    )
}

export default ViewAppointment
