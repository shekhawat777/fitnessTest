import React from 'react'
import CreateAppointmentView from '../views/createAppointment/CreateAppointmentView';
import { render, screen, fireEvent, queryByAttribute, act, queryAllByAttribute, waitFor } from '@testing-library/react';
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
    write.sync('output/text/CreateAppointmentView_test_report.txt', newData.join('\n'), { newline: true })
    write.sync('output/json/CreateAppointmentView_test_report.json', JSON.stringify(newData), { newline: true })
}


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
    const totalAmountInput = getById(utils.container, 'totalAmount');
    const packageInput = getByName(utils.container, 'package');
    const button = getById(utils.container, 'button');
    const form = getById(utils.container, 'form');
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
        totalAmountInput,
        form,
        ...utils,
    }
}
/** ===========================Check All Validation for Input Fields========================= **/

describe('Check firstName Field Validation', () => {
    test('firstName is required', async () => {
        const { fNameInput } = setup()
        act(() => {
            fireEvent.blur(fNameInput);
        })
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
        })
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
        })
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


describe('Check lastName Field Validation', () => {
    test('lastName is required', async () => {
        const { lNameInput } = setup()
        act(() => {
            fireEvent.blur(lNameInput);
        })
        await waitFor(async () => {
            writeFn({ LatsName_is_required: false })
            expect(await screen.findByText(/Last name required./i)).toBeTruthy();
            writeFn({ LatsName_is_required: true })
        })
    });
    test('lastName is invalid', async () => {
        const { lNameInput } = setup()
        act(() => {
            fireEvent.blur(lNameInput);
            fireEvent.change(lNameInput, { target: { value: 'abc@def' } });
        })
        await waitFor(async () => {
            writeFn({ LatsName_is_invalid: false })
            expect(await screen.findByText(/Only alphabets are allowed for this field/i)).toBeTruthy();
            writeFn({ LatsName_is_invalid: true })
        })
    });
    test('lastName is Valid', async () => {
        const { lNameInput } = setup()
        act(() => {
            fireEvent.blur(lNameInput);
            fireEvent.change(lNameInput, { target: { value: 'Harshit Kishor' } });
        })
        await waitFor(async () => {
            writeFn({ LatsName_is_valid: false })
            const lastNameError1 = await screen.queryByText(/Last name required./i);
            const lastNameError2 = await screen.queryByText(/Only alphabets are allowed for this field/i)
            expect(lastNameError1).toBeNull();
            expect(lastNameError2).toBeNull();
            writeFn({ LatsName_is_valid: true })
        })
    });
});

describe('Check Email Field Validation', () => {
    test('Email is required', async () => {
        const { emailInput } = setup()
        act(() => {
            fireEvent.blur(emailInput);
        })
        await waitFor(async () => {
            writeFn({ Email_is_required: false })
            expect(await screen.findByText(/Email required./i)).toBeTruthy();
            writeFn({ Email_is_required: true })
        })
    });
    test('Email is invalid', async () => {
        const { emailInput } = setup()
        act(() => {
            fireEvent.blur(emailInput);
            fireEvent.change(emailInput, { target: { value: 'abc@def' } });
        })
        await waitFor(async () => {
            writeFn({ Email_is_invalid: false })
            expect(await screen.findByText(/Invalid email./i)).toBeTruthy();
            writeFn({ Email_is_invalid: true })
        })
    });
    test('Email is Valid', async () => {
        const { emailInput } = setup()
        act(() => {
            fireEvent.blur(emailInput);
            fireEvent.change(emailInput, { target: { value: 'abc@def.com' } });
        })
        await waitFor(async () => {
            writeFn({ Email_is_valid: false })
            const emailError = await screen.queryByText(/Invalid email./i);
            expect(emailError).toBeNull();
            writeFn({ Email_is_valid: true })
        })
    });
});

describe('Check Mobile Field Validation', () => {
    test('Mobile is required', async () => {
        const { mobileInput } = setup()
        act(() => {
            fireEvent.blur(mobileInput);
        })
        await waitFor(async () => {
            writeFn({ Mobile_is_required: false })
            expect(await screen.findByText(/Mobile Number required./i)).toBeTruthy();
            writeFn({ Mobile_is_required: true })
        })
    });
    test('Mobile is Valid', async () => {
        const { mobileInput } = setup()
        act(() => {
            fireEvent.blur(mobileInput);
            fireEvent.change(mobileInput, { target: { value: '9987654545' } });
        })
        await waitFor(async () => {
            writeFn({ Mobile_is_valid: false })
            const mobileError = await screen.queryByText(/Mobile Number required./i);
            expect(mobileError).toBeNull();
            writeFn({ Mobile_is_valid: true })
        })
    });
});


describe('Check Age Field Validation', () => {
    test('Age is required', async () => {
        const { ageInput } = setup()
        act(() => {
            fireEvent.blur(ageInput);
        })
        await waitFor(async () => {
            writeFn({ Age_is_required: false })
            expect(await screen.findByText(/Age required./i)).toBeTruthy();
            writeFn({ Age_is_required: true })
        })
    });
    test('Age is only number', async () => {
        const { ageInput } = setup()
        act(() => {
            fireEvent.blur(ageInput);
            fireEvent.change(ageInput, { target: { value: '22tt121' } });
        })
        await waitFor(async () => {
            writeFn({ Age_should_be_number_required: false })
            expect(await screen.findByText(/Only numbers are allowed for this field./i)).toBeTruthy();
            writeFn({ Age_should_be_number_required: true })
        })
    });
    test('Age must be greater than 18.', async () => {
        const { ageInput } = setup()
        act(() => {
            fireEvent.blur(ageInput);
            fireEvent.change(ageInput, { target: { value: 15 } });
        })
        await waitFor(async () => {
            writeFn({ Age_must_be_greater_than_18: false })
            expect(await screen.findByText(/Age must be greater than 18 and less than 60./i)).toBeTruthy();
            writeFn({ Age_must_be_greater_than_18: true })
        })
    });
    test('Age must be less than 60.', async () => {
        const { ageInput } = setup()
        act(() => {
            fireEvent.blur(ageInput);
            fireEvent.change(ageInput, { target: { value: 61 } });
        })
        await waitFor(async () => {
            writeFn({ Age_must_be_less_than_60: false })
            expect(await screen.findByText(/Age must be greater than 18 and less than 60./i)).toBeTruthy();
            writeFn({ Age_must_be_less_than_60: true })
        })
    });
    test('Age is Valid', async () => {
        const { ageInput } = setup()
        act(() => {
            fireEvent.blur(ageInput);
            fireEvent.change(ageInput, { target: { value: 25 } });
        })
        await waitFor(async () => {
            writeFn({ Age_should_be_valid: false })
            const messageError = await screen.queryByText(/Age required./i);
            expect(messageError).toBeNull();
            writeFn({ Age_should_be_valid: true })
        })
    });
});


describe('Check Street Name Field Validation', () => {
    test('Street Name is required', async () => {
        const { streetNameInput } = setup()
        act(() => {
            fireEvent.blur(streetNameInput);
        })
        await waitFor(async () => {
            writeFn({ StreetName_is_required: false })
            expect(await screen.findByText(/Street name required./i)).toBeTruthy();
            writeFn({ StreetName_is_required: true })
        })
    });
    test('Street Name is Valid', async () => {
        const { streetNameInput } = setup()
        act(() => {
            fireEvent.blur(streetNameInput);
            fireEvent.change(streetNameInput, { target: { value: 'Millanium Road' } });
        })
        await waitFor(async () => {
            writeFn({ StreetName_should_be_valid: false })
            const messageError = await screen.queryByText(/Street name required./i);
            expect(messageError).toBeNull();
            writeFn({ StreetName_should_be_valid: true })
        })
    });
});

describe('Check Country Field Validation', () => {
    test('Country is required', async () => {
        const { countryInput } = setup()
        act(() => {
            fireEvent.blur(countryInput);
        })
        await waitFor(async () => {
            writeFn({ Country_is_required: false })
            expect(await screen.findByText(/Country required./i)).toBeTruthy();
            writeFn({ Country_is_required: true })
        })
    });
    test('Country is Valid', async () => {
        const { countryInput } = setup()
        act(() => {
            fireEvent.blur(countryInput);
            fireEvent.change(countryInput, { target: { value: 'India' } });
        })
        await waitFor(async () => {
            writeFn({ Country_is_valid: false })
            const messageError = await screen.queryByText(/Country required./i);
            expect(messageError).toBeNull();
            writeFn({ Country_is_valid: true })
        })
    });
});

describe('Check City Field Validation', () => {
    test('City is required', async () => {
        const { cityInput } = setup()
        act(() => {
            fireEvent.blur(cityInput);
        })
        await waitFor(async () => {
            writeFn({ City_is_required: false })
            expect(await screen.findByText(/City required./i)).toBeTruthy();
            writeFn({ City_is_required: true })
        })
    });
    test('City is Valid', async () => {
        const { cityInput } = setup()
        act(() => {
            fireEvent.blur(cityInput);
            fireEvent.change(cityInput, { target: { value: 'Barabanki' } });
        })
        await waitFor(async () => {
            writeFn({ City_is_valid: false })
            const messageError = await screen.queryByText(/City required./i);
            expect(messageError).toBeNull();
            writeFn({ City_is_valid: true })
        })
    });
});

describe('Check State Field Validation', () => {
    test('State is required', async () => {
        const { stateInput } = setup()
        act(() => {
            fireEvent.blur(stateInput);
        })
        await waitFor(async () => {
            writeFn({ State_is_required: false })
            expect(await screen.findByText(/State required./i)).toBeTruthy();
            writeFn({ State_is_required: true })
        })
    });
    test('State is Valid', async () => {
        const { stateInput } = setup()
        act(() => {
            fireEvent.blur(stateInput);
            fireEvent.change(stateInput, { target: { value: 'Uttar Pradesh' } });
        })
        await waitFor(async () => {
            writeFn({ State_is_valid: false })
            const messageError = await screen.queryByText(/State required./i);
            expect(messageError).toBeNull();
            writeFn({ State_is_valid: true })
        })
    });
});

describe('Check PinCode Field Validation', () => {
    test('PinCode is required', async () => {
        const { pinCodeInput } = setup()
        act(() => {
            fireEvent.blur(pinCodeInput);
        })
        await waitFor(async () => {
            writeFn({ PinCode_is_required: false })
            expect(await screen.findByText(/Pincode required./i)).toBeTruthy();
            writeFn({ PinCode_is_required: true })
        })
    });
    test('PinCode is only number', async () => {
        const { pinCodeInput } = setup()
        act(() => {
            fireEvent.blur(pinCodeInput);
            fireEvent.change(pinCodeInput, { target: { value: '22tt121' } });
        })
        await waitFor(async () => {
            writeFn({ PinCode_should_be_number: false })
            expect(await screen.findByText(/Only numbers are allowed for this field./i)).toBeTruthy();
            writeFn({ PinCode_should_be_number: true })
        })
    });
    test('PinCode has only 6 digit', async () => {
        const { pinCodeInput } = setup()
        act(() => {
            fireEvent.blur(pinCodeInput);
            fireEvent.change(pinCodeInput, { target: { value: '2287121' } });
        })
        await waitFor(async () => {
            writeFn({ PinCode_should_be_6_digit_number: false })
            expect(await screen.findByText(/Pinocde should be 6 digits/i)).toBeTruthy();
            writeFn({ PinCode_should_be_6_digit_number: true })
        })
    });
    test('PinCode is Valid', async () => {
        const { pinCodeInput } = setup()
        act(() => {
            fireEvent.blur(pinCodeInput);
            fireEvent.change(pinCodeInput, { target: { value: '225121' } });
        })
        await waitFor(async () => {
            writeFn({ PinCode_is_valid: false })
            const messageError = await screen.queryByText(/Pincode required./i);
            expect(messageError).toBeNull();
            writeFn({ PinCode_is_valid: true })
        })
    });
});

describe('Check Trainer Preferences Validation', () => {
    test('Trainer Preferences is required', async () => {
        const { button, malePreferenceInput, femalePreferenceInput, noPreferenceInput } = setup()
        act(() => {
            fireEvent.click(button)
        })
        await waitFor(async () => {
            writeFn({ Trainer_Preference_is_required: false })
            expect(malePreferenceInput.checked).toEqual(false);
            expect(femalePreferenceInput.checked).toEqual(false);
            expect(noPreferenceInput.checked).toEqual(false);
            expect(await screen.findByText(/Preferences required./i)).toBeTruthy();
            writeFn({ Trainer_Preference_is_required: true })
        })

    });
    test('Trainer Preferences is Valid', async () => {
        const { malePreferenceInput, femalePreferenceInput, noPreferenceInput } = setup()
        act(() => {
            fireEvent.click(malePreferenceInput, { target: { value: "Male" } });
        })
        await waitFor(async () => {
            writeFn({ Trainer_Preference_is_Valid_For_Male: false })
            expect(malePreferenceInput.checked).toEqual(true);
            expect(femalePreferenceInput.checked).toEqual(false);
            expect(noPreferenceInput.checked).toEqual(false);
            expect(malePreferenceInput.value).toBe('Male')
            writeFn({ Trainer_Preference_is_Valid_For_Male: true })
        })

        act(() => {
            fireEvent.click(femalePreferenceInput, { target: { value: "Female" } });
        })
        await waitFor(async () => {
            writeFn({ Trainer_Preference_is_Valid_For_Female: false })
            expect(malePreferenceInput.checked).toEqual(false);
            expect(femalePreferenceInput.checked).toEqual(true);
            expect(noPreferenceInput.checked).toEqual(false);
            expect(femalePreferenceInput.value).toBe('Female')
            writeFn({ Trainer_Preference_is_Valid_For_Female: true })
        })

        act(() => {
            fireEvent.click(noPreferenceInput, { target: { value: "No" } });
        })
        await waitFor(async () => {
            writeFn({ Trainer_Preference_is_Valid_For_NoPreference: false })
            expect(malePreferenceInput.checked).toEqual(false);
            expect(femalePreferenceInput.checked).toEqual(false);
            expect(noPreferenceInput.checked).toEqual(true);
            expect(noPreferenceInput.value).toBe('No')
            writeFn({ Trainer_Preference_is_Valid_For_NoPreference: true })
        })
    });
});

describe('Check physioRequired Validation', () => {
    test('physioRequired is required', async () => {
        const { button, physioInput1, physioInput2 } = setup()
        act(() => {
            fireEvent.click(button)
        })
        await waitFor(async () => {
            writeFn({ Physio_is_required: false })
            expect(physioInput1.checked).toEqual(false);
            expect(physioInput2.checked).toEqual(false);
            expect(await screen.findByText(/Physiotherapist required./i)).toBeTruthy();
            writeFn({ Physio_is_required: true })
        })
    });
    test('physioRequired is Valid', async () => {
        const { physioInput1, physioInput2 } = setup()
        act(() => {
            fireEvent.click(physioInput1, { target: { value: "Yes" } });
        })
        await waitFor(async () => {
            writeFn({ Physio_is_valid_For_Yes: false })
            expect(physioInput1.checked).toEqual(true);
            expect(physioInput2.checked).toEqual(false);
            expect(physioInput1.value).toBe('Yes')
            writeFn({ Physio_is_valid_For_Yes: true })
        })

        act(() => {
            fireEvent.click(physioInput2, { target: { value: "No" } });
        })
        await waitFor(async () => {
            writeFn({ Physio_is_valid_For_No: false })
            expect(physioInput1.checked).toEqual(false);
            expect(physioInput2.checked).toEqual(true);
            expect(physioInput2.value).toBe('No')
            writeFn({ Physio_is_valid_For_No: true })
        })

    });
});

describe('Package Validation', () => {
    test('Package is required', async () => {
        const { button, package1, package2, package3 } = setup()
        act(() => {
            fireEvent.click(button)
        })
        await waitFor(async () => {
            writeFn({ Package_is_required: false })
            expect(package1.checked).toEqual(false);
            expect(package2.checked).toEqual(false);
            expect(package3.checked).toEqual(false);
            expect(await screen.findByText(/Package required./i)).toBeTruthy();
            writeFn({ Package_is_required: true })
        })
    });
    test('Package is Valid', async () => {
        const { package1, package2, package3 } = setup()
        act(() => {
            fireEvent.click(package1, { target: { value: "One Time appointment" } });
        })
        await waitFor(async () => {
            writeFn({ Package_is_valid_for_One_Time_appointment: false })
            expect(package1.checked).toEqual(true);
            expect(package2.checked).toEqual(false);
            expect(package3.checked).toEqual(false);
            expect(package1.value).toBe('One Time appointment')
            writeFn({ Package_is_valid_for_One_Time_appointment: true })
        })

        act(() => {
            fireEvent.click(package2, { target: { value: "4 Sessions per week" } });
        })
        await waitFor(async () => {

            writeFn({ Package_is_valid_for_4_Sessions_per_week: false })
            expect(package1.checked).toEqual(false);
            expect(package2.checked).toEqual(true);
            expect(package3.checked).toEqual(false);
            expect(package2.value).toBe('4 Sessions per week')
            writeFn({ Package_is_valid_for_4_Sessions_per_week: true })
        })

        act(() => {
            fireEvent.click(package3, { target: { value: "5 Sessions per week" } });
        })
        await waitFor(async () => {
            writeFn({ Package_is_valid_for_5_Sessions_per_week: false })
            expect(package1.checked).toEqual(false);
            expect(package2.checked).toEqual(false);
            expect(package3.checked).toEqual(true);
            expect(package3.value).toBe('5 Sessions per week')
            writeFn({ Package_is_valid_for_5_Sessions_per_week: true })
        })
    });
});


/** ===========================End========================= **/
