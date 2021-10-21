import React from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CInput,
    CLabel,
    CRow,
} from '@coreui/react'

import { Formik, ErrorMessage } from "formik";
import ErrorLable from '../../reusable/ErrorLable';
import createAppointmentValidationSchema from './createAppointmentValidationSchema';

const CreateAppointmentView = ({ onFormSubmit, initialValues }) => {

    return (
        <CRow>
            <CCol>
                <CCard>
                    <CCardHeader>
                        Place Appointment
                    </CCardHeader>
                    <CCardBody>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={onFormSubmit}
                            validationSchema={createAppointmentValidationSchema}
                        >
                            {formik => (
                                <CForm autoComplete="Off" onSubmit={formik.handleSubmit}>
                                    <CFormGroup row className="my-0">
                                        <CCol xs="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="firstName">First Name</CLabel>
                                                <CInput id="firstName" placeholder="Enter first name" {...formik.getFieldProps('firstName')} />
                                                <ErrorMessage name="firstName" render={msg => <ErrorLable msg={msg} />} />
                                            </CFormGroup>
                                        </CCol>
                                        <CCol xs="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="lastName">Last Name</CLabel>
                                                <CInput id="lastName" placeholder="Enter last name" name="lastName" {...formik.getFieldProps('lastName')} />
                                                <ErrorMessage name="lastName" render={msg => <ErrorLable msg={msg} />} />
                                            </CFormGroup>
                                        </CCol>
                                    </CFormGroup>
                                    <CFormGroup row className="my-0">
                                        <CCol xs="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="email">Email</CLabel>
                                                <CInput id="email" placeholder="Enter Email" name="email" {...formik.getFieldProps('email')} />
                                                <ErrorMessage name="email" render={msg => <ErrorLable msg={msg} />} />
                                            </CFormGroup>
                                        </CCol>
                                        <CCol xs="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="mobile">Mobile</CLabel>
                                                <CInput id="mobile" placeholder="Enter Mobile No" name="mobile" {...formik.getFieldProps('mobile')} />
                                                <ErrorMessage name="mobile" render={msg => <ErrorLable msg={msg} />} />
                                            </CFormGroup>
                                        </CCol>
                                    </CFormGroup>
                                    <CFormGroup row className="my-0">
                                        <CCol xs="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="age">Age</CLabel>
                                                <CInput id="age" placeholder="Enter Age" name="age" {...formik.getFieldProps('age')} />
                                                <ErrorMessage name="age" render={msg => <ErrorLable msg={msg} />} />
                                            </CFormGroup>
                                        </CCol>
                                        <CCol xs="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="streetName">Street Name</CLabel>
                                                <CInput id="streetName" placeholder="Enter Street Name" name="streetName" {...formik.getFieldProps('streetName')} />
                                                <ErrorMessage name="streetName" render={msg => <ErrorLable msg={msg} />} />
                                            </CFormGroup>
                                        </CCol>
                                    </CFormGroup>
                                    <CFormGroup row className="my-0">
                                        <CCol xs="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="city">City</CLabel>
                                                <CInput id="city" placeholder="Enter city" name="city" {...formik.getFieldProps('city')} />
                                                <ErrorMessage name="city" render={msg => <ErrorLable msg={msg} />} />
                                            </CFormGroup>
                                        </CCol>
                                        <CCol xs="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="state">State</CLabel>
                                                <CInput id="state" placeholder="Enter State" name="state" {...formik.getFieldProps('state')} />
                                                <ErrorMessage name="state" render={msg => <ErrorLable msg={msg} />} />
                                            </CFormGroup>
                                        </CCol>
                                    </CFormGroup>
                                    <CFormGroup row className="my-0">
                                        <CCol xs="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="country">Country</CLabel>
                                                <CInput id="country" placeholder="Enter country" name="country" {...formik.getFieldProps('country')} />
                                                <ErrorMessage name="country" render={msg => <ErrorLable msg={msg} />} />
                                            </CFormGroup>
                                        </CCol>
                                        <CCol xs="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="pinCode">Pin Code</CLabel>
                                                <CInput id="pinCode" placeholder="Enter Pin Code" name="pinCode" {...formik.getFieldProps('pinCode')} />
                                                <ErrorMessage name="pinCode" render={msg => <ErrorLable msg={msg} />} />
                                            </CFormGroup>
                                        </CCol>
                                    </CFormGroup>
                                    <CFormGroup row className="my-0">
                                        <CCol xs="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="preferences">Preferences</CLabel>
                                                <CInput id="preferences" placeholder="Select Preferences" name="preferences" {...formik.getFieldProps('preferences')} />
                                                <ErrorMessage name="preferences" render={msg => <ErrorLable msg={msg} />} />
                                            </CFormGroup>
                                        </CCol>
                                        <CCol xs="6">
                                            <CFormGroup>
                                                <CLabel htmlFor="package">Package</CLabel>
                                                <CInput id="package" placeholder="Select Package" name="package" {...formik.getFieldProps('package')} />
                                                <ErrorMessage name="package" render={msg => <ErrorLable msg={msg} />} />
                                            </CFormGroup>
                                        </CCol>
                                    </CFormGroup>

                                    <CButton type="submit" color="primary">Submit</CButton>
                                </CForm>
                            )}
                        </Formik>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow >
    )
}

export default CreateAppointmentView
