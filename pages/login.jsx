import React,{useState} from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux';
import {LOGIN_ACTION} from '../actions/index';
import  { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import LayoutAuth from '../containers/LayoutAuth/LayoutAuth'
import{validateEmail,validateSubject} from "../components/utils/utils"
import { 
  Hyperlink,
  InputEmail,
   InputPassword,
   Button,
   FormControl,
   H2 } from '../components'

export default function Login() {
  const router=useRouter()
  const dispatch=useDispatch()
  const {loading}=useSelector(state=>state.auth)
// console.log("auth",auth)
  const[formValue,setFormValue]=useState({email:'',password:''})

  const handleOnChange=(name,value)=>{
   setFormValue({...formValue,[name]:value})
  }

// console.log('process',process.env.NEXT_PUBLIC_ABSOLUTE_URL,"key",process.env.NEXT_PUBLIC_SECRET_KEY)
 const handleSubmit= (e)=>{
  if(e){ e.preventDefault()}
  console.log('sucess',formValue);




  dispatch(LOGIN_ACTION())
  router.push('/')
  // if(!validateEmail(formValue.email)){
  //   console.log('your email is wrong!')
  // }
  
  // if(!validateSubject(formValue.password)){
  //   console.log('your pass is wrong!')
  // }
  // if(validateEmail(formValue.email) && validateSubject(formValue.password)){
  //   console.log('sucess',formValue);
  //   router.push('/')

  // }
 
 
 }
  return (
    <div >
      <Head>
        <title>ورورد</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutAuth>
        {/* {auth.loaded && <img src='loading/loading.gif'/>} */}
      <H2 align='center'>به ریموت جاب خوش آمدید.</H2>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <InputEmail onChange={(value)=>handleOnChange('email',value)} placeholder="ایمیل"/>
          </FormControl>
          <FormControl>
            <InputPassword onChange={(value)=>handleOnChange('password',value)} placeholder="کلمه عبور"/>
          </FormControl>
        <FormControl>
        <Button type="submit"  loading={loading}>ارسال</Button>
        </FormControl>

        <Hyperlink href='/register'>
        برو به صفحه ی ثبت نام
        </Hyperlink>

        <Hyperlink href='/forget'>
        آیا رمز عبور خود را فراموش کرده اید؟   
        </Hyperlink>
        <Hyperlink href='/reset'>
        تغییر کلمه عبور  
        </Hyperlink>

        </form>
    
      </LayoutAuth>
    </div>
  )
}
