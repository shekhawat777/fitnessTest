import React from 'react'
import CreateAppointmentView from '../views/createAppointment/CreateAppointmentView';
import { render, screen, fireEvent, act } from '@testing-library/react';


const initialValues = {
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
}
const onFormSubmit = jest.fn();

const setup = () => {
    const utils = render(<CreateAppointmentView initialValues={initialValues} onFormSubmit={onFormSubmit} />)
    const fNameInput = utils.getByPlaceholderText('Enter first name');
    const lNameInput = utils.getByPlaceholderText('Enter last name');
    const emailInput = utils.getByPlaceholderText('Enter Email');
    const mobileInput = utils.getByPlaceholderText('Enter Mobile No');
    const ageInput = utils.getByPlaceholderText('Enter Age');
    const streetNameInput = utils.getByPlaceholderText('Enter Street Name');
    const cityInput = utils.getByPlaceholderText('Enter city');
    const stateInput = utils.getByPlaceholderText('Enter State');
    const countryInput = utils.getByPlaceholderText('Enter country');
    const pinCodeInput = utils.getByPlaceholderText('Enter Pin Code');
    const preferencesInput = utils.getByPlaceholderText('Select Preferences');
    const packageInput = utils.getByPlaceholderText('Select Package');
    return {
        fNameInput,
        lNameInput,
        emailInput,
        mobileInput,
        ageInput,
        streetNameInput,
        cityInput,
        stateInput,
        countryInput,
        pinCodeInput,
        preferencesInput,
        packageInput,
        ...utils,
    }
}

/** ===========================Check All Validation for Input Fields========================= **/

describe('Check firstName Field Validation', () => {
    test('firstName is required', async () => {
        const { fNameInput } = setup()
        fireEvent.blur(fNameInput);
        expect(await screen.findByText(/First name required./i)).toBeTruthy();;
    });
    test('firstName is invalid', async () => {
        const { fNameInput } = setup()
        fireEvent.blur(fNameInput);
        fireEvent.change(fNameInput, { target: { value: 'abc@def' } });
        expect(await screen.findByText(/Only alphabets are allowed for this field/i)).toBeTruthy();
    });
    test('firstName is Valid', async () => {
        const { fNameInput } = setup()
        fireEvent.blur(fNameInput);
        fireEvent.change(fNameInput, { target: { value: 'Harshit Kishor' } });
        const firstNameError1 = await screen.queryByText(/First name required./i);
        const firstNameError2 = await screen.queryByText(/Only alphabets are allowed for this field/i)
        expect(firstNameError1).toBeNull();
        expect(firstNameError2).toBeNull();
    });
});


describe('Check lastName Field Validation', () => {
    test('lastName is required', async () => {
        const { lNameInput } = setup()
        fireEvent.blur(lNameInput);
        expect(await screen.findByText(/Last name required./i)).toBeTruthy();;
    });
    test('lastName is invalid', async () => {
        const { lNameInput } = setup()
        fireEvent.blur(lNameInput);
        fireEvent.change(lNameInput, { target: { value: 'abc@def' } });
        expect(await screen.findByText(/Only alphabets are allowed for this field/i)).toBeTruthy();
    });
    test('lastName is Valid', async () => {
        const { lNameInput } = setup()
        fireEvent.blur(lNameInput);
        fireEvent.change(lNameInput, { target: { value: 'Harshit Kishor' } });
        const lastNameError1 = await screen.queryByText(/Last name required./i);
        const lastNameError2 = await screen.queryByText(/Only alphabets are allowed for this field/i)
        expect(lastNameError1).toBeNull();
        expect(lastNameError2).toBeNull();
    });
});

describe('Check Email Field Validation', () => {
    test('Email is required', async () => {
        const { emailInput } = setup()
        fireEvent.blur(emailInput);
        expect(await screen.findByText(/Email required./i)).toBeTruthy();;
    });
    test('Email is invalid', async () => {
        const { emailInput } = setup()
        fireEvent.blur(emailInput);
        fireEvent.change(emailInput, { target: { value: 'abc@def' } });
        expect(await screen.findByText(/Invalid email./i)).toBeTruthy();
    });
    test('Email is Valid', async () => {
        const { emailInput } = setup()
        fireEvent.blur(emailInput);
        fireEvent.change(emailInput, { target: { value: 'abc@def.com' } });
        const emailError = await screen.queryByText(/Invalid email./i);
        expect(emailError).toBeNull();
    });
});

describe('Check Mobile Field Validation', () => {
    test('Mobile is required', async () => {
        const { mobileInput } = setup()
        fireEvent.blur(mobileInput);
        expect(await screen.findByText(/Mobile Number required./i)).toBeTruthy();;
    });
    test('Mobile is Valid', async () => {
        const { mobileInput } = setup()
        fireEvent.blur(mobileInput);
        fireEvent.change(mobileInput, { target: { value: '9987654545' } });
        const mobileError = await screen.queryByText(/Mobile Number required./i);
        expect(mobileError).toBeNull();
    });
});


describe('Check Age Field Validation', () => {
    test('Age is required', async () => {
        const { ageInput } = setup()
        fireEvent.blur(ageInput);
        expect(await screen.findByText(/Age required./i)).toBeTruthy();;
    });
    test('Age is only number', async () => {
        const { ageInput } = setup()
        fireEvent.blur(ageInput);
        fireEvent.change(ageInput, { target: { value: '22tt121' } });
        expect(await screen.findByText(/Only numbers are allowed for this field./i)).toBeTruthy();;
    });
    test('Age must be greater than 18.', async () => {
        const { ageInput } = setup()
        fireEvent.blur(ageInput);
        fireEvent.change(ageInput, { target: { value: 15 } });
        expect(await screen.findByText(/Age must be greater than 18./i)).toBeTruthy();;
    });
    test('Age must be less than 60.', async () => {
        const { ageInput } = setup()
        fireEvent.blur(ageInput);
        fireEvent.change(ageInput, { target: { value: 61 } });
        expect(await screen.findByText(/Age must be less than 60./i)).toBeTruthy();;
    });
    test('Age is Valid', async () => {
        const { ageInput } = setup()
        fireEvent.blur(ageInput);
        fireEvent.change(ageInput, { target: { value: 25 } });
        const messageError = await screen.queryByText(/Age required./i);
        expect(messageError).toBeNull();
    });
});


describe('Check Street Name Field Validation', () => {
    test('Street Name is required', async () => {
        const { streetNameInput } = setup()
        fireEvent.blur(streetNameInput);
        expect(await screen.findByText(/Street name required./i)).toBeTruthy();;
    });
    test('Street Name is Valid', async () => {
        const { streetNameInput } = setup()
        fireEvent.blur(streetNameInput);
        fireEvent.change(streetNameInput, { target: { value: 'Millanium Road' } });
        const messageError = await screen.queryByText(/Street name required./i);
        expect(messageError).toBeNull();
    });
});

describe('Check Country Field Validation', () => {
    test('Country is required', async () => {
        const { countryInput } = setup()
        fireEvent.blur(countryInput);
        expect(await screen.findByText(/Country required./i)).toBeTruthy();;
    });
    test('Country is Valid', async () => {
        const { countryInput } = setup()
        fireEvent.blur(countryInput);
        fireEvent.change(countryInput, { target: { value: 'India' } });
        const messageError = await screen.queryByText(/Country required./i);
        expect(messageError).toBeNull();
    });
});

describe('Check City Field Validation', () => {
    test('City is required', async () => {
        const { cityInput } = setup()
        fireEvent.blur(cityInput);
        expect(await screen.findByText(/City required./i)).toBeTruthy();;
    });
    test('City is Valid', async () => {
        const { cityInput } = setup()
        fireEvent.blur(cityInput);
        fireEvent.change(cityInput, { target: { value: 'Barabanki' } });
        const messageError = await screen.queryByText(/City required./i);
        expect(messageError).toBeNull();
    });
});

describe('Check State Field Validation', () => {
    test('State is required', async () => {
        const { stateInput } = setup()
        fireEvent.blur(stateInput);
        expect(await screen.findByText(/State required./i)).toBeTruthy();;
    });
    test('State is Valid', async () => {
        const { stateInput } = setup()
        fireEvent.blur(stateInput);
        fireEvent.change(stateInput, { target: { value: 'Uttar Pradesh' } });
        const messageError = await screen.queryByText(/State required./i);
        expect(messageError).toBeNull();
    });
});

describe('Check PinCode Field Validation', () => {
    test('PinCode is required', async () => {
        const { pinCodeInput } = setup()
        fireEvent.blur(pinCodeInput);
        expect(await screen.findByText(/Pincode required./i)).toBeTruthy();;
    });
    test('PinCode is only number', async () => {
        const { pinCodeInput } = setup()
        fireEvent.blur(pinCodeInput);
        fireEvent.change(pinCodeInput, { target: { value: '22tt121' } });
        expect(await screen.findByText(/Only numbers are allowed for this field./i)).toBeTruthy();;
    });
    test('PinCode has only 6 digit', async () => {
        const { pinCodeInput } = setup()
        fireEvent.blur(pinCodeInput);
        fireEvent.change(pinCodeInput, { target: { value: '2287121' } });
        expect(await screen.findByText(/Pinocde should be 6 digits/i)).toBeTruthy();;
    });
    test('PinCode is Valid', async () => {
        const { pinCodeInput } = setup()
        fireEvent.blur(pinCodeInput);
        fireEvent.change(pinCodeInput, { target: { value: '225121' } });
        const messageError = await screen.queryByText(/Pincode required./i);
        expect(messageError).toBeNull();
    });
});


describe('Check Preferences Field Validation', () => {
    test('Preferences is required', async () => {
        const { preferencesInput } = setup()
        fireEvent.blur(preferencesInput);
        expect(await screen.findByText(/Preferences required./i)).toBeTruthy();;
    });
    test('Preferences is Valid', async () => {
        const { preferencesInput } = setup()
        fireEvent.blur(preferencesInput);
        fireEvent.change(preferencesInput, { target: { value: 'Male' } });
        const messageError = await screen.queryByText(/Preferences required./i);
        expect(messageError).toBeNull();
    });
});

describe('Check Package Field Validation', () => {
    test('Package is required', async () => {
        const { packageInput } = setup()
        fireEvent.blur(packageInput);
        expect(await screen.findByText(/Package required./i)).toBeTruthy();;
    });
    test('Package is Valid', async () => {
        const { packageInput } = setup()
        fireEvent.blur(packageInput);
        fireEvent.change(packageInput, { target: { value: 'Quarterly' } });
        const messageError = await screen.queryByText(/Package required./i);
        expect(messageError).toBeNull();
    });
});
/** ===========================End========================= **/