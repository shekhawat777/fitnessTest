import React from 'react'
import { shallow } from 'enzyme/build'
import App from '../App'
import Dashboard from '../views/dashboard/Dashboard';
import ContactUs from '../views/contactUs/ContactUs';
import CreateAppointment from '../views/createAppointment/CreateAppointment';
import ViewAppointment from '../views/viewAppointment/ViewAppointment';


it('mounts App without crashing', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.getElements()).toMatchSnapshot();
  wrapper.unmount()
})

it('mounts DashBoard without crashing', () => {
  const wrapper = shallow(<Dashboard />)
  expect(wrapper.getElements()).toMatchSnapshot();
  wrapper.unmount()
})

it('mounts ContactUs without crashing', () => {
  const wrapper = shallow(<ContactUs />)
  expect(wrapper.getElements()).toMatchSnapshot();
  wrapper.unmount()
})

it('mounts CreateAppointment without crashing', () => {
  const wrapper = shallow(<CreateAppointment />)
  expect(wrapper.getElements()).toMatchSnapshot();
  wrapper.unmount()
})

it('mounts ViewAppointment without crashing', () => {
  const wrapper = shallow(<ViewAppointment />)
  expect(wrapper.getElements()).toMatchSnapshot();
  wrapper.unmount()
})