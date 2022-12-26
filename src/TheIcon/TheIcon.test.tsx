// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import TheIcon from "./TheIcon";
import { TheIconProps } from "./TheIcon.types";

describe("Test Component", () => {
  let props: TheIconProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<TheIcon {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("TheIcon");

    expect(component).toHaveTextContent("harvey was here");
  });
});
