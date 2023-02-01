import { PureComponent } from "react";
import {
  IPerformer,
  ICountries,
  IPerformerCategogies,
  IPerformSearch,
  IUIConfig,
} from "src/interfaces";

import MainBanner from "../src/components/homepage/MainBanner";
import Facilities from "../src/components/homepage/Facility";
import AboutUs from "../src/components/homepage/AboutUs";
import Services from "../src/components/homepage/Services";
import EmergencyArea from "../src/components/homepage/EmergencyArea";
import TestimonialStyleOne from "../src/components/homepage/TestimonialStyleOne";
import DoctorsStyleOne from "../src/components/homepage/DoctorsStyleOne";
import FunFactStyleOne from "../src/components/homepage/FunFactStyleOne";
import Subscribe from "../src/components/homepage/Subscribe";
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
        <MainBanner />
        <Facilities />
        <AboutUs />
        <Services />
        <DoctorsStyleOne />
        {/* <EmergencyArea /> */}
        <TestimonialStyleOne />
        <FunFactStyleOne />

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
