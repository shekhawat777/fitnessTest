import React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react';
import ContactUsView from '../views/contactUs/ContactUsView';
import { checkRequired, checkAlphabets, checkEmail } from '../reusable/utils';
import axios from 'axios';

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: '',
    message: '',
}
const onFormSubmit = jest.fn();

const setup = () => {
    const utils = render(<ContactUsView initialValues={initialValues} onFormSubmit={onFormSubmit} />)
    const fNameInput = utils.getByPlaceholderText('Enter first name');
    const lNameInput = utils.getByPlaceholderText('Enter last name');
    const email = utils.getByPlaceholderText('Enter email');
    const mobile = utils.getByPlaceholderText('Enter Mobile No');
    const message = utils.getByPlaceholderText('Enter Message');
    return {
        fNameInput,
        lNameInput,
        mobile,
        email,
        message,
        ...utils,
    }
}

/** ===========================Check All Validation for Input Fields========================= **/
describe('Check Email Field Validation', () => {

    test('Email is required', async () => {
        const { email } = setup()
        act(() => {
            fireEvent.blur(email);
        });
        expect(await screen.findByText(/Email required./i)).toBeTruthy();
    });

    test('Email is invalid', async () => {
        const { email } = setup()
        act(() => {
            fireEvent.blur(email);
            fireEvent.change(email, { target: { value: 'abc@def' } });
        });
        expect(await screen.findByText(/Invalid email./i)).toBeTruthy();
    });

    test('Email is Valid', async () => {
        const { email } = setup()
        act(() => {
            fireEvent.blur(email);
            fireEvent.change(email, { target: { value: 'abc@def.com' } });
        });
        const emailError = await screen.queryByText(/Invalid email./i);
        expect(emailError).toBeNull();
    });
});


describe('Check firstName Field Validation', () => {

    test('firstName is required', async () => {
        const { fNameInput } = setup()
        act(() => {
            fireEvent.blur(fNameInput);
        });
        expect(await screen.findByText(/First name required./i)).toBeTruthy();
    });

    test('firstName is invalid', async () => {
        const { fNameInput } = setup()
        act(() => {
            fireEvent.blur(fNameInput);
            fireEvent.change(fNameInput, { target: { value: 'abc@def' } });
        });
        expect(await screen.findByText(/Only alphabets are allowed for this field/i)).toBeTruthy();
    });

    test('firstName is Valid', async () => {
        const { fNameInput } = setup()
        act(() => {
            fireEvent.blur(fNameInput);
            fireEvent.change(fNameInput, { target: { value: 'Harshit Kishor' } });
        });
        const firstNameError1 = await screen.queryByText(/First name required./i);
        const firstNameError2 = await screen.queryByText(/Only alphabets are allowed for this field/i)
        expect(firstNameError1).toBeNull();
        expect(firstNameError2).toBeNull();
    });
});


describe('Check lastName Field Validation', () => {

    test('lastName is required', async () => {
        const { lNameInput } = setup()
        act(() => {
            fireEvent.blur(lNameInput);
        });
        expect(await screen.findByText(/Last name required./i)).toBeTruthy();
    });

    test('lastName is invalid', async () => {
        const { lNameInput } = setup()
        act(() => {
            fireEvent.blur(lNameInput);
            fireEvent.change(lNameInput, { target: { value: 'abc@def' } });
        });
        expect(await screen.findByText(/Only alphabets are allowed for this field/i)).toBeTruthy();
    });

    test('lastName is Valid', async () => {
        const { lNameInput } = setup()
        act(() => {
            fireEvent.blur(lNameInput);
            fireEvent.change(lNameInput, { target: { value: 'Harshit Kishor' } });
        });
        const lastNameError1 = await screen.queryByText(/Last name required./i);
        const lastNameError2 = await screen.queryByText(/Only alphabets are allowed for this field/i)
        expect(lastNameError1).toBeNull();
        expect(lastNameError2).toBeNull();
    });
});


describe('Check Message Field Validation', () => {

    test('Message is required', async () => {
        const { message } = setup()
        act(() => {
            fireEvent.blur(message);
        });
        expect(await screen.findByText(/Message required./i)).toBeTruthy();
    });

    test('Message is Valid', async () => {
        const { message } = setup()
        act(() => {
            fireEvent.blur(message);
            fireEvent.change(message, { target: { value: 'Harshit Kishor' } });
        });
        const messageError = await screen.queryByText(/Message required./i);
        expect(messageError).toBeNull();
    });
});


describe('Check Mobile Field Validation', () => {

    test('Mobile is required', async () => {
        const { mobile } = setup()
        act(() => {
            fireEvent.blur(mobile);
        });
        expect(await screen.findByText(/Mobile Number required./i)).toBeTruthy();
    });

    test('Mobile is Valid', async () => {
        const { mobile } = setup()
        act(() => {
            fireEvent.blur(mobile);
            fireEvent.change(mobile, { target: { value: '9987654545' } });
        });
        const mobileError = await screen.queryByText(/Mobile Number required./i);
        expect(mobileError).toBeNull();
    });
});

/** ===========================End========================= **/
/* ============================== E2E Test=================== */

const contactUsEnteries = [
    { firstName: "Harshit", lastName: "Kishor", email: "harshit+1000", mobile: "34434322213", message: "df\nvf\nbg\n\nb" },
    { firstName: "", lastName: "Kishor", email: "view@gmail.com", mobile: "344", message: "ythgfhgh" },
    { firstName: "Harsh6it", lastName: "", email: "view@gmail.com", mobile: "344", message: "ythgfhgh" },
    { firstName: "Harshit", lastName: "Kis6hor", email: "", mobile: "344", message: "ythgfhgh" },
    { firstName: "Harshit", lastName: "Kishor", email: "view@gmail.com", mobile: "344", message: "ythgfhgh" }
]

describe('Contact US Integrate Test for api', () => {
    test.each(contactUsEnteries)('check combination for %s',
        async (contactUsEntry) => {
            const { fNameInput, lNameInput, mobile, email, message } = setup()
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

            if (!fNameRequired || !lNameRequired || !mobileRequired || !emailRequired || !messageRequired) {
                expect(await screen.findByText(/required/i)).toBeTruthy();
            } else if (emailRequired && !emailValid) {
                expect(await screen.findByText(/Invalid email./i)).toBeTruthy();
            } else if ((fNameRequired && !fNameAlpha) || (lNameRequired && !lNameAlpha)) {
                expect(await screen.findByText(/Only alphabets are allowed for this field/i)).toBeTruthy();
            } else {
                await axios.post("http://localhost:3500/contactUs", contactUsEntry).then(res => {
                    /*  console.log(res) */
                    expect({ ...contactUsEntry, id: res.data.id }).toEqual(res.data)
                    expect(res.status).toBe(201)
                })
            }
            await act(() => Promise.resolve()); // To avoid act wrapping warning
        }

    )
})


/** ===========================End========================= **/