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
import { Button, message } from "antd";
import { getResponseError } from "src/lib";
import { withRouter, NextRouter } from "next/router";
import { SocketContext } from "src/socket";
import Head from "next/head";
import Link from 'next/link';
import Router from 'next/router';

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
          pageTitle="About Us"
          homePageUrl="/"
          homePageText="Home"
          activePageText="About Us"
          imgClass="bg-3"
        />
        <div className="terms-conditions ptb-100">
          <div className="container">
            <div className="single-privacy">
              <h3 className="mt-0">About Us </h3>
              <p>
                24 hour therapy is an online therapy platform made to help
                people who are struggling mentally, emotionally and experiencing
                behavioral concerns. You can find qualified and experienced
                counselors and therapists anytime and anywhere according to your
                convenience. If you or someone you know is experiencing mental
                health, behavioral or any kind of issues or life challenges,
                visit <Link href="/our-therapists">our therapist</Link> page to find a qualified therapist to talk
                to.
              </p>

              <h3>Our Mission</h3>
              <p>
                CMental Health is one of the most important aspects of our life
                which we should take care of. Mental Health has its impacts on
                every stage of our life, from childhood to adulthood. Everyone
                struggles at time and needs a proper professional help to feel
                better and do better in the life. Our core mission is to make
                professional therapy accessible, affordable and convenient to
                every individual, around the globe and help anyone who struggles
                with life challenges anytime and anywhere.
              </p>

              <h3>Online Therapy</h3>
              <p>
                With the help of ever-evolving technology, it has been easier to
                receive counselling remotely. Some people initially may find the
                online therapy different but they very quickly get used to it.
                The convenience and comfort of home, flexibility, security are
                the factors that has proved that online therapy is very
                beneficial. Being able to go talk through the problems while
                sitting at the comfort of your own bedroom rather than
                travelling to a more formal therapy room turns out to be more
                refreshing. Here at 24 hour therapy, we want you to have access
                to the right therapy according to your needs, with all the
                comfort and convenience.
              </p>

              <h3>Our Therapist</h3>

              <p>
                24 hour therapy being an online therapy platform offers access
                to licensed, skilled and experienced psychologists.
              </p>
              <Button
                  type="primary"
                  onClick={() => Router.push('/our-therapists')}
                >
                  Find a therapist
                </Button>
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
