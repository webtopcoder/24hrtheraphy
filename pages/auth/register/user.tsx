import "../index.less";
import { PureComponent } from "react";
import { message, Alert } from "antd";
import { connect } from "react-redux";
import Head from "next/head";
import RegisterForm from "@components/auth/register/user-register-form";
import PageBanner from '../../../src/components/homepage/PageBanner';
import { IUserRegisterFormData, ICountries, IUIConfig } from "src/interfaces";
import { userRegister } from "@redux/auth/actions";
import Router from "next/router";
import { settingService } from "@services/setting.service";
import { getResponseError } from "@lib/utils";
import moment from "moment";
import { FormRegisterPlaceHolder } from "@components/common/layout";

interface UserRegisterProps {
  requesting: boolean;
  userRegister: Function;
  loggedIn: boolean;
  success: boolean;
  error: any;
  ui: IUIConfig;
}
interface UserRegisterStates {
  error: boolean;
  errorMessage: string;
  countries: ICountries[];
}

class UserRegisterPage extends PureComponent<
  UserRegisterProps,
  UserRegisterStates
> {
  static authenticate = false;

  static layout = "public";

  constructor(props: UserRegisterProps) {
    super(props);
    this.state = {
      error: false,
      errorMessage: "",
      countries: [],
    };
  }

  componentDidMount() {
    this.getContries();
  }

  componentDidUpdate(prevProps: UserRegisterProps) {
    const { success, error } = this.props;
    if (prevProps.success !== success && success) {
      message.success("Congrats, your account has been created");
      Router.push("/auth/login");
    }

    if (prevProps.error !== error && error) {
      message.error(getResponseError(error));
    }
  }

  async getContries() {
    try {
      const countries = await settingService.getCountries();
      this.setState({ countries: countries.data });
    } catch (error) {
      this.setState({ error: true, errorMessage: getResponseError(error) });
    }
  }

  submit(data: IUserRegisterFormData) {
    const { userRegister: dispatchUserRegister } = this.props;
    let newData = { ...data };
    if (data.dateOfBirth) {
      newData = {
        ...data,
        dateOfBirth: moment(data.dateOfBirth).toISOString(),
      };
      // if (data.dateOfBirth) {
      //   data.dateOfBirth = moment(data.dateOfBirth).toISOString();
    }

    dispatchUserRegister(newData);
  }

  render() {
    const { requesting, ui } = this.props;
    const { error, errorMessage, countries } = this.state;
    return (
      <>
        <Head>
          <title>User Register</title>
        </Head>
        <PageBanner
          pageTitle="Sign Up"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Sign Up"
          imgClass="bg-1"
        />
        <div className="user-area-all-style log-in-area ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-form-action">
                  {errorMessage && (
                    <Alert type="error" message="Error request" banner />
                  )}
                  <RegisterForm
                    singularTextModel={ui?.singularTextModel || "Performer"}
                    error={error}
                    onFinish={this.submit.bind(this)}
                    submiting={requesting}
                    countries={countries}
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

const mapStateToProps = (state) => ({
  ui: state.ui,
  loggedIn: state.auth.loggedIn,
  ...state.auth.userRegister,
});
const mapDispatch = { userRegister };
export default connect(mapStateToProps, mapDispatch)(UserRegisterPage);
