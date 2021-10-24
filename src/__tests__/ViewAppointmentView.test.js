import React from "react";
import ViewAppointmentView from "../views/viewAppointment/ViewAppointmentView";
import { render } from "@testing-library/react";
import axios from "axios";
import { apiService } from "../reusable/Api";
describe("ViewAppointmentComponent", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(<ViewAppointmentView />);
  });
  it("should render successfully", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should have a greeting as the title", () => {
    expect(wrapper.getByText("View Appointment")).toBeTruthy();
  });

  it("should show user header length", async () => {
    const rowHeaderLength = wrapper.baseElement.querySelectorAll("th").length;

    expect(rowHeaderLength).toBe(10);
  });

  it("should have table header S.NO ", () => {
    const firstcolumn = wrapper.baseElement.querySelectorAll("th");
    expect(firstcolumn[0].querySelector("div")?.innerHTML).toBe("S No");
  });

  it("should have table header Name ", () => {
    const firstcolumn = wrapper.baseElement.querySelectorAll("th");
    expect(firstcolumn[1].querySelector("div")?.innerHTML).toBe("Name");
  });

  it("should have table header Phone ", () => {
    const firstcolumn = wrapper.baseElement.querySelectorAll("th");
    expect(firstcolumn[2].querySelector("div")?.innerHTML).toBe("Phone");
  });

  it("should have table header Email ", () => {
    const firstcolumn = wrapper.baseElement.querySelectorAll("th");
    expect(firstcolumn[3].querySelector("div")?.innerHTML).toBe("Email");
  });

  it("should have table header Age ", () => {
    const firstcolumn = wrapper.baseElement.querySelectorAll("th");
    expect(firstcolumn[4].querySelector("div")?.innerHTML).toBe("Age");
  });

  it("should have table header Complete Address", () => {
    const firstcolumn = wrapper.baseElement.querySelectorAll("th");
    expect(firstcolumn[5].querySelector("div")?.innerHTML).toBe(
      "Completeaddress"
    );
  });

  it("should have table header Trainer Preference ", () => {
    const firstcolumn = wrapper.baseElement.querySelectorAll("th");
    expect(firstcolumn[6].querySelector("div")?.innerHTML).toBe(
      "Trainerpreference"
    );
  });

  it("should have table header Physio Required", () => {
    const firstcolumn = wrapper.baseElement.querySelectorAll("th");
    expect(firstcolumn[7].querySelector("div")?.innerHTML).toBe(
      "Physiorequired"
    );
  });

  it("should have table header Package", () => {
    const firstcolumn = wrapper.baseElement.querySelectorAll("th");
    expect(firstcolumn[8].querySelector("div")?.innerHTML).toBe("Package");
  });

  it("should have table header Total Amount", () => {
    const firstcolumn = wrapper.baseElement.querySelectorAll("th");
    expect(firstcolumn[9].querySelector("div")?.innerHTML).toBe("Totalamount");
  });
});
describe.skip("View Appointment Integrate Test Apis", () => {
  describe("getResource", () => {
    describe("with success", () => {
      const url = "https://jsonplaceholder.typicode.com/posts";
      const onComplete = jest.fn();
      const data = {};

      beforeEach(() => {
        axios.get.mockResolvedValue(data);
      });

      it("should call axios get with given url", () => {
        apiService(url, onComplete);
        expect(axios.get).toBeCalledWith(url);
      });

      it("should call onComplete callback with response", async () => {
        // do not forget 'async'
        const res = await apiService("GET", "/", null);
        console.log(res);
        expect(onComplete).toBeCalledWith(data);
      });
    });
  });
});
