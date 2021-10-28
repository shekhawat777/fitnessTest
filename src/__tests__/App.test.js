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
  let index1 = data.findIndex((e) => {
    let [key1] = Object.entries(e)[0];
    let [key2] = Object.entries(testData)[0];
    return key1 === key2
  });
  if (index1 === -1) {
    data.push(testData)
  } else {
    data[index1] = testData
  }
  let newData = []
  data.map((obj) => {
    let [key, val] = Object.entries(obj)[0];
    return newData.push(`${key}=${val}`)
  });
  write.sync('output/text/app_test_report.txt', newData.join('\n'), { newline: true })
  write.sync('output/json/app_test_report.json', JSON.stringify(newData), { newline: true })
}


it('mounts App without crashing', () => {
  let data = { Should_app_mount_without_crashing: false }
  const wrapper = shallow(<App />)
  writeFn(data)
  expect(wrapper.getElements()).toMatchSnapshot();
  data.Should_app_mount_without_crashing = true
  writeFn(data)
  wrapper.unmount()
})

it('mounts DashBoard without crashing', () => {
  let data = { Should_dashboard_mount_without_crashing: false }
  const wrapper = shallow(<Dashboard />)
  writeFn(data)
  expect(wrapper.getElements()).toMatchSnapshot();
  data.Should_dashboard_mount_without_crashing = true
  writeFn(data)
  wrapper.unmount()
})

it('mounts ContactUs without crashing', () => {
  let data = { Should_contactUs_mount_without_crashing: false }
  const wrapper = shallow(<ContactUs />)
  writeFn(data)
  expect(wrapper.getElements()).toMatchSnapshot();
  data.Should_contactUs_mount_without_crashing = true
  writeFn(data)
  wrapper.unmount()
})

it('mounts CreateAppointment without crashing', () => {
  let data = { Should_CreateAppointment_mount_without_crashing: false }
  const wrapper = shallow(<CreateAppointment />)
  writeFn(data)
  expect(wrapper.getElements()).toMatchSnapshot();
  data.Should_CreateAppointment_mount_without_crashing = true
  writeFn(data)
  wrapper.unmount()
})

it('mounts ViewAppointment without crashing', () => {
  let data = { Should_ViewAppointment_mount_without_crashing: false }
  const wrapper = shallow(<ViewAppointment />)
  writeFn(data)
  expect(wrapper.getElements()).toMatchSnapshot();
  data.Should_ViewAppointment_mount_without_crashing = true
  writeFn(data)
  wrapper.unmount()
})

