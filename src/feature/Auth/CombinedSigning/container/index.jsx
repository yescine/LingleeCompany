import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from "react-router-dom";
import { SigninContainer as SigninForm } from "../../Signin";
import {SignupContainer as SignupForm} from '../../Signup'
import {ReactComponent as SignupSvg} from '../../../../assets/img/signup.svg';
import {ReactComponent as SigninSvg} from '../../../../assets/img/signin.svg';
import {ReactComponent as SuccessRegisterSvg} from '../../../../assets/img/successRegister.svg';
import {ReactComponent as TickSvg} from '../../../../assets/img/tick.svg';
import {Typography,Grid} from '@material-ui/core';
import { Button } from "antd";
import './index.css'

const panel = ['right-panel-active','left-panel-active']

const CombinedSigningPannel = (props) => {
   const [switchStyle,setSwitchStyle] = useState(["container",'left-panel-active'])

   const handleSwitchPanel = (props)=>{
      let currentPanelIndex = panel.indexOf(switchStyle[1]);
      setSwitchStyle(['container', panel[(currentPanelIndex+1)%panel.length]])
	 }

   return (
		<>
		{props.isSuccess?
			<div className="container">
				<div className="successWrapper">
					<Grid container direction="row" justify="center" alignItems="center">
						<Grid item xs={12}>
							<SuccessRegisterSvg style={{height:'20rem'}}/>
						</Grid>
						<Grid item xs>
							<Typography variant="caption" ><TickSvg/>{" "}Email Sent successfully</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography variant="caption" >Please follow the steps as described in email for further registration</Typography>
						</Grid>
						<Grid item xs={12}>
							<Button
								type="primary"
								style={{ width: "30%",backgroundColor:"#215CE1" }}	
								onClick={()=>window.location.reload()}
							>
								Login
							</Button>
						</Grid>
					</Grid>
				</div>
			</div>
		:
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
						<Typography variant="caption" >X Company All rights reserved</Typography>
						{/* <button onClick={handleSwitchPanel} className="btn" id="signIn">Sign In</button> */}
					</div>
					<div className="overlay__panel overlay--right">
						<SigninSvg/>
						<Typography variant="caption" >X Company All rights reserved</Typography>
						{/* <button onClick={handleSwitchPanel}  className="btn" id="signUp">Sign Up</button> */}
					</div>
				</div>
			</div>
		</div>
		}	
    	</>
   )
}

CombinedSigningPannel.propTypes = {
   prop: PropTypes
}

const mapStateToProps = state => {
	return {
		isSuccess: state.auth.signup.isSuccess,
	}
}

const mapDispatchToProps = {
   
}

export const CombinedSigning = withRouter(connect(mapStateToProps, null)(CombinedSigningPannel))
