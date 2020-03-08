import React from "react";
import { create } from "react-test-renderer";
import { ButtonComponent } from './App';

describe("Button component", () => {
  test("Matches the snapshot", () => {
    const button = create(<ButtonComponent text="teste" />);
    
    expect(button.toTree()?.props.text).toBe('teste')
    console.log(button.getInstance())
    expect(button.toJSON()).toMatchSnapshot();
  });
});

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
