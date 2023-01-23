import '../index.less';
import { PureComponent } from 'react';
import Head from 'next/head';
import { authService } from 'src/services/auth.service';
import {
  Form, message, Input, Button, Select
} from 'antd';
import PageBanner from '../../../src/components/homepage/PageBanner';
import { IForgotPasswordFormData, IUIConfig } from 'src/interfaces';
import { getResponseError } from 'src/lib/utils';
import Link from 'next/link';
import { connect } from 'react-redux';
import { FormRegisterPlaceHolder } from '@components/common/layout';

interface IProps {
  ui: IUIConfig;
}

interface IStates {
  loading: boolean;
}

class ForgotPasswordPage extends PureComponent<IProps, IStates> {
  static layout = 'auth';

  static authenticate = false;

  constructor(props: IProps) {
    super(props);
    this.state = {
      loading: false
    };
  }

  async onFinish(data: IForgotPasswordFormData) {
    try {
      this.setState({ loading: true });
      await authService.forgotPassword(data.email, data.type);
      message.success('New password have been sent to your email');
      this.setState({ loading: false });
    } catch (e) {
      const err = await Promise.resolve(e);
      message.error(getResponseError(err));
      this.setState({ loading: false });
    }
  }

  render() {
    const { loading } = this.state;
    const { ui } = this.props;
    return (
      <>
        <Head>
          <title>Forgot Password</title>
        </Head>
        <PageBanner
          pageTitle="Sign In"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Recover Password!"
          imgClass="bg-3"
        />

        <div className="user-area-all-style recover-password-area ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="contact-form-action">
                  <div className="form-heading text-center">
                    <h3 className="form-title">Reset Password!</h3>
                    <p className="reset-desc">Enter the email of your account to reset the password. Then you will receive a link to email to reset the password. If you have any issue about reset password <Link href="/contact"><a>Contact Us.</a></Link></p>
                  </div>
                  <Form
                    onFinish={this.onFinish.bind(this)}
                    layout="vertical"
                    initialValues={{ type: 'user' }}
                  >
                    <Form.Item
                      label="Type"
                      name="type"
                      key="type"
                      rules={[{ required: true }]}
                    >
                      <Select size="large">
                        <Select.Option value="user" key="user">
                          User
                        </Select.Option>
                        <Select.Option value="performer" key="performer">
                          {ui?.singularTextModel || 'Performer'}
                        </Select.Option>
                        <Select.Option value="studio" key="studio">
                          Studio
                        </Select.Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      name="email"
                      key="email"
                      label="Email"
                      rules={[
                        { type: 'email', message: 'The input is not valid E-mail!' },
                        { required: true, message: 'Please input your email!' }
                      ]}
                    >
                      <Input size="large" type="email" placeholder="abc@example.com" />
                    </Form.Item>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        margin: '15px 0'
                      }}
                    >
                      <Link href="/auth/resend-verification-email">
                        <a>Resend Email Verification</a>
                      </Link>
                      <Link href="/auth/login/user">
                        <a>Login</a>
                      </Link>
                    </div>
                    <Form.Item>
                      <Button
                        type="primary"
                        disabled={loading}
                        loading={loading}
                        htmlType="submit"
                        style={{
                          display: 'table',
                          justifyContent: 'space-between',
                          margin: '0 auto 0',
                          padding: '10px 40px',
                          height: '100%'
                        }}
                      >
                        Submit
                      </Button>
                    </Form.Item>

                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStates = (state: any) => ({
  ui: state.ui
});
const mapDispatch = {};
export default connect(mapStates, mapDispatch)(ForgotPasswordPage);
