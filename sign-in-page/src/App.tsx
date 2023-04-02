
import React from 'react' ;
import './App.css';



import Typo from './components/atoms/typography/Typo';
import './components/atoms/typography/Typo.css';

import Input from './components/molecules/input/Input';
import './components/molecules/input/Input.css';

import Checkbox from './components/atoms/checkbox/Checkbox';
import './components/atoms/checkbox/Checkbox.css';

import Button from './components/atoms/button/Button';
import './components/atoms/button/Button.css';

import { ReactComponent as Google } from '../src/images/Google.svg';
import { ReactComponent as Github } from '../src/images/Github.svg';

import { Divider } from '@mui/material';


function App() {
  return (
    <div className="App">

      <div className='container'>
        <div className='div2'>
          <Typo type='typo' label={'Sign in'} spnItem={''} heading={'h5'} variant2={'var1'}></Typo>
          <Typo type='typo' label={'Please enter your login credentials'} spnItem={''} heading={'subtitle1'} variant2={''}></Typo>
          <Input type='input field' cls={'email'} text={'rhernandez@gamil.com'} level={'Email'} typeOfField={'text'}></Input>
          <Input type='input field' cls={'password'} text={'********'} level={'Password'} typeOfField={'text'}></Input>
        </div>

        <div className='checkbox1'>
          <Checkbox type='checkbox' cls={'checkbox1'} level={'Rememberme'}></Checkbox>
          <Typo type='typo' label={''} spnItem={'Forgot password?'} heading={'subtitle1'} variant2={'var2'}></Typo>
        </div>

        <div className='div3'>
          <Button type='button' label={'Sign in'} color={'sign-in'} ></Button>

          <Divider className='divider'>or</Divider>

          <Button type='button' url={<Google />} label={'Sign in with Google'} color={'signinwithgoogle'}></Button>
          <Button type='button' url={<Github />} label={'Sign in with Github'} color={'signinwithgithub'}></Button>
        </div>
        <div className='div4'>
          <Typo type='typo' label={`Didn't have an account? `} spnItem={'Sign up'} heading={'subtitle1'} variant2={'sign-up'}></Typo>
        </div>

      </div>

    </div>
  );
}

export default App;
