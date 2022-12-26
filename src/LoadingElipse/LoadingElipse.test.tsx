// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import LoadingElipse from "./LoadingElipse";
import { LoadingElipseProps } from "./LoadingElipse.types";

describe("Test Component", () => {
  let props: LoadingElipseProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<LoadingElipse {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("LoadingElipse");

    expect(component).toHaveTextContent("harvey was here");
  });
});
