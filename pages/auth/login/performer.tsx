import "../index.less";
import { PureComponent } from "react";
import { connect } from "react-redux";
import FormLogin from "@components/auth/login/performer-login-form";
import Head from "next/head";
import { performerlogin, resetLoginData } from "@redux/auth/actions";
import { ILogin, IUIConfig } from "src/interfaces";
import { FormRegisterPlaceHolder } from "@components/common/layout";
import PageBanner from '../../../src/components/homepage/PageBanner';

interface IProps {
  requesting: boolean;
  success: boolean;
  error: any;
  data: any;
  performerlogin: Function;
  ui: IUIConfig;
  resetLoginData: Function;
}

class Login extends PureComponent<IProps> {
  static layout = "auth";

  static authenticate = false;

  rememberMe = false;

  componentWillUnmount() {
    const { resetLoginData: resetLogin } = this.props;
    resetLogin();
  }

  submit = (data: ILogin) => {
    const { performerlogin: dispatchPerformerlogin } = this.props;
    dispatchPerformerlogin({
      ...data,
      remember: this.rememberMe,
    });
  };

  render() {
    const { requesting, error, success, ui } = this.props;
    return (
      <>
        <Head>
          <title>{ui?.singularTextModel || "Performer"} Sign-in</title>
        </Head>
        <PageBanner
          pageTitle="Sign In"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Sign In"
          imgClass="bg-1"
        />

        <div className="user-area-all-style log-in-area ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-form-action">
                  <FormLogin
                    requesting={requesting}
                    submit={this.submit.bind(this)}
                    error={error}
                    onRemember={(value) => {
                      this.rememberMe = value;
                    }}
                    success={success}
                    googleReCaptchaEnabled={ui.googleReCaptchaEnabled}
                    googleReCaptchaSiteKey={ui.googleReCaptchaSiteKey}
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="sign-in-img"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStates = (state: any) => ({
  ...state.auth.userLogin,
  ui: state.ui,
});
const mapDispatch = { performerlogin, resetLoginData };
export default connect(mapStates, mapDispatch)(Login);
