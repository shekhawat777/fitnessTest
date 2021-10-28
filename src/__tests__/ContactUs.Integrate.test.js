import React from 'react'
import { render, screen, fireEvent, act, queryByAttribute, waitFor } from '@testing-library/react';
import ContactUsView from '../views/contactUs/ContactUsView';
import { checkRequired, checkAlphabets, checkEmail } from '../reusable/utils';
import { apiService } from 'src/reusable/Api';
//==== test cases For txt file===============
import write from 'write'
let data = []
const writeFn = (testData) => {
    let index1 = data.findIndex((e) => {
        let [key1] = Object.entries(e)[0];
        let [key2] = Object.entries(testData)[0];
        return key1 === key2
    });
    if (index1 === -1) {
        data.push(testData)
    } else {
        data[index1] = testData
    }
    let newData = []
    data.map((obj) => {
        let [key, val] = Object.entries(obj)[0];
        return newData.push(`${key}=${val}`)
    });
    write.sync('output/text/contactusView_Integrate_test_report.txt', newData.join('\n'), { newline: true })
    write.sync('output/json/contactusView_Integrate_test_report.json', JSON.stringify(newData), { newline: true })
}

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: '',
    message: '',
}
const onFormSubmit = jest.fn();
const getById = queryByAttribute.bind(null, 'id');

const setup = () => {
    const utils = render(<ContactUsView initialValues={initialValues} onFormSubmit={onFormSubmit} />)
    const fNameInput = getById(utils.container, 'firstName');
    const lNameInput = getById(utils.container, 'lastName');
    const email = getById(utils.container, 'email');
    const mobile = getById(utils.container, 'mobile');
    const message = getById(utils.container, 'message');
    const button = getById(utils.container, 'button');
    const form = getById(utils.container, 'form');
    return {
        fNameInput,
        lNameInput,
        mobile,
        email,
        message,
        button,
        form,
        ...utils,
    }
}

/* ============================== E2E Test=================== */

const contactUsEnteries = [
    { firstName: "Harshit", lastName: "Kishor", email: "harshit+1000", mobile: "34434322213", message: "df\nvf\nbg\n\nb" },
    { firstName: "", lastName: "Kishor", email: "view@gmail.com", mobile: "344", message: "ythgfhgh" },
    { firstName: "Harsh6it", lastName: "", email: "view@gmail.com", mobile: "344", message: "ythgfhgh" },
    { firstName: "Harshit", lastName: "Kis6hor", email: "", mobile: "344", message: "ythgfhgh" },
    { firstName: "Harshit", lastName: "Kishor", email: "view@gmail.com", mobile: "344", message: "ythgfhgh" }
]

describe('Contact US Integrate Test for api', () => {
    test.each(contactUsEnteries.map((item, i) => [i, item]))('check combination for %s',
        async (i, contactUsEntry) => {
            const { fNameInput, lNameInput, mobile, email, message, form } = setup()

            const fNameRequired = checkRequired(contactUsEntry.firstName)
            const lNameRequired = checkRequired(contactUsEntry.lastName)
            const mobileRequired = checkRequired(contactUsEntry.mobile)
            const emailRequired = checkRequired(contactUsEntry.email)
            const messageRequired = checkRequired(contactUsEntry.message)
            const fNameAlpha = checkAlphabets(contactUsEntry.firstName)
            const lNameAlpha = checkAlphabets(contactUsEntry.lastName)
            const emailValid = checkEmail(contactUsEntry.email)


            fireEvent.blur(fNameInput);
            fireEvent.change(fNameInput, { target: { value: contactUsEntry.firstName } });

            fireEvent.blur(lNameInput);
            fireEvent.change(lNameInput, { target: { value: contactUsEntry.lastName } });

            fireEvent.blur(mobile);
            fireEvent.change(mobile, { target: { value: contactUsEntry.mobile } });

            fireEvent.blur(email);
            fireEvent.change(email, { target: { value: contactUsEntry.email } });

            fireEvent.blur(message);
            fireEvent.change(message, { target: { value: contactUsEntry.message } });

            fireEvent.submit(form);

            writeFn({ [`===========Test Cases for Entry ${i + 1}============`]: '' })
            writeFn({ [`Check_Required_Field_Validation ${i + 1}`]: false })
            writeFn({ [`Check_Invalid_Email_Validation ${i + 1}`]: false })
            writeFn({ [`Check_Alphabets_Field_Validation ${i + 1}`]: false })
            writeFn({ [`Check_Form_Submit ${i + 1}`]: false })
            writeFn({ [`Data_inserted_Successfully ${i + 1}`]: false })
            if (!fNameRequired || !lNameRequired || !mobileRequired || !emailRequired || !messageRequired) {
                expect(await screen.findByText(/required/i)).toBeTruthy();
                writeFn({ [`Check_Required_Field_Validation ${i + 1}`]: true })
            } else if (emailRequired && !emailValid) {
                expect(await screen.findByText(/Invalid email./i)).toBeTruthy();
                writeFn({ [`Check_Invalid_Email_Validation ${i + 1}`]: true })
            } else if ((fNameRequired && !fNameAlpha) || (lNameRequired && !lNameAlpha)) {
                expect(await screen.findByText(/Only alphabets are allowed for this field/i)).toBeTruthy();
                writeFn({ [`Check_Alphabets_Field_Validation ${i + 1}`]: true })
            } else {
                await waitFor(() => {
                    expect(onFormSubmit).toHaveBeenCalled();
                    expect(onFormSubmit).toHaveBeenCalledTimes(1);
                    writeFn({ [`Check_Form_Submit ${i + 1}`]: true })
                    apiService('POST', '/contactUs', contactUsEntry)
                        .then((res) => {
                            expect({ ...contactUsEntry, id: res.data.id }).toEqual(res.data)
                            expect(res.status).toBe(201)
                            writeFn({ [`Data_inserted_Successfully ${i + 1}`]: true })
                        })
                })
            }
            writeFn({ [`===========Test Case End ${i + 1}============`]: '' })
            await act(() => Promise.resolve()); // To avoid act wrapping warning
        }

    )
})


/** ===========================End========================= **/