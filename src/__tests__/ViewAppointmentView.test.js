import React from 'react'
import { shallow } from 'enzyme/build'
import ViewAppointmentView from '../views/viewAppointment/ViewAppointmentView';


it('mounts ViewAppointment without crashing', () => {
    const wrapper = shallow(<ViewAppointmentView />)
    wrapper.unmount()
})