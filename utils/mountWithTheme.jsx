import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from '@emotion/react'
import Theme from '../configs/Theme';

const mountWidthTheme = (children) => {
  return renderer.create(
    <ThemeProvider theme={Theme}>
      {children}
    </ThemeProvider>
  );

}

export default mountWidthTheme;
