import React from "react";
import { shallow, mount } from "enzyme";
import { configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import DialogComponent from "./dialog";
import { Wrapper } from "./styles";

configure({ adapter: new Adapter() });

describe("App Component", () => {
  it("Shallow renderin open", () => {
    const handleOpenMock = jest.fn();
    const wrapper = shallow(
      <DialogComponent open={true} handleOpen={handleOpenMock} />
    );
    expect(wrapper.find(Wrapper).exists()).toEqual(true);
  })
});
