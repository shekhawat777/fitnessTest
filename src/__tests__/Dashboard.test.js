import React, { Component } from "react";
import Dashboard from "../views/dashboard/Dashboard";
import { render } from "@testing-library/react";

//==== test cases For txt file===============
import write from 'write'
let data = []
const writeFn = (testData) => {
  data.push(testData)
  write.sync('output/json/dashboard_test_report.json', JSON.stringify(data), { newline: true })
  write.sync('output/text/dashboard_test_report.txt', JSON.stringify(data), { newline: true })
}

describe("Dashboard", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(<Dashboard />);
  });
  it("should render successfully", () => {
    expect(wrapper).toBeTruthy();
    writeFn({ Should_dashboard_render_successfully: true })
  });

  it("should have a greeting as the title", () => {
    expect(wrapper.getByText("Apply for Trainer")).toBeTruthy();
    writeFn({ Should_have_a_greeting_as_the_title: true })
  });
});
