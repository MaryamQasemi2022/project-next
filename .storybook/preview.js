// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// }
import React from 'react';
import { css, } from '@emotion/css';
import { ThemeProvider } from '@emotion/react'
import Theme from '../configs/Theme'
import Reset from "../containers/Reset/Reset";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={Theme}>
      <div className={css`
        max-width:600px;
        margin:10px auto;
      `}>
        <Reset />
        <Story />
      </div>
    </ThemeProvider>
  ),
];
