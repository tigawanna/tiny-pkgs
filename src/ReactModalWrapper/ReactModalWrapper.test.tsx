// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ReactModalWrapper from "./ReactModalWrapper";
import { ReactModalWrapperProps } from "./ReactModalWrapper.types";

describe("Test Component", () => {
  let props: ReactModalWrapperProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<ReactModalWrapper {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("ReactModalWrapper");

    expect(component).toHaveTextContent("harvey was here");
  });
});
