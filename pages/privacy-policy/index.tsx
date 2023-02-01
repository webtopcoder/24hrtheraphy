import { PureComponent } from "react";
import {
  IPerformer,
  ICountries,
  IPerformerCategogies,
  IPerformSearch,
  IUIConfig,
} from "src/interfaces";
// import Subscribe from '../../components/Common/Subscribe';
import PageBanner from "../../src/components/homepage/PageBanner";
import "./index.less";
import { connect } from "react-redux";
import {
  searchPerformer,
  updatePerformerFavourite,
  updateCurrentPerformer,
} from "@redux/performer/actions";
import { loginSuccess } from "@redux/auth/actions";
import { updateCurrentUser } from "@redux/user/actions";
import { updateCurrentStudio } from "@redux/studio/actions";
import { favouriteService } from "src/services";
import { message } from "antd";
import { getResponseError } from "src/lib";
import { withRouter, NextRouter } from "next/router";
import { SocketContext } from "src/socket";
import Head from "next/head";

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
  gender: "",
  category: "",
  country: "",
  sortBy: "",
  sort: "desc",
};

class Homepage extends PureComponent<IProps, IStates> {
  private socket;

  constructor(props: IProps) {
    super(props);
    this.state = {
      query: initQueryState,
    };
  }

  componentDidMount() {
    this.search();
    this.socket = this.context as any;
    this.socket.on("modelUpdateStatus", this.search);
    this.socket.on("modelUpdateStreamingStatus", this.search);
  }

  componentDidUpdate(prevProps: IProps, prevStates: IStates) {
    const { router, loggedIn } = this.props;
    const { query } = this.state;
    if (
      router.query.q !== prevProps.router.query.q ||
      query !== prevStates.query
    ) {
      this.search();
    }
    if (!loggedIn && loggedIn !== prevProps.loggedIn) {
      this.search();
    }
  }

  componentWillUnmount() {
    this.socket = this.context as any;
    if (this.socket) {
      this.socket.off("modelUpdateStatus");
      this.socket.off("modelUpdateStreamingStatus");
    }
  }

  async onLike(performer: IPerformer) {
    const { updatePerformerFavourite: dispatchUpdatePerformerFavorite } =
      this.props;
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
        [name]: value,
      },
    });
  }

  search = () => {
    const { router, searchPerformer: dispatchSearchPerformer } = this.props;
    const { query } = this.state;
    dispatchSearchPerformer({
      ...query,
      ...router.query,
    });
  };

  clearFilter() {
    this.setState({
      query: initQueryState,
    });
  }

  render() {
    const { categories, countries, ui, settings } = this.props;
    const { query } = this.state;

    return (
      <>
        <Head>
          <title>{ui?.siteName}</title>
          <meta name="keywords" content={settings?.metaKeywords} />
          <meta name="description" content={settings?.metaDescription} />
          {/* OG tags */}
          <meta property="og:title" content={settings?.siteName} key="title" />
          <meta property="og:image" content={settings?.logoUrl} />
          <meta property="og:keywords" content={settings?.metaKeywords} />
          <meta property="og:description" content={settings?.metaDescription} />
        </Head>
        <PageBanner
          pageTitle="Privacy Policy"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Privacy Policy"
          imgClass="bg-3"
        />
        <div className="terms-conditions ptb-100">
          <div className="container">
            <div className="single-privacy">
              <h3 className="mt-0">Welcome To XCams Privacy Policy</h3>
              <p>
                At 24hrtherapy.co.uk we take your privacy seriously. This
                privacy policy describes how and why we obtain, store and
                process data which can identify you. We may update this policy
                from time to time and shall indicate on the web site when
                changes have been made.
              </p>

              <h3>Cookies and information, we collect</h3>
              <p>
                Information is collected from you when you register with us, or
                when you contribute to or use some of the advanced features on
                the site, such as when you purchase minutes to use our service.
                The information we collect is clearly set out on the web page on
                which we collect it. See for example our ‘Contact Us’ page.
              </p>

              <p>
                In addition, we may use third party tools and cookies to collect
                data about how you interact with our site. Most of the data is
                anonymous, however we may collect your IP address. If you’d
                prefer that we not track your interactions, you can configure
                your browser not to accept cookies or you may opt out by using
                the links below:
              </p>

              <h3>Why we collect it</h3>
              <p>
                We collect information about you so that we can personalise your
                use of the site, assist your use of the site and improve the
                site generally. Depending upon your selections for our data
                protection questions (on our enquiry forms throughout the site)
                we may arrange for you to be sent information about related
                services from us. We also use information from our customers to
                send them relevant information about mental health and other
                promotional activities that we carry out on a monthly basis.
              </p>
              <p className="color-blue">
                Adroll.com opt-out | Google analytics opt-out | HotJar opt-out
              </p>
              <p>The following cookies collect data on our site:</p>
              <table>
                <tr>
                  <td>Google Analytics</td>
                  <td>HotJar</td>
                  <td>Adroll</td>
                  <td>Google Adwords / Retargeting</td>
                </tr>
                <tr>
                  <td>
                    This is a web analytics service provided by Google, Inc.
                    Google Analytics sets a cookie in order to evaluate use of
                    those services and compile a report for us. User data is
                    anonymous. <span className="color-blue">OPT OUT</span>
                  </td>
                  <td>
                    These cookies are used to collect information about how
                    visitors use our site. We use the information to compile
                    reports and to help us improve the site. The cookies collect
                    information in an anonymous form, including user actions and
                    behaviour on the site.{" "}
                    <span className="color-blue">OPT OUT</span>
                  </td>
                  <td>
                    Our site uses Adroll. AdRoll provides targeted advertising
                    services for our advertiser clients (“Advertisers”). When
                    you visit a website operated by an Advertiser or a third
                    party site where we could serve an ad to you, we may collect
                    some or all of the data described in the{" "}
                    <span className="color-blue">
                      AdRoll Service Privacy Notice.
                    </span>{" "}
                    Our platform uses that data as well as other data described
                    below to help Advertisers provide ads to you that are more
                    relevant to you.
                  </td>
                  <td>
                    Google Remarketing and Adwords cookies allow us to advertise
                    relevant information to users. Remarketing and adwords
                    cookie lists are stored in a database on Google’s servers,
                    which store all the cookie IDs associated with each list.{" "}
                    <span className="color-blue">OPT OUT</span>
                  </td>
                </tr>
              </table>
              <br />
              <h3>Who we disclose it to</h3>

              <p>
                In certain circumstances, we may need to disclose information
                about you if you breach this privacy policy or if you breach the
                Terms and Conditions. We may also disclose information about you
                if required to do so by law or by any Governmental body.
              </p>
              <h3>Security</h3>

              <p>
                Keeping information about you secure is very important to us and
                certain sections of the site may encrypt data using SSL or a
                comparable standard. However, no data transmission over the
                Internet can be guaranteed to be totally secure. As a result,
                whilst we strive to protect your personal information, we cannot
                ensure or warrant the security of any information which you send
                to us, and you do so at your own risk.
              </p>
              <h3>Accessing and updating your personal information</h3>

              <p>
                We will always let you have a copy of personal information we
                have about you, should you request it, and you may correct it if
                you wish. You can request this information by contacting us at
                contact@24hrtherapy.co.uk
              </p>
              <h3>Questions?</h3>

              <p>
                If you have any questions or complaints relating to this Privacy
                Policy or how we use the personal information we have about you,
                please contact us at contact@24hrtherapy.co.uk. We will
                endeavour to respond to you promptly.
              </p>
            </div>
          </div>
        </div>
        {/* <Subscribe /> */}
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
  settings: state.settings,
});
const mapDispatch = {
  searchPerformer,
  updatePerformerFavourite,
  updateCurrentUser,
  updateCurrentPerformer,
  updateCurrentStudio,
  loginSuccess,
};
export default connect(mapStateToProps, mapDispatch)(withRouter(Homepage));
