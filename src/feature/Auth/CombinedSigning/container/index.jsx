import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SigninContainer as SigninForm } from "../../Signin";
import {SignupContainer as SignupForm} from '../../Signup'
import {ReactComponent as SignupSvg} from '../../../../assets/img/signup.svg';
import {ReactComponent as SigninSvg} from '../../../../assets/img/signin.svg';
import {Typography} from '@material-ui/core'
import './index.css'

const panel = ['right-panel-active','left-panel-active']

export const CombinedSigning = (props) => {
   const [switchStyle,setSwitchStyle] = useState(["container",'left-panel-active'])

   const handleSwitchPanel = (props)=>{
      let currentPanelIndex = panel.indexOf(switchStyle[1]);
      setSwitchStyle(['container', panel[(currentPanelIndex+1)%panel.length]])
    }

   return (
      <>
    <div className={switchStyle.join(' ')}>
			{/* <!-- Sign Up --> */}
			<div className="container__form container--signup form">
				<SignupForm changePanel={handleSwitchPanel}/>
			</div>

			{/* <!-- Sign In --> */}
			<div className="container__form container--signin">
				<SigninForm changePanel={handleSwitchPanel}/>
			</div>

			{/* <!-- Overlay --> */}
			<div className="container__overlay">
				<div className="overlay">
					<div className="overlay__panel overlay--left">
						<SignupSvg/>
						<Typography variant="caption" >X company all right reserved</Typography>
						{/* <button onClick={handleSwitchPanel} className="btn" id="signIn">Sign In</button> */}
					</div>
					<div className="overlay__panel overlay--right">
						<SigninSvg/>
						<Typography variant="caption" >X company all right reserved</Typography>
						{/* <button onClick={handleSwitchPanel}  className="btn" id="signUp">Sign Up</button> */}
					</div>
				</div>
			</div>
		</div>
    </>
   )
}

CombinedSigning.propTypes = {
   prop: PropTypes
}

const mapStateToProps = (state) => ({
   
})

const mapDispatchToProps = {
   
}

export default connect(mapStateToProps, mapDispatchToProps)(CombinedSigning)
