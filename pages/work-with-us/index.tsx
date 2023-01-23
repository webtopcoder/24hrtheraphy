import { PureComponent } from 'react';
import {
  IPerformer,
  ICountries,
  IPerformerCategogies,
  IPerformSearch,
  IUIConfig
} from 'src/interfaces';
// import Subscribe from '../../components/Common/Subscribe';
import PageBanner from '../../src/components/homepage/PageBanner';
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
          pageTitle="Work With Us"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Work With Us"
          imgClass="bg-3"
        />
        <div className="terms-conditions ptb-100">
          <div className="container">
            <div className="single-privacy">
              <h2 className="mt-0">Work With Camline</h2><br />
              <p>We are looking for psychologists and therapists that are passionate about providing therapy in non-traditional formats. We are particularly interested in psychologists who offer evidence-based therapies and   that have or are currently practicing in the NHS or other respected international organisation. </p>
              <br />
              <h3>Requirements</h3>
              <ul>
                <li>Must have valid therapist related qualification and valid, current insurance </li>
                <li>Must offer DBS Disclosure and Barring Service<br/>
                  <i>NOTE: Unfortunately, if you are an intern or if you require supervision to provide counselling services, you cannot be a provider at 24hrtherapy.co.uk at this time. </i>
                </li>
                <li>Minimum of 1 years’ experience in counselling for adults and couples</li>
                <li>Must be flexible with time – we operate 24 hours a day every day </li>
                <li>Must be happy to work remotely via webcam services </li>
                <li>Reliable Internet connection </li>
              </ul>
              <i>Note: Therapists on our platform are independent service providers not employees of 24hrtherapy.co.uk </i>
              <br /><br />
              <p>Please sign up and fill in your profile and upload any documents requested. </p>

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
