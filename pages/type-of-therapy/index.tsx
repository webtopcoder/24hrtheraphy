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
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from 'react-accessible-accordion';
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
          pageTitle="Type Of Therapy"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Type Of Therapy"
          imgClass="bg-3"
        />
        <div className="terms-conditions ptb-100">
          <div className="container">
            <div className="single-privacy">
              <h2 className="mt-0">Types of therapy</h2><br />
            </div>
            <div className="row align-items-center">
              <div className="col-lg-1">
              </div>

              <div className="col-lg-8">
                <div className="faq-accordion">
                  <Accordion allowZeroExpanded preExpanded={['a']}>
                    <AccordionItem uuid="a">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Adlerian Therapy
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>Adlerian therapy, also referred to as individual psychology. Adlerian therapists believe our experiences in our early life shape the people we come and our outlook. Our behaviour and life goals as children shape our behaviour as adults. Your therapist will help you to understand why you behave and act in response to certain stimuli in the way you do.</p> <br />
                        <p>Adlerian therapy is a positive and inspiring technique that can help individuals, couples, and households. It works extremely positively for anxiety and anti-social behaviours.</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="b">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Art therapy
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>Art therapy is a type of psychotherapy that utilises the creative process involved in the creation of art to convey your inner feelings, issues and emotions. Art therapy has also been proven to be effective in relieving stress and improving self-understanding.</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="c">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Behavioural Therapy
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>This school of thought involves the belief that your unhealthy or undesired behaviours are a habitual response to past experiences. Behavioural therapists aim to help you focus on current problems and help shape more suitable, positive behaviours. Behavioural therapy works well for compulsive disorders, and fears/phobias.</p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="d">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Brief Therapy
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>Brief therapy is a far more short-term therapy than other approaches. Focussing on current problems and solutions rather than past experiences. It involves setting goals and planning.</p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="e">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Cognitive Analytic Therapy
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>CAT involves the analysis of past experiences and relationships to examine their current implications on your quality of life. Your therapist will help you to develop healthier systems to cope with your issues, usually lasting a period of around 16 weeks.</p>

                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="f">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Cognitive Behavioural Therapy
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>CBT involves changing the way you in which you think as well as your behaviour. CBT emphasises practical problems to current solutions allowing improvement in your daily life. CBT gives you the tools to analyse your thought processes in relation to certain situations, these thought processes can negatively impact your mental state, and so your CBT therapist will help you understand and challenge any negative thought processes. Resulting in more positive behaviours and thought patterns.</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="g">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Cognitive Therapy
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>Cognitive therapy involves the belief that past experiences can damage your self-perception and negatively impact your attitudes and behaviours. Cognitive therapy can help pessimistic and depressed individuals by questioning and dismantling the roots of their negative self-perception thus allowing individuals to become self-appreciating and more positive in their daily lives.</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="h">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Creative Therapy
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>Creative therapy is an alternative approach to therapy allowing individuals to express themselves away from more traditional conversive therapies. It can include the use of such tools as canvas art, writing, drawing, drama and music. </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="i">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Eclectic Counselling
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>Eclectic counselling involves the use of many different types of therapeutic practice tailored to the specific individual. </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="j">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Emotionally Focussed Therapy
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>Emotionally focussed therapy emphasises the creation and reinforcement of secure and meaningful relationships, thus this type of therapy is appropriate for couples and families as well as individuals. Therapists will help you to overcome family tensions and conflicts as well as analysing insecurities and emotions. </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="k">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Existential Therapy
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>This type of therapy addresses a certain type of anxiety where an individual feels stressed or uneasy as a result of life’s foremost concerns, such as the inevitability of death and the meaning of their life. Therapists can help you to overcome your anxiety and find meaning in your own life.</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="l">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Eye Movement Desensitisation and Reprocessing (EMDR)
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>EMDR is particularly useful when dealing with conditions such as post-traumatic stress disorder. EMDR is thought to replicate the psychological state that we enter when in rapid eye movement (REM) sleep, during which an individual experiences rapid thought processes. EMDR aims to analyse these thought processes and make the memories less distressing. </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="m">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Family Therapy
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>Family therapy places emphasis on the relationships present within a family rather than on the individuals themselves. Allowing families to discuss issues, emotions and relationship problems in a safe space with a qualified therapist. It can assist with many issues that affect the family unit, helping family members to make useful changes in their relationships and their lives.</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="n">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Gestalt Therapy
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>Gestalt therapy places emphasis on the individual as a whole rather than analysing different segments in an individual’s life. Gestalt therapy often involves acting out events and dream recall, and can be effective in treating anxiety, stress, tension and depression.</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="o">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Humanistic Therapy
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>Focussing on the whole individual, humanistic therapy emphasises feelings and taking responsibility for your actions. Humanistic therapy involves self-development in the present rather than on past issues and problems. Person-centred therapy, Gestalt therapy, transactional and transpersonal analysis are all humanistic therapies.</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="p">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Integrative Counselling
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>Integrative counselling looks at your mental, physical and emotional needs. Your therapist will then tailor an approach to your specific circumstance. Your therapist will help you to develop self-awareness, as well as set goals and systems to improve your quality of life.</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="q">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Interpersonal Therapy
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>IPT is a therapeutic approach focussing on relationships. Particularly helpful for those with depression facing issues such as bereavement and conflict. IPT will help you to analyse your relationships with others and develop coping strategies.</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="r">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Jungian Therapy
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>Focussing on both the conscious and unconscious and the link between the two, Jungian therapy helps you to become a more balanced. Jungian therapy may involve the use of such tools as dream recall, word associations and certain creative activities. This can help with a range of emotional and behavioural issues.</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="s">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Neuro-Linguistic Programming
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>NLP involves the combination of humanistic and behavioural therapies with hypnosis. Focussing on the belief that past experiences shape your present emotions and behaviours. Therapists will help you to discover how you have learnt to think or feel so that you can take control of your actions.</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="t">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Phenomenological Therapy
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>This approach analyses an individual’s perception and experience of a situation rather than its external reality. A therapist can help you to understand why you see things in this way and discover more beneficial ways of thinking and behaving.</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="u">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Psychoanalysis
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>This approach emphasises the belief that psychological problems stem from the unconscious mind. Claiming that past experiences can influence your thoughts, emotions and behaviour. The therapist will encourage you to talk about your experiences and use techniques such as dream analysis to identify repressed feelings affecting you in your daily life. Bringing these to the front of your mind allows any negative feelings to be handled.</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="v">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Play Therapy
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>Mainly practiced with children, this therapeutic approach uses play as a communication tool to help children express their feelings. It can be used to analyse the reasons for difficult behaviour, to allow children to work through their issues or as a relearning and desensitisation therapy.</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="w">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Primal Therapy
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>Primal Therapy predicates that distress which has occurred at birth or during infancy can create present mental health issues such as phobias. The therapist asks you to revisit the ‘primal scene’ where the trauma can be re-experienced as a sort of emotional cleansing.</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="x">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Psychoanalysis
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>This approach emphasises the belief that psychological problems stem from the unconscious mind. Claiming that past experiences can influence your thoughts, emotions and behaviour. The therapist will encourage you to talk about your experiences and use techniques such as dream analysis to identify repressed feelings affecting you in your daily life. Bringing these to the front of your mind allows any negative feelings to be handled.</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="y">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Psychodynamic psychotherapy
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>This focuses on current problems to try to provide a quick solution. It emphasises the importance of the unconscious and past experience in developing your current behaviours. The therapist will encourage you to talk about your childhood relationships with your parents and others.</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="z">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Psychosynthesis
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>This approach seeks to group your emotional, mental, physical and spiritual attributes to promote personal development. Psychosynthesis is useful for people seeking a new, more spiritually oriented version of themselves to enable positive change and growth.</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="aa">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Relationship therapy
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>Relationship therapy encourages those in relationships to analyse repeating patterns of distress and to understand and alter negative differences that they are experiencing. The relationship can be between family members, a couple, or colleagues.</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="ab">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Solution-focused brief therapy
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>Solution-focussed brief therapy emphasises positive change rather than focussing on past problems. Therapists will encourage you to focus on what you do well and your successes, as well as setting goals and working out how to achieve them. Just three or four sessions may be highly beneficial.</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="ac">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Systemic therapies
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>These therapies aim to change the transactional pattern of members of a system. Systemic therapy can be used as a generic term to encompass family therapy and marital therapy.</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="ad">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Transactional analysis
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>Transactional analysis is a therapeutic approach which incorporates elements of humanistic, cognitive-behavioural and psychodynamic therapy. It identifies three states of the human personality– Parent, Adult and Child – which can help you explain your interactions with others. Therapists also look at how your beliefs and your interpretations regarding your environment can create recurrent and problematic patterns of behaviour and will work with you to improve your quality of life.</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="ae">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Transpersonal therapy
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>Transpersonal therapy is a term used to describe any type of therapy which places an emphasis on spirituality, an individual’s potential or heightened consciousness, including psychosynthesis.</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
              <div className="col-lg-2">
              </div>

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
