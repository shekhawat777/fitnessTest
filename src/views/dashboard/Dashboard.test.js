import React from 'react'
import { shallow } from 'enzyme/build'
import Dashboard from './Dashboard';


describe("Create Appointment Test", () => {

    it("Should load page without crashing", () => {
        const wrapper = shallow(<Dashboard />)
        wrapper.unmount()
    })

})