import React, { Component } from "react";
import Dashboard from "../views/dashboard/Dashboard";
import { render } from "@testing-library/react";
describe("Dashboard", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(<Dashboard />);
  });
  it("should render successfully", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should have a greeting as the title", () => {
    expect(wrapper.getByText("Apply for Trainer")).toBeTruthy();
  });
});
