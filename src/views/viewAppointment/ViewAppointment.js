import { CBadge, CCard, CCardBody, CCardHeader, CCol, CDataTable, CRow } from '@coreui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import CIcon from '@coreui/icons-react';

const getBadge = status => {
    switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: return 'primary'
    }
}

const fields = ['question', 'answer', 'status', 'action(s)']
const data = [
    {
        id: 1,
        question: "What is your name?",
        answer: "Harshit Kishor",
        status: "Active"
    }
]

const ViewAppointment = () => {
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
                                'status':
                                    (item) => (
                                        <td>
                                            <CBadge color={getBadge(item.status)}>
                                                {item.status}
                                            </CBadge>
                                        </td>
                                    ),
                                'action(s)': (item) => (
                                    <td>
                                        <Link
                                            className='mr-2'
                                            to={`/help/${item.id}/edit`}
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
