import { PureComponent } from 'react';
import {
  IPerformer,
  ICountries,
  IPerformerCategogies,
  IPerformSearch,
  IUIConfig
} from 'src/interfaces';
import Subscribe from '../../components/Common/Subscribe';
import PageBanner from '../../components/Common/PageBanner';
import './index.less';
import { connect } from 'react-redux';
import {
  searchPerformer,
  updatePerformerFavourite,
  updateCurrentPerformer
} from '@redux/performer/actions';
import { loginSuccess } from '@redux/auth/actions';
import { updateCurrentUser } from '@redux/user/actions';
import { updateCurrentStudio } from '@redux/studio/actions';
import { favouriteService } from 'src/services';
import { message } from 'antd';
import { getResponseError } from 'src/lib';
import { withRouter, NextRouter } from 'next/router';
import { SocketContext } from 'src/socket';
import Head from 'next/head';

interface IProps {
  router: NextRouter;
  ui: IUIConfig;
  data: IPerformer[];
  searchPerformer?: Function;
  total?: number;
  success?: boolean;
  error?: any;
  settings?: any;
  searching?: boolean;
  loggedIn?: boolean;
  query?: {
    q: string;
  };
  categories?: IPerformerCategogies[];
  countries?: ICountries[];
  updatePerformerFavourite: Function;
  updateCurrentUser: Function;
  updateCurrentPerformer: Function;
  updateCurrentStudio: Function;
  loginSuccess: Function;
}

interface IStates {
  query: IPerformSearch;
  sort?: {
    name: string;
    sortBy?: string;
  };
}

const initQueryState: IPerformSearch = {
  offset: 0,
  limit: 60,
  gender: '',
  category: '',
  country: '',
  sortBy: '',
  sort: 'desc'
};

class Homepage extends PureComponent<IProps, IStates> {
  private socket;

  constructor(props: IProps) {
    super(props);
    this.state = {
      query: initQueryState
    };
  }

  componentDidMount() {
    this.search();
    this.socket = this.context;
    this.socket.on('modelUpdateStatus', this.search);
    this.socket.on('modelUpdateStreamingStatus', this.search);
  }

  componentDidUpdate(prevProps: IProps, prevStates: IStates) {
    const { router, loggedIn } = this.props;
    const { query } = this.state;
    if (
      router.query.q !== prevProps.router.query.q
      || query !== prevStates.query
    ) {
      this.search();
    }
    if (!loggedIn && loggedIn !== prevProps.loggedIn) {
      this.search();
    }
  }

  componentWillUnmount() {
    this.socket = this.context;
    if (this.socket) {
      this.socket.off('modelUpdateStatus');
      this.socket.off('modelUpdateStreamingStatus');
    }
  }

  async onLike(performer: IPerformer) {
    const {
      updatePerformerFavourite: dispatchUpdatePerformerFavorite
    } = this.props;
    const { _id, isFavorite } = performer;
    try {
      await favouriteService.favorite(_id, isFavorite);
      dispatchUpdatePerformerFavorite(_id);
    } catch (error) {
      const e = await Promise.resolve(error);
      message.error(getResponseError(e));
    }
  }

  setFilter(name: string, value: any) {
    const { query } = this.state;
    this.setState({
      query: {
        ...query,
        [name]: value
      }
    });
  }

  search = () => {
    const { router, searchPerformer: dispatchSearchPerformer } = this.props;
    const { query } = this.state;
    dispatchSearchPerformer({
      ...query,
      ...router.query
    });
  };

  clearFilter() {
    this.setState({
      query: initQueryState
    });
  }

  render() {
    const {
      categories, countries, ui, settings
    } = this.props;
    const { query } = this.state;

    return (
      <>
        <Head>
          <title>{ui?.siteName}</title>
          <meta name="keywords" content={settings?.metaKeywords} />
          <meta
            name="description"
            content={settings?.metaDescription}
          />
          {/* OG tags */}
          <meta
            property="og:title"
            content={settings?.siteName}
            key="title"
          />
          <meta property="og:image" content={settings?.logoUrl} />
          <meta
            property="og:keywords"
            content={settings?.metaKeywords}
          />
          <meta
            property="og:description"
            content={settings?.metaDescription}
          />
        </Head>
        <PageBanner
          pageTitle="Terms & Conditions"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Terms & Conditions"
          imgClass="bg-3"
        />
        <div className="terms-conditions ptb-100">
          <div className="container">
            <div className="single-privacy">
              <h3 className="mt-0">Welcome To XCams Terms Conditions</h3>
              <p>Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern 24hrtherapy.co.uk relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.</p>

              <p style={{ marginLeft: '30px', fontStyle: 'italic' }}>The term “24hrtherapy.co.uk” , or “us” or “we” refers to Camline Enterprises Ltd a company registered in England with registered number 14444669 with its registered office at Cuffley Place, Office Suite 112 Sopers Rd, Cuffley, London, United Kingdom, EN6 4SG</p>
              <p>(“Company” in this Agreement).  The term ‘you’ refers to the user or viewer of our website.</p>
              <p>The “Therapist” means a Life Coach, Therapist or Psychotherapist or any other consultant (collectively known as the “Therapist”) featuring on our website.</p>
              <ul>The use of this website is subject to the following terms of use:
                <li>You must be a physical person over 18 years old with access to the services of 24hrtherapy.co.uk.</li>
                <li>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>
                <li>The Therapists are not our employees and the professional services provided by a Therapist shall be directly between You and the Therapist. You and the Therapist are solely responsible for the conversations which occur while you are in a webcam session with the Therapist.</li>
                <li>We do not refer, endorse, recommend, verify, evaluate or guarantee any services provided by the Consultants, and nothing shall be considered as a referral, endorsement, recommendation or guarantee of any Therapist.</li>
                <li>You as the client are free to choose any Therapist from our website and it is your sole responsibility to ensure the Therapist you select is correct for your needs.</li>
                <li>24hrtherapy.co.uk does not have control over the content of any sessions and therefore cannot accept responsibility as to accuracy of content, given, expressed or implied or as to the suitability of the content for any purpose. 24hrtherapy.co.uk will therefore not be liable, or accept liability, for any harm, injury or damage of whatever nature which may result from content given in any session or from any information supplied in this website.</li>
                <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
                <li>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that the services or information available through this website meet your specific requirements.</li>
                <li>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</li>
                <li>All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.</li>
                <li>Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.</li>
                <li>From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).</li>
                <li>Your use of this website and any dispute arising out of such use of the website is subject to the laws of England and Wales. Disputes arising in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.</li>
              </ul>

              <p>The use of certain services offered by 24hrtherapy.co.uk may be subject to compliance with specific conditions. These specific conditions are considered an integral part of these Conditions of Use. </p>
              <p>24hrtherapy.co.uk reserves the right to modify at any time these Terms and Conditions. It is therefore advised to regularly consult the latest version of the Terms and Conditions at the following address:</p>

              <h3>Description of the Services</h3>
              <p>24hrtherapy.co.uk is a website intended for the consultation of qualified Therapists via Webcam and chat.</p>
              <p>24hrtherapy.co.uk provides to the Client, via Internet, paid counselling/ therapy, life coaching sessions with qualified therapists.</p>

              <h3>Webcam Video Sessions</h3>
              <p>Webcam sessions require tokens in order to connect with your chosen therapist, tokens can be purchased using PayPal this can be done once you are logged into your account. </p>

              <h3>Privacy policy</h3>
              <p>We do not store credit card details, nor do we share financial details with any 3rd parties.</p>

              <h3>Credit Card Services</h3>
              <p>To use our credit card services you must either be the cardholder, or the cardholder must be present when the booking is made. You must be over 18 to use the service.</p>
              <p>All charges are made in Sterling (GBP). The transactions will show as ‘Camline’ on credit card/bank statements. International callers will be charged in British Pounds.</p>
              <p>Package prices are clearly visible on the website under “Our fees” page and can be subject to change without notice.</p>

              <h3>Promotional Offers </h3>
              <p>All promotional offers are only open to Clients that have positively opted- in to our marketing opportunities. Each Client wishing to take up a promotional offer may be asked to provide an email address and/or mobile phone prior to the acceptance of the offer. A maximum of one different offer is allowed per household per day. All promotion offers will be clearly visible on the website.</p>

              <h3>Connection</h3>
              <p>To access the website ‘24hrtherapy.co.uk’ and use its services, the user must have Internet access either directly or through devices that have access to Internet content. Any telecommunication-related costs that enable the connection to the Internet and the website remain the sole responsibility of the user.</p>
              <p>The User must also have of all necessary equipment to enable the connection to the Internet, including a computer and modem or other connection tools.</p>

              <h3>Processing of personal information</h3>
              <p>You can contact 24hrtherapy.co.uk regarding the arrangement, preservation, updating and use of personal information and exercise their rights of access, modification and / or opposition by writing to the following address: Cuffley Place, Office Suite 112 Sopers Rd, Cuffley, London, United Kingdom, EN6 4SG</p>
              <p>24hrtherapy.co.uk will never sell any information collected from users.</p>
              <p>24hrtherapy.co.uk is not responsible of the practices implemented on other websites to which users or members would have access from the website www.24hrtherapy.co.uk via hypertext links, logos, buttons, etc., located within the website www. 24hrtherapy.co.uk.</p>

              <h3>Agreement of all users</h3>
              <p>The right to use 24hrtherapy.co.uk services is personal to the user/Client.</p>
              <p>The User agrees not to sell and not to use for commercial purposes the services without the prior written consent of the User acknowledges and agrees to assume exclusive liability for the content of its transmissions through the website www.24hrtherapy.co.uk.</p>
              <p>The User agrees not to use the website and the services for illegal purposes including not to transmit messages conflicting with public order and morality, defamatory discourse, the intrusive elements affecting the privacy of third parties; not to transmit messages, information elements that may hinder in any way the rights of 24hrtherapy.co.uk and / or rights of third parties in particular not to not affect the property rights of 24hrtherapy.co.uk and / or those of others; to inform 24hrtherapy.co.uk of any violation of which the user may know of; not to access or attempt to gain access to unauthorized computer systems or networks connected to the website; not to interfere with the use and enjoyment of the services by other users; not to use the website to transmit viruses or other harmful programs.</p>

              <h3>Guarantees</h3>
              <p>The User/Client agrees and understands that the services are as provided.</p>
              <p>Use of the Services is at the sole risk of the User who will be solely responsible for any damage to telecommunication systems or loss of data resulting from downloading content.</p>
              <p>24hrtherapy.co.uk does not guarantee, in any way, either express or implied as to the results that may be obtained from the use of the services.</p>
              <p>In case of non-delivery or claim, 24hrtherapy.co.uk encourage the User to contact the customer service on the website.</p>
              <p>24hrtherapy.co.uk also points out that the nature of the services offered to users relates to telephone consultations, all provided by qualified Therapists.</p>

              <ul>Online Therapy 247 does not guarantee that:
                <li>The service will fully meet the expectations of the user</li>
                <li>The service will be uninterrupted, timely, secure or error-free</li>
                <li>The results that may be obtained using the service will be accurate and reliable</li>
                <li>The quality of information obtained by the user of the service will live up to expectations, and,</li>
                <li>Defects in the software, if any, will be rectified.</li>
              </ul>
              <p>In no event the consultations of the website 24hrtherapy.co.uk constitute legal, financial or medical advises. Similarly, consultations from the website 24hrtherapy.co.uk cannot substitute a medical diagnosis by a health professional.</p>

              <h3>Limitation of Liability</h3>
              <ul>24hrtherapy.co.uk will not be responsible for direct and indirect damages of any kind, including, but not limited to, loss of profits resulting from:
                <li>The use of or inability to use the services,</li>
                <li>All the goods or services obtained through the website 24hrtherapy.co.uk or messages received, or transactions entered into and through the services of 24hrtherapy.co.uk.</li>
                <li>The unauthorized access to or alteration of transmissions from a user or data</li>
                <li>The costs of providing goods or substitute services, even if 24hrtherapy.co.uk has been advised of the possibility of such damages.</li>
              </ul>

              <h3>Compensation</h3>
              <p>The User agrees to waive/dismiss 24hrtherapy.co.uk and affiliates of any damage, claim or demand (including, but not limited to, attorneys’ fees and tips) from third party dispute for shipping, distribution or transmission of content on the website 24hrtherapy.co.uk, to the use of the services, to the violation of these Terms or the rights of others.</p>

              <h3>Ownership of ‘onlinetherapy247.com</h3>
              <p>The User acknowledges and agrees that the content including, but not limited to, text, software, music, sound, photographs, videos, drawings or other material contained in sponsored or email-distributed advertisements, commercial information produced and presented by 24hrtherapy.co.uk, its suppliers and/ or advertisers are protected by intellectual property rights, trademark law, patent law or any other rights recognized by the legislation. The User may not copy, use, reproduce, distribute or create derivative works from the Content without the express agreement of 24hrtherapy.co.uk, its suppliers or advertisers.</p>

              <h3>Duration of Terms</h3>
              <p>The Terms and Conditions are effective as of the acceptance by the User/Client and will continue indefinitely unless terminated in accordance with what is stated in The Terms and Conditions.</p>
              <p><b>Services and / or General Conditions of Entitlement updates</b><br />
                24hrtherapy.co.uk reserves the right, at any time, to modify, suspend or discontinue, temporarily or permanently, all or part of its services, without having to first inform the user. 24hrtherapy.co.uk cannot be held liable in respect of the user or any third party for any modification, suspension or discontinuance of the service. 24hrtherapy.co.uk may at any time modify these Terms and Conditions.</p>
              <p>In case of contradiction between the provisions of the Terms and Conditions and any changes that would be made to them in particular to respect the national laws and regulations in force, the changes will prevail.</p>
              <p><b>Notifications and complaints</b><br />
                If you have a complaint about any of our services you may write to Camline enterprises ltd Cuffley Place, Office Suite 112 Sopers Rd, Cuffley, London, United Kingdom, EN6 4SG</p>
              <p>It is our aim to follow up any complaint within 7 working days excluding public holidays.</p>

              <h3>Barring of access</h3>
              <p>24hrtherapy.co.uk  may at its discretion temporarily or permanently bar a User’s/Client’s access to any or all of our services in any of the following circumstances: User has misused our services in anyway, is abusive to company employees or therapists, has committed an act of fraud against 24hrtherapy.co.uk  or any of its associated companies.</p>

              <h3>Miscellaneous</h3>
              <p>These Terms and Conditions constitute the entire agreement between 24hrtherapy.co.uk  and the User/Client, with regard to the use of the services and supersede any possible prior agreements between the User/Client and 24hrtherapy.co.uk.</p>
              <p>A “Therapist” is not authorised to disclose or receive any personal or contact information. If a Therapist offers or discloses this, please notify us immediately via email. Alternatively, you can email us on info@24hrtherapy.co.uk.</p>

              <h3>Legal Jurisdiction</h3>
              <p>These conditions shall be construed in accordance with English law and any legal action against the company must take place in an English Court.</p>
              
              <h3>Cancellation Policy</h3>
              <p>The Company operates a strict cancellation policy to protect both the wellbeing of our therapists as well as clients.</p>
              <p>The minimum notice is TWO (2) business days for cancellation of any pre-booking session. We appreciate that circumstances may prevent clients from attending a pre-booking session but we reserve the right not to issue a refund if the client does not give sufficient notice of cancellation. If the client changes the date and time of a pre-booking session more than twice without an appropriate and reasonable explanation, we reserve the right to cancel subsequent bookings without refund unless there are exceptional circumstances in the sole opinion of the Company.</p>
              <p>Notice of cancellation must only be made by email at least 48 hours in advance.</p>
            </div>
          </div>
        </div>
        <Subscribe />
      </>
    );
  }
}

Homepage.contextType = SocketContext;

const mapStateToProps = (state) => ({
  ui: { ...state.ui },
  ...state.performer.performers,
  countries: state.settings.countries,
  loggedIn: state.auth.loggedIn,
  categories: state.performer.categories.data,
  settings: state.settings
});
const mapDispatch = {
  searchPerformer,
  updatePerformerFavourite,
  updateCurrentUser,
  updateCurrentPerformer,
  updateCurrentStudio,
  loginSuccess
};
export default connect(mapStateToProps, mapDispatch)(withRouter(Homepage));
