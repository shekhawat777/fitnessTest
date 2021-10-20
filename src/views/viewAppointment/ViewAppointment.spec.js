import React from 'react'
import { shallow } from 'enzyme/build'
import ViewAppointment from './ViewAppointment';


describe("Create Appointment Test", () => {

    it("Should load page without crashing", () => {
        const wrapper = shallow(<ViewAppointment />)
        wrapper.unmount()
    })

})