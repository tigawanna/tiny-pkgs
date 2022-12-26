// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import QueryStateWrapper from "./QueryStateWrapper";
import { QueryStateWrapperProps } from "./QueryStateWrapper.types";

describe("Test Component", () => {
  let props: QueryStateWrapperProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<QueryStateWrapper {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("QueryStateWrapper");

    expect(component).toHaveTextContent("harvey was here");
  });
});
