/**
 * @jest-environment jsdom
 */
import React from "react";
import Button from "./Button";
import mountWidthTheme from "../../utils/mountWithTheme"
import { render,fireEvent} from '@testing-library/react';
// import renderer from 'react-test-renderer';
import { ThemeProvider } from '@emotion/react'
import Theme from '../../configs/Theme';

describe('button component', () => {
  test('render correctly', () => {
    const component =mountWidthTheme(<Button type="primary">sample button</Button>)
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  test(' with loading ', () => {
    const component =mountWidthTheme(<Button loading >loading button</Button>)
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  test(' with disable', () => {
    const component =mountWidthTheme(<Button disabled >disable button</Button>)
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
  // test(' with click', () => {
  //   let variable=0;
  //   const {queryByText, getByText} = render(
  //     <ThemeProvider theme={Theme}>
  //       <Button  onClick={()=>{
  //         variable +=1
  //       }}>
  //         click here
  //         </Button>
  //     </ThemeProvider>
  //   );
  //   fireEvent.click(getByText(/click/))

  //   expect(variable).toBe(0);
  // })
});

it('check click button',()=>{
    let variable="not click";
    const {queryByText, getByText} = render(
      <ThemeProvider theme={Theme}>
        <Button  onClick={()=>{
          variable="clicked"
        }}>
          click
          </Button>
      </ThemeProvider>
    );
    expect(queryByText(/click/)).toBeTruthy();
    fireEvent.click(queryByText(/click/))

    expect(queryByText(/click/)).toBeTruthy();
  
})

