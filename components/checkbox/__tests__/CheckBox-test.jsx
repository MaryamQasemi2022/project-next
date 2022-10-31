/**
 * @jest-environment jsdom
 */
import React from "react";
import CheckBox from "../CheckBox";
import { render,fireEvent} from '@testing-library/react';
// afterEach(cleanup);



it('CheckboxWithLabel changes the text after click', () => {
  const {queryByLabelText, getByLabelText} = render(
    <CheckBox labelOn="On" labelOff="Off" />,
  );

  expect(queryByLabelText(/off/i)).toBeTruthy();

  fireEvent.click(getByLabelText(/off/i));

  expect(queryByLabelText(/on/i)).toBeTruthy();
});

// describe('CheckBox changes the text after click', () => {
//   test('render correctly', () => {
//     const {queryByLabelText, getByLabelText} =render(<CheckBox labelOn="On" labelOff="Off" />)
//     expect(queryByLabelText(/off/i)).toBeTruthy()
//     // const tree = component.toJSON();
//     // expect(tree).toMatchSnapshot();
//   })
 
// // expect(getByLabelText(/off/)).toBe(null)
//   // expect(queryByLabelText(/off/i)).toBeTruthy();

//   // fireEvent.click(getByLabelText(/off/i));

//   // expect(queryByLabelText(/on/i)).toBeTruthy();
// });

