// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ErrorBoundary from "./ErrorBoundary";
import { ErrorBoundaryProps } from "./ErrorBoundary.types";

describe("Test Component", () => {
  let props: ErrorBoundaryProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<ErrorBoundary {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("ErrorBoundary");

    expect(component).toHaveTextContent("harvey was here");
  });
});
