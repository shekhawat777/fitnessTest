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
import * as Yup from "yup";
import ErrorLable from '../../reusable/ErrorLable';
import axios from 'axios';

const CreateAppointment = () => {

    const onFormSubmit = async (values, { resetForm }) => {
        console.log("Test Value", values)
        await axios.post("http://localhost:3500/allfriends", values).then(res => {
            resetForm()
        })
    }
    return (
        <>
            <CRow>
                <CCol>
                    <CCard>
                        <CCardHeader>
                            Place Appointment
                        </CCardHeader>
                        <CCardBody>
                            <Formik
                                initialValues={{
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
                                }}
                                onSubmit={onFormSubmit}
                                validationSchema={Yup.object({
                                    firstName: Yup.string().required("First name requiered.").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field. "),
                                    lastName: Yup.string().required("Last name requiered.").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field. "),
                                    email: Yup.string().email("Invalid email.").required("Email requiered."),
                                    mobile: Yup.string().required("Mobile Number requiered."),
                                    age: Yup.number().required("Age requiered.").min(19, "Age must be greater than 18.").max(59, "Age must be less than 60."),
                                    streetName: Yup.string().required("Street name requiered."),
                                    country: Yup.string().required("Country requiered."),
                                    city: Yup.string().required("City requiered."),
                                    state: Yup.string().required("State requiered."),
                                    pinCode: Yup.string().required("Pincode requiered.").matches(/^[0-9]+$/, "Only numbers are allowed for this field.").length(6, "Pinocde should be 6 digits"),
                                    preferences: Yup.string().required("Preferences requiered."),
                                    package: Yup.string().required("Package requiered."),
                                })}
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

        </>
    )
}


export default CreateAppointment
