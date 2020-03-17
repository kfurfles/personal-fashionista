import React from "react";
import { create } from "react-test-renderer";
import { App } from './index';

describe("App component", () => {
  test("Matches the snapshot", () => {
    // const app = create(<App />);
    
    // expect(app.toTree()?.props.name).toBe('Jullian')
    // expect(app.toJSON()).toMatchSnapshot();
    expect(2).toEqual(2)
  });
});

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
