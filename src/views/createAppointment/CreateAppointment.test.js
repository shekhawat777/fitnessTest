import React from 'react'
import { shallow } from 'enzyme/build'
import CreateAppointment from './CreateAppointment';


describe("Create Appointment Test", () => {

    it("Should load page without crashing", () => {
        const wrapper = shallow(<CreateAppointment />)
        wrapper.unmount()
    })

})