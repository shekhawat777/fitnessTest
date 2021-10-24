import React from "react";
import ViewAppointmentView from "../views/viewAppointment/ViewAppointmentView";
import { queryByAttribute, render, screen } from "@testing-library/react";
import {
  getAllCells,
  getAllRows,
  getByRowgroupType,
  queryByRowgroupType,
  getAllRowsByRowgroupType
} from 'testing-library-table-queries'

const getById = queryByAttribute.bind(null, 'id');

const fields = ['S.No.', 'Name', 'email', 'phone', 'age', 'completeAddress', 'trainerPreferences', 'physioRequired', 'package', 'totalAmount']
const data1 = [
  {
    firstName: "Ravi",
    lastName: "Verma",
    email: "ravi@gmail.com",
    mobile: "08767675645",
    age: "23",
    streetName: "Millanium Road",
    city: "Lucknow",
    state: "Uttar Pradesh",
    country: "India",
    pinCode: "226014",
    trainerPreferences: "male",
    physioRequired: "No",
    weeks: "2",
    package: "5 Sessions per week",
    totalAmount: 3000,
    id: 1
  },
  {
    firstName: "Ravindra",
    lastName: "Verma",
    email: "ravi@gmail.com",
    mobile: "08767675645",
    age: "45",
    streetName: "Millanium Road",
    city: "Lucknow",
    state: "Uttar Pradesh",
    country: "India",
    pinCode: "226014",
    trainerPreferences: "Female",
    physioRequired: "Yes",
    weeks: 1,
    package: "One Time appointment",
    totalAmount: 500,
    id: 2
  },
  {
    firstName: "Ravi",
    lastName: "Verma",
    email: "ravi@gmail.com",
    mobile: "08767675645",
    age: "50",
    streetName: "Millanium Road",
    city: "Lucknow",
    state: "Uttar Pradesh",
    country: "India",
    pinCode: "226016",
    trainerPreferences: "male",
    physioRequired: "No",
    weeks: "2",
    package: "5 Sessions per week",
    totalAmount: 3000,
    id: 3
  },
  {
    firstName: "Ravi",
    lastName: "Verma",
    email: "ravi@gmail.com",
    mobile: "08767675645",
    age: "50",
    streetName: "Millanium Road",
    city: "Lucknow",
    state: "Uttar Pradesh",
    country: "India",
    pinCode: "226016",
    trainerPreferences: "male",
    physioRequired: "No",
    weeks: "2",
    package: "5 Sessions per week",
    totalAmount: 3000,
    id: 4
  }
]
const data = []

describe("View Appointment Test cases", () => {
  let testData = data
  test("It should render table", async () => {
    const { container } = render(<ViewAppointmentView fields={fields} data={testData} />)
    const rows = getAllRows(container)
    const cells = getAllCells(container)
    const header = getByRowgroupType(container, 'thead')
    const footer = queryByRowgroupType(container, 'tfoot')
    const tBodyRow = getAllRowsByRowgroupType(container, 'tbody')

    expect(await screen.findByText(/View Appointment/i)).toBeTruthy();

    if (testData.length) {
      expect(await screen.queryByText(/No items/i)).toBeFalsy();
      expect(await screen.queryByText(/Complete Address/i)).toBeTruthy();
      //Test number of rows and cells
      expect(rows).toHaveLength(testData.length + 1);
      expect(tBodyRow).toHaveLength(testData.length)
      expect(cells).toHaveLength((fields.length * (testData.length + 1)))
      //Test header/footer visibility
      expect(header).toBeTruthy();
      expect(footer).toBeFalsy();
      expect(footer).toBeNull();

    } else {
      expect(await screen.queryByText(/No items/i)).toBeTruthy();
      expect(await screen.queryByText(/Complete Address/i)).toBeTruthy();
      expect(rows).toHaveLength(2);
      expect(tBodyRow).toHaveLength(1)
      expect(cells).toHaveLength(fields.length + 1)
      expect(header).toBeTruthy();
      expect(footer).toBeNull();
    }
  })
})
