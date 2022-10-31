import React from "react";
import {  useTheme } from '@emotion/react'
import { css,} from '@emotion/css';
const H1=({children,align='right'})=>{
  const theme=useTheme()
  return(
    <h1 className={css`
    text-align:${align};
    margin: ${theme.spaces[4]} 0 ;
    font-weight: ${theme.typography.h1.fontWeight};
    line-height: ${theme.typography.h1.lineHeight};
    margin-top: 0;
    font-size: ${theme.typography.h1.fontSize}rem;
  }
    `}>{children}</h1>
  )
}
export default H1;

