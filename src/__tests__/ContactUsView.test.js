import React from 'react'
import { shallow } from 'enzyme/build'
import ContactUsView from '../views/contactUs/ContactUsView';


it('mounts ContactUs without crashing', () => {
    const wrapper = shallow(<ContactUsView />)
    wrapper.unmount()
})
