import "../index.less";
import { PureComponent } from "react";
import Head from "next/head";
import Router from "next/router";
import { message, Alert } from "antd";
import { connect } from "react-redux";
import { performerRegister } from "@redux/auth/actions";
import RegisterForm from "@components/auth/register/model-register-form";
import { IRegisterFormData, ICountries, IUIConfig } from "src/interfaces";
import { updateUIValue } from "src/redux/ui/actions";
import { settingService } from "@services/setting.service";
import { getResponseError } from "@lib/utils";
import moment from "moment";
import { FormRegisterPlaceHolder } from "@components/common/layout";
import PageBanner from "components/Common/PageBanner";

interface PerformerRegisterProps {
  performerRegister(data: IRegisterFormData): Function;
  error: any;
  data: any;
  loggedIn: boolean;
  success: boolean;
  submiting: boolean;
  ui: IUIConfig;
}
interface PerformerRegisterStates {
  error: boolean;
  errorMessage: string;
  countries: ICountries[];
}

class PerformerRegisterPage extends PureComponent<
  PerformerRegisterProps,
  PerformerRegisterStates
> {
  static authenticate = false;

  static layout = "auth";

  constructor(props: PerformerRegisterProps) {
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

  componentDidUpdate(prevProps: PerformerRegisterProps) {
    const { success, data, error } = this.props;
    if (prevProps.success !== success && success) {
      message.success(
        (data && data.message) ||
          "Your register has been successfully, please wait for our admin approval"
      );
      Router.push("/auth/login/performer");
    }

    if (prevProps.error !== error && error) {
      message.error(getResponseError(error));
    }
  }

  onFinish(data: IRegisterFormData) {
    const { performerRegister: dispatchPerformerRegister } = this.props;
    let newData = { ...data };
    if (data.dateOfBirth) {
      newData = {
        ...data,
        dateOfBirth: moment(data.dateOfBirth).toISOString(),
      };
    }
    // if (data.dateOfBirth) {
    //   data.dateOfBirth = moment(data.dateOfBirth).toISOString();
    // }

    dispatchPerformerRegister(newData);
  }

  async getContries() {
    try {
      const countries = await settingService.getCountries();
      this.setState({ countries: countries.data });
    } catch (error) {
      this.setState({ error: true, errorMessage: getResponseError(error) });
    }
  }

  render() {
    const { submiting, ui } = this.props;
    const { error, errorMessage, countries } = this.state;
    return (
      <>
        <Head>
          <title>{ui?.singularTextModel || "Performer"} Register</title>
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
                    onFinish={this.onFinish.bind(this)}
                    submiting={submiting}
                    countries={countries}
                    error={error}
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
  ...state.auth.performerRegister,
});
const mapDispatchs = { performerRegister, updateUIValue };
export default connect(mapStateToProps, mapDispatchs)(PerformerRegisterPage);
