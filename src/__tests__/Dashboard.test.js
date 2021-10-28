import React from "react";
import Dashboard from "../views/dashboard/Dashboard";
import { render } from "@testing-library/react";

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
  write.sync('output/text/dashboard_test_report.txt', newData.join('\n'), { newline: true })
  write.sync('output/json/dashboard_test_report.json', JSON.stringify(newData), { newline: true })
}

describe("Dashboard", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(<Dashboard />);
  });
  it("should render successfully", () => {
    let data = { Should_dashboard_render_successfully: false }
    writeFn(data)
    expect(wrapper).toBeTruthy();
    data.Should_dashboard_render_successfully = true
    writeFn(data)
  });

  it("should have a greeting as the title", () => {
    writeFn({ Should_have_a_greeting_as_the_title: false })
    expect(wrapper.getByText("Apply for Trainer")).toBeTruthy();
    writeFn({ Should_have_a_greeting_as_the_title: true })
  });
});
