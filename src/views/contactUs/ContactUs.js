import React from "react";
import ContactUsView from "./ContactUsView";

const ContactUs = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  };

  // Write your submit logic here
  const onFormSubmit = async (values) => {
    console.log("Values", values);
  };

  return (
    <>
      <ContactUsView
        initialValues={initialValues}
        onFormSubmit={onFormSubmit}
      />
    </>
  );
};

export default ContactUs;
