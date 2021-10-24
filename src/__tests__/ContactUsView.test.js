import React from 'react'
import { render, screen, fireEvent, act, queryByAttribute, waitFor } from '@testing-library/react';
import ContactUsView from '../views/contactUs/ContactUsView';
import { checkRequired, checkAlphabets, checkEmail } from '../reusable/utils';
import { apiService } from 'src/reusable/Api';

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

/** ===========================Check All Validation for Input Fields========================= **/
describe('Check Email Field Validation', () => {

    test('Email is required', async () => {
        const { email } = setup()
        fireEvent.blur(email);
        await waitFor(async () => {
            expect(await screen.findByText(/Email required./i)).toBeTruthy();
        })

    });

    test('Email is invalid', async () => {
        const { email } = setup()
        fireEvent.blur(email);
        act(() => {
            fireEvent.change(email, { target: { value: 'abc@def' } });
        });
        await waitFor(async () => {
            expect(await screen.findByText(/Invalid email./i)).toBeTruthy();
        })

    });

    test('Email is Valid', async () => {
        const { email } = setup()
        fireEvent.blur(email);
        act(() => {
            fireEvent.change(email, { target: { value: 'abc@def.com' } });
        });
        await waitFor(async () => {
            const emailError = await screen.queryByText(/Invalid email./i);
            expect(emailError).toBeNull();
        })

    });
});


describe('Check firstName Field Validation', () => {

    test('firstName is required', async () => {
        const { fNameInput } = setup()
        act(() => {
            fireEvent.blur(fNameInput);
        });
        await waitFor(async () => {
            expect(await screen.findByText(/First name required./i)).toBeTruthy();
        })

    });

    test('firstName is invalid', async () => {
        const { fNameInput } = setup()
        act(() => {
            fireEvent.blur(fNameInput);
            fireEvent.change(fNameInput, { target: { value: 'abc@def' } });
        });
        await waitFor(async () => {
            expect(await screen.findByText(/Only alphabets are allowed for this field/i)).toBeTruthy();
        })

    });

    test('firstName is Valid', async () => {
        const { fNameInput } = setup()
        act(() => {
            fireEvent.blur(fNameInput);
            fireEvent.change(fNameInput, { target: { value: 'Harshit Kishor' } });
        });
        await waitFor(async () => {
            const firstNameError1 = await screen.queryByText(/First name required./i);
            const firstNameError2 = await screen.queryByText(/Only alphabets are allowed for this field/i)
            expect(firstNameError1).toBeNull();
            expect(firstNameError2).toBeNull();
        })

    });
});


describe('Check lastName Field Validation', () => {

    test('lastName is required', async () => {
        const { lNameInput } = setup()
        act(() => {
            fireEvent.blur(lNameInput);
        });
        await waitFor(async () => {
            expect(await screen.findByText(/Last name required./i)).toBeTruthy();
        })

    });

    test('lastName is invalid', async () => {
        const { lNameInput } = setup()
        act(() => {
            fireEvent.blur(lNameInput);
            fireEvent.change(lNameInput, { target: { value: 'abc@def' } });
        });
        await waitFor(async () => {
            expect(await screen.findByText(/Only alphabets are allowed for this field/i)).toBeTruthy();
        })

    });

    test('lastName is Valid', async () => {
        const { lNameInput } = setup()
        act(() => {
            fireEvent.blur(lNameInput);
            fireEvent.change(lNameInput, { target: { value: 'Harshit Kishor' } });
        });
        await waitFor(async () => {
            const lastNameError1 = await screen.queryByText(/Last name required./i);
            const lastNameError2 = await screen.queryByText(/Only alphabets are allowed for this field/i)
            expect(lastNameError1).toBeNull();
            expect(lastNameError2).toBeNull();
        })

    });
});


describe('Check Message Field Validation', () => {

    test('Message is required', async () => {
        const { message } = setup()
        act(() => {
            fireEvent.blur(message);
        });
        await waitFor(async () => {
            expect(await screen.findByText(/Message required./i)).toBeTruthy();
        })

    });

    test('Message is Valid', async () => {
        const { message } = setup()
        act(() => {
            fireEvent.blur(message);
            fireEvent.change(message, { target: { value: 'Harshit Kishor' } });
        });
        await waitFor(async () => {
            const messageError = await screen.queryByText(/Message required./i);
            expect(messageError).toBeNull();
        })

    });
});


describe('Check Mobile Field Validation', () => {
    test('Mobile is required', async () => {
        const { mobile } = setup()
        act(() => {
            fireEvent.blur(mobile);
        });
        await waitFor(async () => {
            expect(await screen.findByText(/Mobile Number required./i)).toBeTruthy();
        })

    });

    test('Mobile is Valid', async () => {
        const { mobile } = setup()
        act(() => {
            fireEvent.blur(mobile);
            fireEvent.change(mobile, { target: { value: '9987654545' } });
        });
        await waitFor(async () => {
            const mobileError = await screen.queryByText(/Mobile Number required./i);
            expect(mobileError).toBeNull();
        })

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
            const { fNameInput, lNameInput, mobile, email, message, button, form } = setup()

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

            if (!fNameRequired || !lNameRequired || !mobileRequired || !emailRequired || !messageRequired) {
                expect(await screen.findByText(/required/i)).toBeTruthy();
            } else if (emailRequired && !emailValid) {
                expect(await screen.findByText(/Invalid email./i)).toBeTruthy();
            } else if ((fNameRequired && !fNameAlpha) || (lNameRequired && !lNameAlpha)) {
                expect(await screen.findByText(/Only alphabets are allowed for this field/i)).toBeTruthy();
            } else {
                await waitFor(() => {
                    expect(onFormSubmit).toHaveBeenCalled();
                    expect(onFormSubmit).toHaveBeenCalledTimes(1);
                    apiService('POST', '/contactUs', contactUsEntry)
                        .then((res) => {
                            expect({ ...contactUsEntry, id: res.data.id }).toEqual(res.data)
                            expect(res.status).toBe(201)
                        })
                })
            }
            await act(() => Promise.resolve()); // To avoid act wrapping warning
        }

    )
})


/** ===========================End========================= **/