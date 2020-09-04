import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { RestorePasswordForm } from "../components/RestorePasswordForm";
import { connect } from "react-redux";
import { restorePasswordRequest } from "../actions";
import { withRouter, useHistory } from "react-router-dom";
import {Grid, Typography} from '@material-ui/core'
import { Button } from "antd";
import {ReactComponent as MailSentSvg} from '../../../../assets/img/mailSent.svg';
import style from "./index.module.scss";

const RestorePassword = props => {
  const history = useHistory();

  useEffect(() => {
    props.isAuth && props.history.push("/home");
  });

  return (
    <div className={style.restorePasswordWrapper}>
      {props.isSuccess ? (
				<div style={{textAlign:'center'}} >
					<Grid container direction="row" justify="center" alignItems="center">
						<Grid item xs={12}>
							<MailSentSvg style={{height:'20rem'}}/>
						</Grid>
						<Grid item xs={12}>
							<Typography variant="caption" >Password Reset, link sent to your email.</Typography>
						</Grid>
						<Grid item xs={12}>
							<Button
								type="primary"
								style={{ width: "30%",backgroundColor:"#215CE1" }}	
								onClick={()=>history.push('/')}
							>
								Login
							</Button>
						</Grid>
					</Grid>
				</div>
      ) : (
        <RestorePasswordForm
          onSubmit={props.restorePasswordRequest}
          isLoading={props.isLoading}
          isError={props.isError}
          errorMessage={props.errorMessage}
        />
      )}
    </div>
  );
};

RestorePassword.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isAuth: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  restorePasswordRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isLoading: state.auth.restorePassword.isLoading,
  isAuth: state.auth.signin.isAuth,
  isError: state.auth.restorePassword.isError,
  isSuccess: state.auth.restorePassword.isSuccess,
  errorMessage: state.auth.restorePassword.errorMessage
});

export const RestorePasswordContainer = withRouter(
  connect(
    mapStateToProps,
    { restorePasswordRequest }
  )(RestorePassword)
);
