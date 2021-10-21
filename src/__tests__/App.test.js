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

/* describe('Contact US Validation test', () => {
    it('mounts ContactUsView without crashing', () => {
        const wrapper = shallow(<ContactUsView onFormSubmit={onFormSubmit} initialValues={initialValues} />)
        wrapper.unmount()
    })
    it('validates model on button click', async () => {
        const wrapper = mount(
            <ContactUsView onFormSubmit={onFormSubmit} initialValues={initialValues} />
        );
        // console.log(wrapper.debug());
        expect(wrapper.find('.btn').type()).toEqual('button');
        wrapper.find('[tag="form"]').simulate('submit', onFormSubmit)

    });

    await act(() => Promise.resolve()); // To avoid act wrapping warning
}) */
