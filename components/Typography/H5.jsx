import React from "react";
import {  useTheme } from '@emotion/react'
import { css,} from '@emotion/css';
const H5=({children,align='right'})=>{
  const theme=useTheme()
  return(
    <h5 className={css`
    text-align:${align};
    margin: ${theme.spaces[4]} 0 ;
    font-weight: ${theme.typography.h5.fontWeight};
    line-height: ${theme.typography.h5.lineHeight};
    font-size: ${theme.typography.h5.fontSize}rem;
  }
    `}>{children}</h5>
  )
}
export default H5;

