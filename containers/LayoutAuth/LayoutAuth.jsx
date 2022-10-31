import React from "react";
import { css,} from '@emotion/css';

import {Img} from "../../components"

const LayoutAuth=({children})=>{
  return(
    <div className={css`
    display:flex;
    height:100vh;
    align-items:center;
    flex-direction:column;
    `}>
    <Img width='200px' height='200px' src='logo/logo.png' alt='logo login'/>
      <div>{children}</div>
    </div>
  )
}

export default LayoutAuth;
