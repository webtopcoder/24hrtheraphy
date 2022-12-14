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
          pageTitle="List Of Issues"
          homePageUrl="/"
          homePageText="Home"
          activePageText="List Of Issues"
          imgClass="bg-3"
        />
        <div className="terms-conditions ptb-100">
          <div className="container">
            <div className="single-privacy">
              <h2 className="mt-0">List Of Issues</h2><br />
            </div>
            <div className="row align-items-center">
              <div className="col-lg-1">
              </div>

              <div className="col-lg-8">
                <div className="faq-accordion">
                  <Accordion allowZeroExpanded>
                    <AccordionItem uuid="a">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Anorexia
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>Anorexia is a severe mental health condition affecting attitudes and behaviours towards the consumption of food, anorexia can affect both women and men. People suffering from anorexia tend to have a crippling worry of becoming ‘fat’ and do not see their bodies for how they truly are, with many sufferers wrongly believing that they are overweight when they are not. People with anorexia may additionally minimise their weight by limiting the meals that they eat, making themselves vomit, and exercising an excessive amount. Anorexia has truly dangerous outcomes for sufferers physical and mental health.</p>
                        <p>People suffering from anorexia often disguise their behaviour from loved ones. Common symptoms of anorexia encompass:</p>
                        <ul>
                          <li>Missing food, ingesting minimal amounts of food, or actively avoiding specific foods.</li>
                          <li>Obsessively counting calories in meals</li>
                          <li>Leaving the table immediately after ingesting with the intention to vomit</li>
                          <li>Taking laxatives and hunger suppressants</li>
                          <li>Physical issues such as feeling lightheaded or dizzy, hair loss or dry pores and skin</li>
                          <li>Repeated weighing and checking one’s reflection in the mirror.</li>
                        </ul>
                        <p>Individuals affected by anorexia might also be afflicted by several different mental health issues such as depression, anxiety, and self-harm.</p>
                        <p>Which therapies may help?</p>
                        <ul>
                          <li>Psychiatric management</li>
                          <li>Cognitive-behavioural remedy (CBT)</li>
                          <li>Dialectical behaviour therapy (DBT)</li>
                          <li>Schema therapy (ST)</li>
                          <li>Cognitive analytic therapy (CAT)</li>
                        </ul>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="b">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Anxiety
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>Anxiety is a simple, essential emotion that all of us experience when our bodies expect hazard or risk. However, for numerous reasons, every now and then people can miscalculate the chance of a scenario and may experience tension disproportionate to the circumstance. If your emotions of fear and stress occur frequently, for a protracted period of time, or you feel as though your fears and stress are consuming you, you may suffer from anxiety. Anxiety is a simple, essential emotion that all of us experience when our bodies expect hazard or risk. However, for numerous reasons, every now and then people can miscalculate the chance of a scenario and may experience tension disproportionate to the circumstance. If your emotions of fear and stress occur frequently, for a protracted period of time, or you feel as though your fears and stress are consuming you, you may suffer from anxiety.</p>
                        <p>Although some of the following may not apply to you, a number of the most common symptoms of anxiety include:</p>
                        <ul>
                          <li>Dizziness</li>
                          <li>Sweating</li>
                          <li>Heart palpitations</li>
                          <li>Trembling or shaking</li>
                          <li>Dry mouth</li>
                          <li>Stomach pain</li>
                          <li>Headache</li>
                          <li>Feeling nauseous</li>
                          <li>Shortness of breath</li>
                          <li>Loss of hunger</li>
                          <li>Dread</li>
                          <li>Panic</li>
                          <li>Worry</li>
                          <li>Terror / fear</li>
                          <li>Agitated and jumpy</li>
                          <li>Nervousness</li>
                        </ul>
                        <p>However, unique symptoms depend on the type of anxiety ailment you may be affected by, as tension can take the form of:</p>
                        <ul>
                          <li>Generalised tension ailment (GAD)</li>
                          <li>Panic sickness</li>
                          <li>Health tension</li>
                          <li>Phobias</li>
                          <li>Obsessive-compulsive disorder (OCD)</li>
                        </ul>
                        <p>If you feel that any of the above applies to you, recognize that you are not on your own, as anxiety is one of the most common mental health issues and you may benefit greatly from therapy.</p>
                        <p>Which therapies might assist me?</p>
                        <ul>
                          <li>Acceptance and dedication remedy (ACT)</li>
                          <li>Cognitive-behavioural remedy (CBT)</li>
                          <li>Mindfulness-based totally cognitive therapy (MBCT)</li>
                        </ul>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="c">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Attention Deficit Hyperactive Disorder
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>Attention deficit hyperactive disorder refers to a group of behavioural signs and symptoms that include inattentiveness, hyperactivity, and impulsivity. Although ADHD issues are typically identified in children, adults also can also suffer from it. If you battle to concentrate or stay focused on obligations, regularly act on impulse, and experience problems regulating your behaviour in response to certain situations, you could suffer from ADHD.</p>
                        <p>Common signs and symptoms of ADHD:</p>
                        <ul>
                          <li>Short attention span or being easily distracted</li>
                          <li>Restlessness</li>
                          <li>Constant fidgeting or overactivity</li>
                          <li>Inability to deal with stress or to keep mood</li>
                          <li>Disorganisation – such as misplacing things</li>
                          <li>Impulsive behaviour – which includes immoderate spending</li>
                        </ul>
                        <p>If you suffer from ADHD, you might additionally have issues sleeping and might suffer from anxiety issues. If you believe you experience any of the above symptoms, a combination of medication and therapy can significantly enhance your daily functioning.</p>
                        <p>Which types of therapy are appropriate?</p>
                        <ul>
                          <li>Cognitive-behavioural remedy</li>
                          <li>Stress discount</li>
                          <li>Behavioural education</li>
                        </ul>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="d">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Bereavement
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>Bereavement is the name given to describe the sense of loss we experience when a cherished one passes away. When you are grieving, it is ordinary to experience various emotions including unhappiness, anger, anxiety, and guilt, however now and again bereavement may be particularly overwhelming or uncover emotions which might be difficult to control. If you’re experiencing ‘complicated bereavement’, you will find yourself withdrawn, irritated, and experiencing symptoms of depression.</p>
                        <p>Some signs of typical bereavement include:</p>
                        <ul>
                          <li>Intense sorrow</li>
                          <li>Focus on little else but the loss of a loved one</li>
                          <li>Extreme consciousness on reminders of the loved one or avoidance of reminders</li>
                          <li>Difficulties accepting the death</li>
                          <li>Numbness and/or detachment</li>
                          <li>Feeling that life has no meaning</li>
                          <li>Irritability or agitation</li>
                          <li>Lack of trust in others</li>
                          <li>Inability to experience existence or think back on advantageous experiences with the one you love</li>
                        </ul>
                        <p>If those symptoms don’t improve over time, it might be beneficial to explore therapeutic options. Some of the signs and symptoms that your bereavement might be more complex and requiring treatment could be:</p>
                        <ul>
                          <li>Having trouble carrying out day-to-day tasks.</li>
                          <li>Withdrawal from social activities</li>
                          <li>Depression</li>
                          <li>Thoughts of guilt or self-blame</li>
                          <li>Persistent thoughts of blame and that you could have prevented their passing.</li>
                          <li>Loss of a sense of purpose and self-worth.</li>
                          <li>Feeling that life is not worth living without your loved one.</li>
                          <li>Wish that you had died with your loved one.</li>
                        </ul>
                        <p>If you experience those symptoms, therapy may help you come to terms with your loss and aid you in reforming your life.</p>
                        <p>Which treatments would possibly help?</p>
                        <ul>
                          <li>Cognitive-behavioural therapy</li>
                          <li>Cognitive-behavioural therapy</li>
                          <li>Psychodynamic remedy</li>
                          <li>Dynamic interpersonal remedy</li>
                          <li>Acceptance and dedication remedy</li>
                        </ul>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="e">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Binge Eating Disorder
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>Binge eating disorder is a mental health sickness affecting an individual’s attitudes and behaviours relating to the consumption of meals, this disorder can have harmful consequences for both bodily and intellectual health. People with binge consuming problems eat more meals than other people would in a similar time period and often have no control over how much they eat during an episode. Individuals may experience these symptoms; extremely speedy consumption, past feeling full, still eating when no longer hungry, eat in secret to cover the quantity this is being eaten, or experience a terrible feeling after a binge, you could be afflicted by binge eating disorder.</p>
                        <p>In order to meet the prognosis for the sickness, you should experience a minimum 3 of the aforementioned symptoms every week for 3 months.</p>
                        <p>Which therapies might help?</p>
                        <ul>
                          <li>Cognitive-behavioural remedy (CBT)</li>
                          <li>Modified dialectical behaviour therapy (DBT).</li>
                        </ul>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="f">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Bipolar Disorder
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>Previously referred to as manic depression, people suffering from bipolar disorder experience shifts in mood from extreme low moods to intense high moods, with a few patients never experiencing ‘regular’ temper. If you experience periods of depression alternated with intervals of overactivity and emotions of euphoria, each of which can last several weeks, you may be suffering from bipolar disorder.</p>
                        <p>Common symptoms of depression/low mood:</p>
                        <ul>
                          <li>Sadness</li>
                          <li>Uncontrollable crying</li>
                          <li>Anxiety</li>
                          <li>Loss of interest or amusement in sports</li>
                          <li>Withdrawal from family and friends</li>
                          <li>Excessive guilt</li>
                          <li>Suicidal mind and urges</li>
                        </ul>
                        <p>Common symptoms of euphoria include:</p>
                        <ul>
                          <li>Increased energy</li>
                          <li>Unusual talkativeness</li>
                          <li>Racing thoughts</li>
                          <li>Little want for sleep</li>
                          <li>Inflated self esteem</li>
                          <li>Spending sprees</li>
                        </ul>
                        <p>Bipolar disorder can be classed bipolar I (manic episodes) or bipolar II (hypomanic episodes). The foremost distinction among mania and hypomania is the severity of the manic segment.</p>
                        <p>If you feel that the above applies to you, therapy in addition to medication can extremely enhance your daily functioning and improve your quality of life.</p>
                        <p>Which treatment plans could help?</p>
                        <p>Cognitive behavioural therapy can assist a person with bipolar symptoms and learn how to recognise when a temper shift is about to occur. CBT can also help someone with bipolar sickness stick to a therapy plan to reduce the chances of relapse.</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="g">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Body Dysmorphic Disorder
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>Body Dysmorphic Disorder is a form of anxiety affecting someone’s image. People affected by this disorder have a distorted view of their own appearance, and generally tend to fixate on elements of their face or body that they believe are unattractive or ‘wrong’. Because of those core beliefs, they generally tend to spend a significant time worried about their appearance, however body dysmorphia disorder is a serious mental health condition, consequently sufferers are not merely vain or self-obsessed. If you find yourself continuously comparing your appearance to others, spending numerous times looking to hide supposed personal defects, or becoming distressed by a certain area of your body, you may be suffering from body dysmorphia disorder.</p>
                        <p>Other symptoms include:</p>
                        <ul>
                          <li>Spending lots of time in the front of the mirror or steering clear of mirrors altogether</li>
                          <li>Feeling worried whilst around other people and averting social situations</li>
                          <li>Being overly worried regarding requesting help of fear that they’ll be seen to be self-obsessed</li>
                          <li>Seeking clinical remedy for the perceived defect which include cosmetic surgical procedure</li>
                          <li>Excessive food regimen and exercise</li>
                        </ul>
                        <p>Although BDD is different to OCD, there are similarities between the 2 problems, as each involve compulsive behaviours. BDD also can result in depression, self-harm and suicidal thoughts.</p>
                        <p>If you experience the above symptoms, therapy can significantly enhance your self-esteem, well-being, and quality of life.</p>
                        <p>Which treatment plans may assist?</p>
                        <ul>
                          <li>Acceptance and Commitment Therapy</li>
                          <li>Schema Therapy</li>
                          <li>Cognitive Analytic Therapy</li>
                          <li>Cognitive Behavioural Therapy</li>
                        </ul>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="h">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Borderline Personality Disorder
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>Borderline personality disorder (BPD) is a developmental disease that substantially disrupts a person’s potential to alter their emotions, manage their actions, and shape solid interpersonal relationships.</p>
                        <p>Unfortunately, BPD is often misdiagnosed as bipolar disorder, while in BPD adjustments in temper and mood occur much more frequently. The individual’s mood can often differ substantially just in a single day.</p>
                        <p>To be diagnosed with BPD the person may exhibit any 5 of the following symptoms:</p>
                        <ul>
                          <li>Fear of abandonment</li>
                          <li>Unstable or converting relationships</li>
                          <li>Unstable self-image; struggles with identity</li>
                          <li>Impulsive self-adverse behaviours (immoderate spending, dangerous sex, substance misuse, binge consuming and others)</li>
                          <li>Suicidal behaviour or self-harm</li>
                          <li>Mood instability with numerous mood swings</li>
                          <li>Feelings of emptiness</li>
                          <li>Difficulties with anger, consisting of common loss of temper or fighting</li>
                          <li>Stress related paranoia or dissociation</li>
                        </ul>
                        <p>If you feel that the above applies to you, it’s critical to consultant a specialist to diagnose you effectively as human beings with BPD regularly also experience other disorders such as depression, anxiety, substance misuse or eating problems.</p>
                        <p>If you are suffering from BPD, specialist therapy can greatly improve your day-to-day functioning and quality of life.</p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="i">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Depression
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>We all feel sad occasionally, whether or not it be in reaction to a provoking circumstance or for no reason at all. However, if you are feeling this way for weeks or months, as opposed to just a few days, you will be suffering with depression.</p>
                        <p>Although depression can affect humans in very specific ways and there are varying degrees of severity, some commonplace signs and symptoms of depression include:</p>
                        <ul>
                          <li>Continuous low temper or disappointment</li>
                          <li>Feeling hopeless or helpless</li>
                          <li>Feeling tearful</li>
                          <li>Feeling guilt-ridden</li>
                          <li>Feeling irritable and intolerant of other people</li>
                          <li>Having no motivation or interests</li>
                          <li>Feeling indecisive</li>
                          <li>Not getting amusement out of life</li>
                          <li>Feeling anxious or concerned</li>
                          <li>Having suicidal thoughts or thoughts of harming your self</li>
                          <li>Lack of energy or interest in sex</li>
                          <li>Change in appetite</li>
                          <li>Disturbed sleep</li>
                        </ul>
                        <p>However, symptoms might be specific to the type of depression you are experiencing as there are several classifications consisting of:</p>
                        <ul>
                          <li>Seasonal affective disorder (SAD)</li>
                          <li>Bipolar disorder</li>
                          <li>Post-natal depression</li>
                        </ul>
                        <p>If you suspect you are experiencing depression, a mixture of medication and therapy has been established to be the most effective treatment for depression.</p>
                        <p>Which cures may help?</p>
                        <ul>
                          <li>Cognitive-behavioural therapy</li>
                          <li>Acceptance and commitment therapy</li>
                          <li>Mindfulness-based cognitive therapy</li>
                          <li>Cognitive analytic therapy</li>
                        </ul>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="j">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            EEating Disorder
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>Eating disorder is the general term given to a collection of issues that can occur in both women and men, negatively affecting individuals’ attitudes and behaviours towards eating and meals.  Societal pressures could result in personal insecurities surfacing and could result in a distorted view of what an individual’s body should look like as opposed to what it currently looks like. If you spend a variety of time focusing on your weight and discover yourself making unhealthy choices, which include over-exercise, restricting the meals you eat and/or obsessive calorie counting, or different behaviours such as purging to control your weight, it is likely you are suffering from an eating disorder.</p>
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
                        <p>There are specific types of eating disorders, with the most common being:</p>
                        <p>Anorexia nervosa – When a person tries to keep their weight as little as viable, frequently through excessively limiting the meals they’re eating and/or workout an excessive amount.</p>
                        <p>Bulimia – When a person is going through periods of binge consuming and is then deliberately unwell or uses laxatives to govern their weight</p>
                        <p>Binge eating disorder – When a person eats big amounts of food in a brief time and feels unable to govern themselves</p>
                        <p>Some individuals may suffer from a variety of these symptoms and is thus described as EDNOS (eating disorder not otherwise specified).</p>
                        <p>The most likely symptoms associated with an eating disorder are:</p>
                        <ul>
                          <li>Negative self-perception relating to your body</li>
                          <li>Constantly weighing yourself</li>
                          <li>Dissatisfaction with bodily specifics</li>
                          <li>Food restrictions</li>
                          <li>Compulsive exercise</li>
                          <li>Need for perfection</li>
                          <li>Purging</li>
                          <li>Fear of being overweight</li>
                          <li>Excessive food consumption</li>
                        </ul>
                        <p>If you are suffering from an eating disorder, depending on the type and severity, you might require a multi-disciplinary method of treatment, however therapy can significantly help to improve your quality of life.</p>

                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="l">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Generalized Anxiety Disorder
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>Whilst anxiety is a primary fundamental emotion, we all experience occasionally, those individuals struggling with generalised anxiety disorder experience anxiety relating to a wide range of factors in their daily lives in a way which disrupts their day-to-day functioning.</p>
                        <p>If you are feeling worried and stained most days, can’t remember the last time you felt at ease, and cannot calm your mind you may be suffering from GAD.</p>
                        <p>Although the below list beneath is not exhaustive, a few common symptoms of GAD are:</p>
                        <ul>
                          <li>Restlessness</li>
                          <li>Feeling continuously on edge.</li>
                          <li>Difficulty concentrating</li>
                          <li>Sense of dread</li>
                          <li>Heart palpitations</li>
                          <li>Sleep difficulties</li>
                          <li>Headaches</li>
                          <li>Excessive sweating</li>
                          <li>Shortness of breath</li>
                          <li>Dizziness</li>
                          <li>Irritability</li>
                        </ul>
                        <p>The defining feature of GAD is the constant and unrelenting worrying experienced by the individual. If you are experiencing a number of the aforementioned symptoms, then a combination of medication and therapy can greatly improve your quality of life.</p>
                        <p>Which treatments might assist?</p>
                        <p>Cognitive-behavioural therapy</p>
                        <p>Acceptance and dedication therapy</p>
                        <p>Mindfulness based cognitive therapy</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="m">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Health Anxiety
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>Whilst anxiety is a simple, essential emotion we all experience now and again, individuals affected by health anxiety regularly worry about their fitness and fear that they have got a serious bodily illness, whilst there is often no reason to suppose this at all.</p>
                        <p>This disproportionate anxiety causes individuals serious distress and can greatly impact daily functioning. Some people with health anxiety can also have a clinical circumstance that they fear about an excessive amount, or in a manner that is out of proportion to the actual scenario. Others may be troubled by signs and symptoms that are medically unexplained. Others may be excessively worried about future ailments, impacting their daily lives.</p>
                        <p>Some common signs of health anxiety are:</p>
                        <ul>
                          <li>An accompaniment of unexplained bodily signs and symptoms and frequent visits to the GP to check if these signs and symptoms represent an undiagnosed medical condition</li>
                          <li>Fear of getting ill or experiencing symptoms of contamination without significant cause for worry</li>
                          <li>Residual fear regarding the possible reoccurrence of a disease or contamination</li>
                          <li>Fear relating to catastrophic effects that would occur if one had contracted an infection</li>
                          <li>Fear of heightened vulnerability or susceptibility to sickness or illness</li>
                          <li>Engaging in a number of behaviours such as consulting more than one medical doctor, undergoing diagnostic techniques, studying feasible reasons of symptoms, regular hand washing and different protection behaviours.</li>
                        </ul>
                        <p>If you feel that the above applies to you, therapy can greatly help to enhance your day-to-day functioning and wellbeing.</p>
                        <p>Which treatment options might help?</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="n">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Obsessive Compulsive Disorder
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>OCD is a common anxiety illness wherein a person has obsessive thoughts and feel as though they should engage in compulsive activities to manage these obsessive thoughts and neutralise their anxiety, even if they find the compulsions upsetting. An obsession is a chronic, unwanted thought, picture or urge that is very difficult or not possible to block out, causing feelings of anxiety, disgust or unease. A compulsion is a repetitive behaviour (that could additionally be mental) that a person feels they must perform to calm the obsessive thoughts.</p>
                        <p>The regular cycle of OCD is as follows:</p>
                        <ul>
                          <li>Obsessions – in which an unwanted image, photo or urge repeatedly enters your thoughts</li>
                          <li>Anxiety – the obsession provokes severe tension and distress</li>
                          <li>Compulsion – repetitive behaviours or intellectual acts are performed to relieve the distress or tension</li>
                          <li>Temporary relief – the compulsive behaviour brings brief comfort, but the anxiety and obsession soon go back</li>
                        </ul>
                        <p>Obsessions and compulsions differ among individuals; however, a few not unusual obsessions consist of worry about infection, harming yourself or others, or obsessions of perfection. Sometimes obsessions and compulsions are related, so a person with a fear of contamination may be forced to repeatedly wash their hands, however compulsions also can be totally unrelated, consisting of tapping a foot again and again.</p>
                        <p>The severity of OCD symptoms can range greatly. For a few individuals, symptoms can be fleeting, while others are unable to perform everyday activities due to the fact their compulsions are so time-consuming, or for fear of being triggered.</p>
                        <p>If you feel that the above applies to you, therapy can greatly enhance your day-to-day functioning and quality of life through helping you to understand your circumstance and coaching you in effective coping strategies.</p>
                        <p>Which therapies would possibly help?</p>
                        <ul>
                          <li>Cognitive behavioural therapy including graded exposure and reaction prevention, a therapy which places emphasis on experiencing the obsessive thoughts without looking to ‘neutralise’ them with compulsive behaviour.</li>
                        </ul>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="o">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Panic Attack
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>Panic attack is the name given to a collection of signs and symptoms that occur when a person is experiencing excessive anxiety. People who suffer from this type of anxiety ailment (panic attacks) have regular and repeated panic attacks often for no clear reason.</p>
                        <p>If you are having a panic attack you may experience mental symptoms which include an overwhelming sense of fear, anxiety and nerves.</p>
                        <p>You can also experience physical signs and symptoms which include:</p>
                        <ul>
                          <li>Nausea</li>
                          <li>Trembling</li>
                          <li>Sweating</li>
                          <li>Heart palpitations</li>
                          <li>Increased temperature</li>
                          <li>Shortness of breath</li>
                          <li>Chest pain</li>
                          <li>Numbness</li>
                          <li>Feeling of dread or worry of death</li>
                          <li>Tingling sensation in your hands</li>
                          <li>Terror</li>
                        </ul>
                        <p>During a panic attack some people experience ‘depersonalisation’, where you feel indifferent and removed from the situation, your body, and your environment. Sometimes the signs and symptoms of a panic attack can be so severe that you might feel as though you are having a heart attack. Because the physical signs of a panic attack are so unpleasant, those who are likely to experience panic attacks are frightened in anticipation of their next attack, which creates a vicious cycle of anticipatory anxiety and further adds to the panic.</p>
                        <p>Most panic attacks last between five and twenty mins. The severity and frequency of panic attacks varies among individuals. Some individuals may have panic attacks a few times a month, others may experience multiple attacks every week.</p>
                        <p>If you feel that the above applies to you, therapy will allow you to recognize how and why panic attacks take place and will teach you effective coping strategies.</p>
                        <p>Which therapies might help?</p>
                        <ul>
                          <li>Cognitive Behavioural Therapy (CBT)</li>
                          <li>Acceptance and Commitment Therapy (ACT)</li>
                        </ul>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="p">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Phobias
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>A phobia is a crippling fear of an item, place, scenario, or animal related to an unrealistic notion of danger or hazard. Sometimes phobias can be so severe that a person might organise their lifestyles around fending off the situation or object that causes them anxiety. This can substantially affect the individuals daily functioning and restrict them from carrying out regular activities such as going to the shops, for fear of discovering the object of their phobia.</p>
                        <p>There are two types of phobia – simple and complex.</p>
                        <p>Some examples of simple phobias are:</p>
                        <ul>
                          <li>Animal – which include rodents, dogs, spiders, birds etc</li>
                          <li>Bodily – including blood, vomit, or injections</li>
                          <li>Environmental – which include heights, deep water, and germs</li>
                          <li>Sexual – such as performance anxiety or worry of sexually transmitted infections</li>
                          <li>Situational – including flying or going to the doctor</li>
                        </ul>
                        <p>Some examples of complex phobias are:</p>
                        <ul>
                          <li>Agoraphobia – fear of open areas, crowded places, traveling or public transport</li>
                          <li>Social phobia (social anxiety) – fear of social situations</li>
                        </ul>
                        <p>Which cures may help?</p>
                        <p>Cognitive Behavioural therapy (CBT)</p>
                        <p>Mindfulness based methods</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="q">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Post Natal Depression
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>More than simply the ‘baby blues’ that many women experience for some weeks after giving birth, postnatal depression is a serious mental health condition that commonly affects women but also can affect their partners. This type of depression occurs during pregnancy or after birth. Feelings of severe sadness, anxiety, and tiredness can make it difficult for new mothers to complete everyday activities for themselves or for their babies.</p>
                        <p>Some of the usual signs of postnatal depression include:</p>
                        <ul>
                          <li>Persistent feeling of unhappiness or low mood</li>
                          <li>Loss of interest with the world around you and no longer taking part in activities</li>
                          <li>Lack of energy and feeling tired most of the time</li>
                          <li>Feeling that you are unable to look after your child</li>
                          <li>Problems concentrating and making choices</li>
                          <li>Loss of appetite or increased urge for food</li>
                          <li>Feelings of guilt, hopelessness, and guilt</li>
                          <li>Difficulty bonding with your infant with a sense of indifference towards the child and no enjoyment in the child’s company.</li>
                          <li>Frightening thoughts such as wishing to hurt your toddler, these can be very frightening and traumatic, but they are not often acted upon</li>
                          <li>Thinking about self-harm and suicide</li>
                        </ul>
                        <p>If you feel that the above applies to you, it is vital to seek help as quickly as possible because the symptoms could have a considerable effect on you and your child. With an appropriate therapy, most women make a full recovery.</p>
                        <p>Which treatments could help?</p>
                        <ul>
                          <li>Cognitive behavioural therapy (CBT)</li>
                          <li>Cognitive analytic therapy (CAT)</li>
                        </ul>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="r">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Post Traumatic Stress Disorder
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>Post-traumatic stress disorder is an anxiety ailment that can develop in response to experiencing a severely worrying situation. Some examples of traumatic events that would promote PTSD include natural disasters, terror assaults, violence, abuse, severe neglect, or traffic incidents, however a traumatic event may be any experience wherein you’re in danger, or you witness someone else in danger. People tormented by PTSD frequently relive the triggering event through nightmares and/or flashbacks that could arise at any time. The unpleasantness and severity of their signs and symptoms can make it very hard for sufferers to go about their day-to-day lives. Although symptoms commonly occur right after the event, people who’ve experienced abuse, neglect, or violence, can also experience complex PTSD, in which adolescent trauma may cause PTSD symptoms years later.</p>
                        <p>PTSD symptoms include:</p>
                        <ul>
                          <li>Re-experiencing such events as flashbacks, nightmares, repetitive images and bodily sensations (consisting of nausea, ache, sweating, or trembling)</li>
                          <li>Avoidance and emotional numbing</li>
                          <li>Hyper-arousal together with irritability, irritated outbursts, sleeping problems, trouble concentrating</li>
                        </ul>
                        <p>Sometimes people stricken by PTSD can suffer from other emotional problems which includes anxiety, melancholy, self-harm or engage in substance abuse.</p>
                        <p>If you feel that the above applies to you, therapy will allow you to overcome your situation and greatly enhance your quality of life.</p>
                        <p>Which therapies may help?</p>
                        <ul>
                          <li>Cognitive-behavioural therapy (CBT)</li>
                          <li>Schema therapy (ST)</li>
                          <li>Dialectical behaviour therapy (DBT)</li>
                        </ul>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="s">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                          Psychosexual Conditions
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>Psychosexual issues are sexual troubles that have a physiological foundation, and they are far more common than you might suppose. Although there are many causes, psychosexual issues can come about as a result of stress, anxiety, depression, or due to previous traumatic experiences. Issues can range in intensity and duration; some may be simple and fleeting while other psychosexual issues can be more long-term.</p>
                        <p>Some examples of psychosexual issues include:</p>
                        <ul>
                          <li>Loss of libido</li>
                          <li>Painful intercourse</li>
                          <li>Difficulties achieving orgasm</li>
                          <li>Arousal problems</li>
                          <li>Erectile dysfunction</li>
                          <li>Premature ejaculation</li>
                          <li>Breakdown in a couple’s sexual relationship</li>
                        </ul>
                        <p>If you feel that the above applies to you, therapy will allow you to recognize the underlying causes of your problems and triumph over them by putting steps in place to manage such difficulties.</p>
                        <p>Which therapies would possibly assist?</p>
                        <p>A variety of treatment and therapy options are available for those suffering from psychosexual issues, our advice would be to consult one of our medical professionals to discuss the most appropriate course of action.</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="t">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                          Relationship Difficulties 
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>Having healthy relationships with others – be it friends, relatives, colleagues, or significant others – gives us with so many benefits and is crucial for our mental health and wellbeing. As we’re all our own person with differing views and opinions, tensions in certain relationships can grow over time. However, experiencing frequent or excessive tension/conflict within relationships is very serious, but common, and can have a substantial impact on your wellbeing and quality of life.</p>
                        <p>If you’re finding it tough to converse with your partner about your issues, are experiencing challenges with your employer or colleagues, or finding it difficult to engage with your family, therapy can be a safe area for you to talk about your issues, get to the root of the difficulties, and develop ways in which to resolve the conflict.</p>
                        <p>Some signs that you are experiencing difficulties in your relationships are:</p>
                        <ul>
                          <li>· Unequal give and take, feeling as though you’re always having to help the opposite individual with no reciprocation, or you’re overly dependent on the other individual.</li>
                          <li>· Feeling as though you’re walking on eggshells, that you cannot mention certain subjects due to the fact that your partner will react negatively and/or disproportionately.</li>
                          <li>· Control problems, where you sense that you always need to do what the opposite individual asks.</li>
                          <li>· Feeling misunderstood or as even though you are not being listened to correctly.</li>
                          <li>· Emotional, verbal, or physical abuse. Do you feel as though you are frequently put down or overlooked, or that arguments result in violence?</li>
                        </ul>
                        <p>If you feel that any of the above applies to you and your relationships, therapy can help you get to the root of your problems and help you develop effective communication methods.</p>
                        <p>Which therapies might assist?</p>
                        <ul>
                          <li>Cognitive Behavioural therapy</li>
                          <li>Schema therapy</li>
                          <li>Cognitive analytic therapy</li>
                          <li>Dynamic interpersonal therapy</li>
                          <li>Narrative therapy</li>
                          <li>Couples therapy</li>
                        </ul>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="u">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                          Sleep Disorders 
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>We all have problem falling asleep now and again, especially if we are feeling particularly stressed. However, regular and satisfactory sleep is critical, as while we sleep, our bodies physically and mentally restore themselves, permitting us to go about our busy lives. If sleep issues are a regular occurrence, you may be suffering from a sleep disorder, and left untreated, this could have a harmful impact on your daily functioning. One of the most common varieties of sleep disorders is insomnia which is characterized by way of an inability to sleep or sleep well at night.</p>
                        <p>Some commonplace signs of insomnia include:</p>
                        <ul>
                          <li>Difficulty falling asleep at night or going to sleep again after waking during the night</li>
                          <li>Waking up frequently for the duration of the night</li>
                          <li>You are reliant upon medication to sleep</li>
                          <li>Sleepiness and low energy during the day</li>
                          <li>Sleep feels unrefreshing and you wake up feeling worn-out</li>
                          <li>There also are other forms of sleep disorders including sleep apnoea, restless leg syndrome and narcolepsy.</li>
                        </ul>
                        <p>If you feel that the above applies to you, therapy can greatly help to enhance your ‘sleep hygiene’ and your therapist can teach you powerful strategies for managing your sleep.</p>
                        <p>Which treatment options might assist?</p>
                        <p>Cognitive behavioural remedy (CBT)</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="v">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                          Social Anxiety
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>Social anxiety is a common anxiety disorder characterized by chronic and overwhelming fear of social situations. We can all get slightly anxious during social situations sometimes, but a person stricken by social anxiety will worry more regularly and with greater intensity at the concept of a certain social interactions. Sometimes those worries may be very specific, which may include the fear of falling over in the front of others or being laughed at. These issues can make it very hard for individuals to go about normal day-to-day tasks such as making telephone calls or interacting with cashiers in a shop. In this manner, social anxiety can significantly disrupt daily functioning and have negative consequences.</p>
                        <p>A number of the common social anxiety signs include:</p>
                        <ul>
                          <li>Fear of everyday activities such as making phone calls or going to the shops</li>
                          <li>Low self-worth</li>
                          <li>Fear of being criticised</li>
                          <li>Avoiding eye contact</li>
                          <li>Misuse of drugs or alcohol to aid themselves during social interactions</li>
                        </ul>
                        <p>If you feel that the above may apply to you, therapy can be extremely helpful in supporting you to come to terms with the origin of your social anxiety and can help you to overcome it.</p>
                        <p>Which treatments would possibly help?</p>
                        <ul>
                          <li>Cognitive Behavioural therapy</li>
                          <li>Cognitive Analytic therapy</li>
                        </ul>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="w">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                          Stress
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>Stress is the body’s way of responding to certain situations which may be demanding or that can be threatening, including financial difficulties, issues at work, or relationship troubles. When we experience a threat, our bodies shift into ‘fight or flight’ mode wherein they release stress hormones to prepare for emergency movement to defend us from the threat. If someone is not able to differentiate between daily stress and life-threatening occasions, this could result in severe and/or common stress issues and a lack of ability to control it effectively can cause further problems and become debilitating. Many health troubles can be exacerbated by stress.</p>
                        <p>Some of the common symptoms of stress include:</p>
                        <ul>
                          <li>Memory issues</li>
                          <li>Inability to pay attention</li>
                          <li>Anxious or racing mind</li>
                          <li>Constant fear</li>
                          <li>Irritability or quick mood</li>
                          <li>Feeling overwhelmed</li>
                          <li>Moodiness</li>
                          <li>Aches and pains</li>
                          <li>Chest pains</li>
                          <li>Procrastination or neglecting responsibilities</li>
                          <li>Nervous habits (e.g. nail biting)</li>
                        </ul>
                        <p>If you feel that you are experiencing intense or frequent stress, therapy can assist you in understanding causes of stress and help you become aware of what elements might be making your stress worse. Your therapist can also teach you powerful techniques to manipulate your stress, including relaxation strategies, in an effort to greatly improve your quality of life.</p>
                        <p>Which remedies would possibly help?</p>
                        <ul>
                          <li>Cognitive behavioural therapy</li>
                        </ul>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="x">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                          Work Related Stress
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>Employment can have many substantial benefits for your mental health because it provides you with a structured routine, an income, and opportunities to succeed. However, on occasion problems at work can be a source of great stress.</p>
                        <p>Stress is the body’s way of responding to certain situations which may be demanding or that can be threatening. When we experience a threat, our bodies shift into ‘fight or flight’ mode wherein they release stress hormones to prepare for emergency movement to defend us from the threat. Being under a degree of pressure is normal and occasionally a feeling of stress may be a very good motivator to efficiently finish a piece of work for example. However, tight cut-off dates, lengthy hours, tough colleagues, and endless tasks can inflict severe and/or frequent stress that can be overwhelming. This pressure can affect your productiveness and work performance, harm your physical and mental health, and impair your relationships.</p>
                        <p>Some of the signs of stress include:</p>
                        <ul>
                          <li>Memory issues</li>
                          <li>Inability to pay attention</li>
                          <li>Anxious or racing mind</li>
                          <li>Constant worry</li>
                          <li>Irritability or short temper</li>
                          <li>Feeling overwhelmed</li>
                          <li>Moodiness</li>
                          <li>Aches and pains</li>
                          <li>Chest pains</li>
                          <li>Procrastination or neglecting responsibilities</li>
                          <li>Nervous habits (e.g. nail biting, pacing)</li>
                        </ul>
                        <p>If you feel that you are experiencing intense or frequent stress, therapy can assist you in understanding causes of stress and help you become aware of what elements might be making your stress worse. Your therapist can also teach you powerful techniques to manipulate your stress, including relaxation strategies, in an effort to greatly improve your quality of life.</p>
                        <p>Which treatment options may assist?</p>
                        <ul>
                          <li>Cognitive behavioural therapy</li>
                        </ul>
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
