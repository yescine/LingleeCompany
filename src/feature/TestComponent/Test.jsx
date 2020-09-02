import React from 'react'
import SvgIcon from '../Auth/CombinedSigning/components/SvgIcon' 
import {ReactComponent as LoginSvg} from '../../assets/img/signup.svg';

function Index() {
   return (
      <div>
         <SvgIcon 
            svg={LoginSvg}
            size='20rem'
         />
         <LoginSvg/>
      </div>
   )
}

export default Index