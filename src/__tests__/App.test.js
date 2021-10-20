import React from 'react'
import { shallow } from 'enzyme/build'
import App from '../App'
import Dashboard from '../views/dashboard/Dashboard';
import ContactUs from '../views/contactUs/ContactUs';
import CreateAppointment from '../views/createAppointment/CreateAppointment';
import ViewAppointment from '../views/viewAppointment/ViewAppointment';


it('mounts App without crashing', () => {
  const wrapper = shallow(<App />)
  wrapper.unmount()
})

it('mounts DashBoard without crashing', () => {
  const wrapper = shallow(<Dashboard />)
  wrapper.unmount()
})

it('mounts DashBoard without crashing', () => {
  const wrapper = shallow(<ContactUs />)
  wrapper.unmount()
})

it('mounts DashBoard without crashing', () => {
  const wrapper = shallow(<CreateAppointment />)
  wrapper.unmount()
})

it('mounts DashBoard without crashing', () => {
  const wrapper = shallow(<ViewAppointment />)
  wrapper.unmount()
})