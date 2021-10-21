import React from 'react'
import { shallow } from 'enzyme/build'
import Dashboard from '../views/dashboard/Dashboard';

it('mounts DashBoard without crashing', () => {
    const wrapper = shallow(<Dashboard />)
    wrapper.unmount()
})
