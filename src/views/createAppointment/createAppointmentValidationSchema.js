
import * as Yup from "yup";

const createAppointmentValidationSchema = Yup.object({
    firstName: Yup.string().required("First name required.").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field. "),
    lastName: Yup.string().required("Last name required.").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field. "),
    email: Yup.string().email("Invalid email.").required("Email required."),
    mobile: Yup.string().required("Mobile Number required."),
    age: Yup.number().typeError("Only numbers are allowed for this field.").required("Age required.").min(19, "Age must be greater than 18.").max(59, "Age must be less than 60."),
    streetName: Yup.string().required("Street name required."),
    country: Yup.string().required("Country required."),
    city: Yup.string().required("City required."),
    state: Yup.string().required("State required."),
    pinCode: Yup.string().required("Pincode required.").matches(/^[0-9]+$/, "Only numbers are allowed for this field.").length(6, "Pinocde should be 6 digits"),
    preferences: Yup.string().required("Preferences required."),
    package: Yup.string().required("Package required."),
})

export default createAppointmentValidationSchema
