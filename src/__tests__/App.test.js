import React from 'react'
import { shallow } from 'enzyme/build'
import App from '../App'
import Dashboard from '../views/dashboard/Dashboard';
import ContactUs from '../views/contactUs/ContactUs';
import CreateAppointment from '../views/createAppointment/CreateAppointment';
import ViewAppointment from '../views/viewAppointment/ViewAppointment';

//==== test cases For txt file===============
import write from 'write'
let data = []
const writeFn = (testData) => {
  data.push(testData)
  write.sync('output/json/app_test_report.json', JSON.stringify(data), { newline: true })
  write.sync('output/text/app_test_report.txt', JSON.stringify(data), { newline: true })
}


it('mounts App without crashing', () => {
  let data = { Should_app_mount_without_crashing: false }
  const wrapper = shallow(<App />)
  expect(wrapper.getElements()).toMatchSnapshot();
  data.Should_app_mount_without_crashing = true
  writeFn(data)
  wrapper.unmount()
})

it('mounts DashBoard without crashing', () => {
  let data = { Should_dashboard_mount_without_crashing: false }
  const wrapper = shallow(<Dashboard />)
  expect(wrapper.getElements()).toMatchSnapshot();
  data.Should_dashboard_mount_without_crashing = true
  writeFn(data)
  wrapper.unmount()
})

it('mounts ContactUs without crashing', () => {
  let data = { Should_contactUs_mount_without_crashing: false }
  const wrapper = shallow(<ContactUs />)
  expect(wrapper.getElements()).toMatchSnapshot();
  data.Should_contactUs_mount_without_crashing = true
  writeFn(data)
  wrapper.unmount()
})

it('mounts CreateAppointment without crashing', () => {
  let data = { Should_CreateAppointment_mount_without_crashing: false }
  const wrapper = shallow(<CreateAppointment />)
  expect(wrapper.getElements()).toMatchSnapshot();
  data.Should_CreateAppointment_mount_without_crashing = true
  writeFn(data)
  wrapper.unmount()
})

it('mounts ViewAppointment without crashing', () => {
  let data = { Should_ViewAppointment_mount_without_crashing: false }
  const wrapper = shallow(<ViewAppointment />)
  expect(wrapper.getElements()).toMatchSnapshot();
  data.Should_ViewAppointment_mount_without_crashing = true
  writeFn(data)
  wrapper.unmount()
})

