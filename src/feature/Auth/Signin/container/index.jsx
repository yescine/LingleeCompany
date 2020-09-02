import React, { useState,useEffect } from "react";
import PropTypes from "prop-types";
import { SigninForm } from "../components/SigninForm";
import style from "./index.module.scss";
import { connect } from "react-redux";
import { signinRequest } from "../actions";
import { withRouter } from "react-router-dom";
import './index.css'

const panel = ['right-panel-active','left-panel-active']

const Signin = props => {
  const [switchStyle,setSwitchStyle] = useState(["container",'left-panel-active'])
  useEffect(() => {
    props.isAuth && props.history.push("/home");
  });

  const handleSwitchPanel = ()=>{
    let currentPanelIndex = panel.indexOf(switchStyle[1]);
    setSwitchStyle(['container', panel[(currentPanelIndex+1)%panel.length]])
  }
  return (
    <>
    <div className={switchStyle.join(' ')}>
			{/* <!-- Sign Up --> */}
			<div className="container__form container--signup">
				<form action="#" className="form" id="form1">
					<h2 className="form__title">Sign Up</h2>
					<input type="text" placeholder="User" className="input" />
					<input type="email" placeholder="Email" className="input" />
					<input type="password" placeholder="Password" className="input" />
					<button className="btn">Sign Up</button>
				</form>
			</div>

			{/* <!-- Sign In --> */}
			<div className="container__form container--signin">
				<div className={"container__form container--signin"}>
          <SigninForm
            onSubmit={props.signinRequest}
            isLoading={props.isLoading}
            isError={props.isError}
            errorMessage={props.errorMessage}
          />
        </div>
			</div>

			{/* <!-- Overlay --> */}
			<div className="container__overlay">
				<div className="overlay">
					<div className="overlay__panel overlay--left">
						<button onClick={handleSwitchPanel} className="btn" id="signIn">Sign In</button>
					</div>
					<div className="overlay__panel overlay--right">
						<button onClick={handleSwitchPanel}  className="btn" id="signUp">Sign Up</button>
					</div>
				</div>
			</div>
		</div>
    </>
  );
};

Signin.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isAuth: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  signinRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isLoading: state.auth.signin.isLoading,
  isAuth: state.auth.signin.isAuth,
  isError: state.auth.signin.isError,
  errorMessage: state.auth.signin.errorMessage
});

export const SigninContainer = withRouter(
  connect(
    mapStateToProps,
    { signinRequest }
  )(Signin)
);
