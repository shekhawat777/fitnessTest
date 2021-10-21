import React from 'react'
import { shallow } from 'enzyme/build'
import CreateAppointmentView from '../views/createAppointment/CreateAppointmentView';

it('mounts CreateAppointment without crashing', () => {
    const wrapper = shallow(<CreateAppointmentView />)
    wrapper.unmount()
})
