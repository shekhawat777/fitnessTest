import React from "react";
import ViewAppointmentView from "../views/viewAppointment/ViewAppointmentView";
import { render, screen } from "@testing-library/react";
import {
  getAllCells,
  getAllRows,
  getByRowgroupType,
  queryByRowgroupType,
  getAllRowsByRowgroupType
} from 'testing-library-table-queries'

//==== test cases For txt file===============
import write from 'write'
let data = []
const writeFn = (testData) => {
  data.push(testData)
  let newData = []
  data.map((obj) => {
    let [key, val] = Object.entries(obj)[0];
    return newData.push(`${key}=${val}`)
  });
  write.sync('output/text/ViewAppointment_test_report.txt', newData.join('\n'), { newline: true })
  write.sync('output/json/ViewAppointment_test_report.json', JSON.stringify(newData), { newline: true })
}


const fields = ['S.No.', 'Name', 'email', 'phone', 'age', 'completeAddress', 'trainerPreferences', 'physioRequired', 'package', 'totalAmount']
const testData = [
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


describe("View Appointment Test cases", () => {
  test("It should render table", async () => {
    const { container } = render(<ViewAppointmentView fields={fields} data={testData} />)
    const rows = getAllRows(container)
    const cells = getAllCells(container)
    const header = getByRowgroupType(container, 'thead')
    const footer = queryByRowgroupType(container, 'tfoot')
    const tBodyRow = getAllRowsByRowgroupType(container, 'tbody')

    expect(await screen.findByText(/View Appointment/i)).toBeTruthy();
    writeFn({ Should_have_View_Appointment_as_the_title: true })

    if (testData.length) {
      expect(await screen.queryByText(/No items/i)).toBeFalsy();
      writeFn({ Should_Not_have_NoItem_Message_For_DataSet: true })
      expect(await screen.queryByText(/Complete Address/i)).toBeTruthy();
      writeFn({ Should_have_CompleteAddress_ColumnName: true })
      //Test number of rows and cells
      expect(rows).toHaveLength(testData.length + 1);
      expect(tBodyRow).toHaveLength(testData.length)
      writeFn({ Should_have_TableBody_With_Data: true })
      expect(cells).toHaveLength((fields.length * (testData.length + 1)))
      //Test header/footer visibility
      expect(header).toBeTruthy();
      writeFn({ Should_have_Header_Of_Table: true })
      expect(footer).toBeFalsy();
      expect(footer).toBeNull();
      writeFn({ Should_NOT_have_Footer_Of_Table: true })

    } else {
      expect(await screen.queryByText(/No items/i)).toBeTruthy();
      writeFn({ Should_have_NoItem_Message_For_No_DataSet: true })
      expect(await screen.queryByText(/Complete Address/i)).toBeTruthy();
      writeFn({ Should_have_CompleteAddress_ColumnName: true })
      expect(rows).toHaveLength(2);
      expect(tBodyRow).toHaveLength(1)
      writeFn({ Should_have_EmptyTableBody: true })
      expect(cells).toHaveLength(fields.length + 1)
      expect(header).toBeTruthy();
      writeFn({ Should_have_Header_Of_Table: true })
      expect(footer).toBeNull();
      writeFn({ Should_NOT_have_Footer_Of_Table: true })
    }
  })
})
