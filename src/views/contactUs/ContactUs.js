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
import { Link } from 'react-router-dom';
import * as Yup from "yup";
import ErrorLable from '../../reusable/ErrorLable';

const ContactUs = () => {

    const onFormSubmit = (values, { resetForm }) => {
        console.log("Submit")
    }
    return (
        <>
            <CRow>
                <CCol>
                    <CCard>
                        <CCardHeader>
                            Contact Us
                        </CCardHeader>
                        <CCardBody>
                            <Formik
                                initialValues={{
                                    name: "",
                                    subject: "",
                                    message: "",
                                    email: "",

                                }}
                                onSubmit={onFormSubmit}
                                validationSchema={Yup.object({
                                    name: Yup.string().max(50, "FEEDBACK_NAME_MAX_LENGTH").required("FEEDBACK_NAME_REQUIRED"),
                                    subject: Yup.string().max(50, "FEEDBACK_SUBJECT_MAX_LENGTH").required("FEEDBACK_SUBJECT_REQUIRED"),
                                    message: Yup.string().max(50, "FEEDBACK_MESSAGE_MAX_LENGTH").required("FEEDBACK_MESSAGE_REQUIRED"),
                                    email: Yup.string().email("FEEDBACK_ADMIN_VALID_EMAIL").required("FEEDBACK_ADMIN_EMAIL_REQUIRED"),
                                })}
                            >
                                {formik => (
                                    <CForm onSubmit={formik.handleSubmit}>
                                        <CFormGroup row className="my-0">
                                            <CCol xs="6">
                                                <CFormGroup>
                                                    <CLabel htmlFor="name">Name</CLabel>
                                                    <CInput id="name" placeholder="Enter name" {...formik.getFieldProps('name')} />
                                                    <ErrorMessage name="name" render={msg => <ErrorLable msg={msg} />} />
                                                </CFormGroup>
                                            </CCol>
                                            <CCol xs="6">
                                                <CFormGroup>
                                                    <CLabel htmlFor="email"> Admin Email</CLabel>
                                                    <CInput id="email" placeholder="Enter Email" name="email" {...formik.getFieldProps('email')} />
                                                    <ErrorMessage name="name" render={msg => <ErrorLable msg={msg} />} />
                                                </CFormGroup>
                                            </CCol>
                                        </CFormGroup>
                                        <CFormGroup row className="my-0">
                                            <CCol xs="6">
                                                <CFormGroup>
                                                    <CLabel htmlFor="subject">Subject</CLabel>
                                                    <CInput id="subject" placeholder="Enter Subject" name="subject" {...formik.getFieldProps('subject')} />
                                                    <ErrorMessage name="name" render={msg => <ErrorLable msg={msg} />} />
                                                </CFormGroup>
                                            </CCol>
                                            <CCol xs="6">
                                                <CFormGroup>
                                                    <CLabel htmlFor="message">Message</CLabel>
                                                    <CInput id="message" placeholder="Enter Message" name="message" {...formik.getFieldProps('message')} />
                                                    <ErrorMessage name="name" render={msg => <ErrorLable msg={msg} />} />
                                                </CFormGroup>
                                            </CCol>
                                        </CFormGroup>

                                        <CButton type="submit" color="primary">Submit</CButton>{" "}
                                        <Link to="/feedbacks"><CButton color="info" variant="outline">Cancel</CButton></Link>
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

export default ContactUs
