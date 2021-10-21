
import * as Yup from "yup";

const createAppointmentValidationSchema = Yup.object({
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
})

export default createAppointmentValidationSchema
