import React from "react";
import {  useTheme } from '@emotion/react'
import { css,} from '@emotion/css';

const Small=({children,align='right'})=>{
  const theme=useTheme()
  return(
    <small className={css`
    text-align:${align};
    margin-bottom:0;
    font-size: ${theme.typography.small.fontSize}rem;
    font-weight: ${theme.typography.small.fontweight};
    line-height: ${theme.typography.small.lineHeight};
  }
    `}>{children}</small>
  )
}
export default Small;

