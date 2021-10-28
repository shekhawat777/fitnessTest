import React from 'react'
import { render, screen, fireEvent, act, queryByAttribute, waitFor } from '@testing-library/react';
import ContactUsView from '../views/contactUs/ContactUsView';
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
    write.sync('output/text/contactusView_test_report.txt', newData.join('\n'), { newline: true })
    write.sync('output/json/contactusView_test_report.json', JSON.stringify(newData), { newline: true })
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

/** ===========================Check All Validation for Input Fields========================= **/
describe('Check Email Field Validation', () => {

    test('Email is required', async () => {
        const { email } = setup()
        fireEvent.blur(email);
        await waitFor(async () => {
            writeFn({ Email_is_required: false })
            expect(await screen.findByText(/Email required./i)).toBeTruthy();
            writeFn({ Email_is_required: true })
        })

    });

    test('Email is invalid', async () => {
        const { email } = setup()
        fireEvent.blur(email);
        act(() => {
            fireEvent.change(email, { target: { value: 'abc@def' } });
        });
        await waitFor(async () => {
            writeFn({ Email_is_invalid: false })
            expect(await screen.findByText(/Invalid email./i)).toBeTruthy();
            writeFn({ Email_is_invalid: true })
        })

    });

    test('Email is Valid', async () => {
        const { email } = setup()
        fireEvent.blur(email);
        act(() => {
            fireEvent.change(email, { target: { value: 'abc@def.com' } });
        });
        await waitFor(async () => {
            writeFn({ Email_is_valid: false })
            const emailError = await screen.queryByText(/Invalid email./i);
            expect(emailError).toBeNull();
            writeFn({ Email_is_valid: true })
        })

    });
});


describe('Check FirstName Field Validation', () => {

    test('firstName is required', async () => {
        const { fNameInput } = setup()
        act(() => {
            fireEvent.blur(fNameInput);
        });
        await waitFor(async () => {
            writeFn({ FirstName_is_required: false })
            expect(await screen.findByText(/First name required./i)).toBeTruthy();
            writeFn({ FirstName_is_required: true })
        })

    });

    test('firstName is invalid', async () => {
        const { fNameInput } = setup()
        act(() => {
            fireEvent.blur(fNameInput);
            fireEvent.change(fNameInput, { target: { value: 'abc@def' } });
        });
        await waitFor(async () => {
            writeFn({ FirstName_is_invalid: false })
            expect(await screen.findByText(/Only alphabets are allowed for this field/i)).toBeTruthy();
            writeFn({ FirstName_is_invalid: true })
        })

    });

    test('firstName is Valid', async () => {
        const { fNameInput } = setup()
        act(() => {
            fireEvent.blur(fNameInput);
            fireEvent.change(fNameInput, { target: { value: 'Harshit Kishor' } });
        });
        await waitFor(async () => {
            writeFn({ FirstName_is_valid: false })
            const firstNameError1 = await screen.queryByText(/First name required./i);
            const firstNameError2 = await screen.queryByText(/Only alphabets are allowed for this field/i)
            expect(firstNameError1).toBeNull();
            expect(firstNameError2).toBeNull();
            writeFn({ FirstName_is_valid: true })
        })

    });
});


describe('Check LastName Field Validation', () => {

    test('lastName is required', async () => {
        const { lNameInput } = setup()
        act(() => {
            fireEvent.blur(lNameInput);
        });
        await waitFor(async () => {
            writeFn({ LastName_is_required: false })
            expect(await screen.findByText(/Last name required./i)).toBeTruthy();
            writeFn({ LastName_is_required: true })
        })

    });

    test('lastName is invalid', async () => {
        const { lNameInput } = setup()
        act(() => {
            fireEvent.blur(lNameInput);
            fireEvent.change(lNameInput, { target: { value: 'abc@def' } });
        });
        await waitFor(async () => {
            writeFn({ LastName_is_invalid: false })
            expect(await screen.findByText(/Only alphabets are allowed for this field/i)).toBeTruthy();
            writeFn({ LastName_is_invalid: true })
        })

    });

    test('lastName is Valid', async () => {
        const { lNameInput } = setup()
        act(() => {
            fireEvent.blur(lNameInput);
            fireEvent.change(lNameInput, { target: { value: 'Harshit Kishor' } });
        });
        await waitFor(async () => {
            writeFn({ LastName_is_valid: false })
            const lastNameError1 = await screen.queryByText(/Last name required./i);
            const lastNameError2 = await screen.queryByText(/Only alphabets are allowed for this field/i)
            expect(lastNameError1).toBeNull();
            expect(lastNameError2).toBeNull();
            writeFn({ LastName_is_valid: true })
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
            writeFn({ Message_is_required: false })
            expect(await screen.findByText(/Message required./i)).toBeTruthy();
            writeFn({ Message_is_required: true })
        })

    });

    test('Message is Valid', async () => {
        const { message } = setup()
        act(() => {
            fireEvent.blur(message);
            fireEvent.change(message, { target: { value: 'Harshit Kishor' } });
        });
        await waitFor(async () => {
            writeFn({ Message_is_valid: false })
            const messageError = await screen.queryByText(/Message required./i);
            expect(messageError).toBeNull();
            writeFn({ Message_is_valid: true })
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
            writeFn({ Mobile_is_required: false })
            expect(await screen.findByText(/Mobile Number required./i)).toBeTruthy();
            writeFn({ Mobile_is_required: true })
        })

    });

    test('Mobile is Valid', async () => {
        const { mobile } = setup()
        act(() => {
            fireEvent.blur(mobile);
            fireEvent.change(mobile, { target: { value: '9987654545' } });
        });
        await waitFor(async () => {
            writeFn({ Mobile_is_valid: false })
            const mobileError = await screen.queryByText(/Mobile Number required./i);
            expect(mobileError).toBeNull();
            writeFn({ Mobile_is_valid: true })
        })

    });
});

/** ===========================End========================= **/
