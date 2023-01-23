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
          pageTitle="About Us"
          homePageUrl="/"
          homePageText="Home"
          activePageText="About Us"
          imgClass="bg-3"
        />
        <div className="terms-conditions ptb-100">
          <div className="container">
            <div className="single-privacy">
              <h3 className="mt-0">Online Therapy </h3>
              <p>Technological advancements have made it much easier for people to receive counselling remotely. There are many benefits attached to using online counsellors, particularly in these difficult times with mental health being at an all-time high. Let’s take a look at some of the key benefits of using online therapy right now.</p>

              <h3>What is Camline therapy?</h3>
              <p>Camline is an Online webcam therapy session that can be just as effective as face-to-face therapy and works in much the same way. It is particularly beneficial for those that live in remote areas where physical therapy facilities are hard to come by. When you use an online therapist, you don’t need to spend time and money reaching an offline therapist and can talk freely in your familiar environment. Your online therapy sessions can take place whenever you want. This means you don’t have to battle the wind and rain to reach your therapist. When you first start talking to your therapist, they will ask you about your issue and listen attentively so they can identify the best way to help you. Services can be delivered as a one-off session or be spread over several calls.</p>

              <h3>What are the benefits of online Webcam therapy?</h3>
              <p>Another benefit of online therapy is that it tends to be more intense, which means you can make progress much faster. If a specific counselling service is not available in your local area, you can easily source it online with Camline. For instance, you may need access to a particular type of treatment which is only available in a remote town or city. With online therapy, you don’t even need to step out of your front door to receive this.</p>

              <h3>Why do people need online therapy?</h3>

              <p>Many people wish to keep their counselling sessions private and don’t want to be spotted visiting a physical counselling service. This is yet another reason why so many people are flocking to online counsellors. Online counselling is incredibly convenient and can be delivered at a time that suits you, wherever you are. With our 24-7-365 counselling services, you don’t need to take time off work and lose earnings to get the treatment and support that you require. You can receive your counselling in the evening, at the weekend or even in the middle of the night if you wish.</p>
              <h3>How does online therapy work?</h3>

              <p>We deliver webcam based online therapy the goal is always the same to assess your needs and help you overcome whatever is troubling you so you can lead a more fulfilling life. Therapy can be provided via chat or live chat if you’d rather not express your feelings verbally. When you have your therapist’s comments laid out in front of you, it may be easier to remember what they have said to you. Online therapy is also great for counsellors – as they don’t need to spend several hours each week travelling to and from the office and visiting clients in person, they can spend more time on helping their clients.</p>
              <h3>Why do people use online webcam counselling?</h3>

              <p>It can be very comforting to know that help is available no matter where you are located. With camline online therapy, counselling can continue even if you are on holiday, ill or can’t get to a counsellor or therapist’s office for any other reason. What’s also great about online therapy is that you can get access to support instantly, without waiting to move up a lengthy waiting list.</p>
              <h3>Get support from an online therapist today</h3>

              <p>At Camline 24hr Therapy, we are passionate about delivering the best possible care we can. Our therapists are fully trained, qualified and DBS-checked. Experts in their fields, they use the latest technology to deliver 24-hour care to anyone who needs help with life’s ongoing challenges. There’s no need to worry about bookings or to wait for doctor referrals. login at any time from anywhere in the world. We offer a secure, confidential service that’s as easy to use as it is effective.</p>

              <h3>Seeking online therapy services?</h3>

              <p>We specialise in a host of areas, with therapists assigned to the fields they are most experienced in. Areas include bereavement, career, couples, divorce, family, marriage, sexuality and work stress counselling. If you have any unused minutes left once a session comes to an end, you won’t lose these. Once your time is complete, you can either stay connected for as long as you want or easily rebook using the online booking form. </p>

              <h3>The importance of therapy</h3>

              <p>Many people use therapy to overcome mental and emotional challenges. If your thoughts and feelings are starting to interfere with your everyday life, don’t be afraid to ask for help. Our therapists can help you gain a better perspective and make you more equipped to deal with everything life throws at you at work, home or anywhere else. Our services can guide you through difficult periods in your life, improve friendships, relationships and enhance your enjoyment of day-to-day life. Remember, asking for support does not mean you are failing. Today, there is much more awareness about mental health, with people from all walks of life benefiting from professional counselling and therapy.</p>
              <p>To learn more about our online therapy services and how they can benefit you, contact Camline 24hr Therapy today.</p>
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
