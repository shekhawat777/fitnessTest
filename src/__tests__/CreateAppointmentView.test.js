import React from 'react'
import CreateAppointmentView from '../views/createAppointment/CreateAppointmentView';
import { render, screen, fireEvent, queryByAttribute, act, queryAllByAttribute } from '@testing-library/react';

const getById = queryByAttribute.bind(null, 'id');
const getByName = queryAllByAttribute.bind(null, 'name');

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
    trainerPreferences: '',
    physioRequired: '',
    weeks: 1,
    package: '',
    totalAmount: 0
}

const onFormSubmit = jest.fn();

const setup = () => {
    const utils = render(<CreateAppointmentView initialValues={initialValues} onFormSubmit={onFormSubmit} />)
    const fNameInput = getById(utils.container, 'firstName');
    const lNameInput = getById(utils.container, 'lastName');
    const emailInput = getById(utils.container, 'email');
    const mobileInput = getById(utils.container, 'mobile');
    const ageInput = getById(utils.container, 'age');
    const streetNameInput = getById(utils.container, 'streetName');
    const cityInput = getById(utils.container, 'city');
    const stateInput = getById(utils.container, 'state');
    const countryInput = getById(utils.container, 'country');
    const pinCodeInput = getById(utils.container, 'pinCode');
    const malePreferenceInput = getById(utils.container, 'malePreference');
    const femalePreferenceInput = getById(utils.container, 'femalePreference');
    const noPreferenceInput = getById(utils.container, 'noPreference');
    const physioInput1 = getById(utils.container, 'physioRequired1');
    const physioInput2 = getById(utils.container, 'physioRequired2');
    const package1 = getById(utils.container, 'package1');
    const package2 = getById(utils.container, 'package2');
    const package3 = getById(utils.container, 'package3');
    const weeksInput = getById(utils.container, 'weeks');
    const packageInput = getByName(utils.container, 'package');
    const button = getById(utils.container, 'button');
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
        malePreferenceInput,
        femalePreferenceInput,
        noPreferenceInput,
        physioInput1,
        physioInput2,
        weeksInput,
        button,
        package1,
        package2,
        package3,
        packageInput,
        ...utils,
    }
}

/** ===========================Check All Validation for Input Fields========================= **/

describe.skip('Check firstName Field Validation', () => {
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


describe.skip('Check lastName Field Validation', () => {
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

describe.skip('Check Email Field Validation', () => {
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

describe.skip('Check Mobile Field Validation', () => {
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


describe.skip('Check Age Field Validation', () => {
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


describe.skip('Check Street Name Field Validation', () => {
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

describe.skip('Check Country Field Validation', () => {
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

describe.skip('Check City Field Validation', () => {
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

describe.skip('Check State Field Validation', () => {
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

describe.skip('Check PinCode Field Validation', () => {
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

describe.skip('Check Trainer Preferences Validation', () => {
    const { button, malePreferenceInput, femalePreferenceInput, noPreferenceInput } = setup()
    test('Trainer Preferences is required', async () => {
        fireEvent.click(button)
        expect(malePreferenceInput.checked).toEqual(false);
        expect(femalePreferenceInput.checked).toEqual(false);
        expect(noPreferenceInput.checked).toEqual(false);
        expect(await screen.findByText(/Preferences required./i)).toBeTruthy();;
    });
    test('Trainer Preferences is Valid', async () => {
        fireEvent.click(malePreferenceInput, { target: { value: "male" } });
        expect(malePreferenceInput.checked).toEqual(true);
        expect(femalePreferenceInput.checked).toEqual(false);
        expect(noPreferenceInput.checked).toEqual(false);
        expect(malePreferenceInput.value).toBe('male')

        fireEvent.click(femalePreferenceInput, { target: { value: "female" } });
        expect(malePreferenceInput.checked).toEqual(false);
        expect(femalePreferenceInput.checked).toEqual(true);
        expect(noPreferenceInput.checked).toEqual(false);
        expect(femalePreferenceInput.value).toBe('female')

        fireEvent.click(noPreferenceInput, { target: { value: "no" } });
        expect(malePreferenceInput.checked).toEqual(false);
        expect(femalePreferenceInput.checked).toEqual(false);
        expect(noPreferenceInput.checked).toEqual(true);
        expect(noPreferenceInput.value).toBe('no')
    });
});

describe.skip('Check physioRequired Validation', () => {
    const { button, physioInput1, physioInput2 } = setup()
    test('physioRequired is required', async () => {
        fireEvent.click(button)
        expect(physioInput1.checked).toEqual(false);
        expect(physioInput2.checked).toEqual(false);
        expect(await screen.findByText(/Physiotherapist required./i)).toBeTruthy();;
    });
    test('physioRequired is Valid', async () => {
        fireEvent.click(physioInput1, { target: { value: "Yes" } });
        expect(physioInput1.checked).toEqual(true);
        expect(physioInput2.checked).toEqual(false);
        expect(physioInput1.value).toBe('Yes')

        fireEvent.click(physioInput2, { target: { value: "No" } });
        expect(physioInput1.checked).toEqual(false);
        expect(physioInput2.checked).toEqual(true);
        expect(physioInput2.value).toBe('No')
    });
});

describe.skip('Package Validation', () => {
    const { button, package1, package2, package3, packageInput } = setup()
    test('Package is required', async () => {
        fireEvent.click(button)
        expect(package1.checked).toEqual(false);
        expect(package2.checked).toEqual(false);
        expect(package3.checked).toEqual(false);
        expect(await screen.findByText(/Package required./i)).toBeTruthy();;
    });
    test('Package is Valid', async () => {
        fireEvent.click(package1, { target: { value: "One Time appointment" } });
        expect(package1.checked).toEqual(true);
        expect(package2.checked).toEqual(false);
        expect(package3.checked).toEqual(false);
        expect(package1.value).toBe('One Time appointment')

        fireEvent.click(package2, { target: { value: "4 Sessions per week" } });
        expect(package1.checked).toEqual(false);
        expect(package2.checked).toEqual(true);
        expect(package3.checked).toEqual(false);
        expect(package2.value).toBe('4 Sessions per week')

        fireEvent.click(package3, { target: { value: "5 Sessions per week" } });
        expect(package1.checked).toEqual(false);
        expect(package2.checked).toEqual(false);
        expect(package3.checked).toEqual(true);
        expect(package3.value).toBe('5 Sessions per week')
    });
});


/** ===========================End========================= **/