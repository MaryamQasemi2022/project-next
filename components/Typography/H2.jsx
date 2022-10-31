import React from "react";
import {  useTheme } from '@emotion/react'
import { css,} from '@emotion/css';
const H2=({children,align='right'})=>{
  const theme=useTheme()
  return(
    <h2 className={css`
    text-align:${align};
    margin: ${theme.spaces[4]} 0 ;
    font-weight: ${theme.typography.h2.fontWeight};
    line-height: ${theme.typography.h2.lineHeight};
    font-size: ${theme.typography.h2.fontSize}rem;
  }
    `}>{children}</h2>
  )
}
export default H2;

