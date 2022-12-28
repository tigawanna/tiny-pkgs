// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import LoadingRipples from "./LoadingRipples";
import { LoadingRipplesProps } from "./LoadingRipples.types";

describe("Test Component", () => {
  let props: LoadingRipplesProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<LoadingRipples {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("LoadingRipples");

    expect(component).toHaveTextContent("harvey was here");
  });
});
