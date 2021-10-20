import React from 'react'
import { shallow, mount } from 'enzyme/build'
import ContactUs from './ContactUs';


describe("Create Appointment Test", () => {

    it("Should load page without crashing", () => {
        const wrapper = shallow(<ContactUs />)
        wrapper.unmount()
    })

})