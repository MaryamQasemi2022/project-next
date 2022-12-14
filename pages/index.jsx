
import React from 'react'
import Head from 'next/head'
import { css,  } from '@emotion/css'
import JobCardList from '../containers/JobCardList/JobCardList';
import { GET_LIST_JOB_ACTION } from '../actions';
import { useSelector} from 'react-redux';
import CheckBox from '../components/checkbox/CheckBox';
const Home=({state})=> {
/////////////ssr/////////
 const{auth,job}=state

  /////////////client side rendering/////////
  // const allStates=useSelector(state=>state)
  // const {auth,job}=allState;
  // console.log("allStates",allStates)

  return (
    <div >
      <Head>
        <title>صفحه اصلی</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={css`
      text-align:center;
      `}>
      home page
      <CheckBox labelOn="On" labelOff="Off" />
      {auth.logged?<h1>به صفحه من خوش آمدید کاربر{auth.user.name}</h1>:<h1>you be logged</h1>}
      </div> 
      <hr />
      <JobCardList state={state}/>
      </div>
  
  )
}

Home.getInitialProps=async({reduxStore})=> {
  await reduxStore.dispatch(GET_LIST_JOB_ACTION())
  const state=reduxStore.getState()

  return{state}
}





export default Home;
