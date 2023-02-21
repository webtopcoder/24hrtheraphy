import { IUIConfig } from "src/interfaces";
import "./index.less";
import { connect } from "react-redux";
import Head from "next/head";
import {
  Row,
  Col,
  Button,
  Modal,
  Steps,
  message,
  Radio,
  Space,
  Input,
} from "antd";
import Link from "next/link";
import { useRef, useState } from "react";

interface IProps {
  ui: IUIConfig;
  settings?: any;
}

const RegisterForm = () => {
  return <p>This is a register form.</p>;
};

function Homepage({ settings, ui }: IProps) {
  const otherRef = useRef([]);
  otherRef.current = [];

  const addToRefs: (el) => void = (el) => {
    if (el && !otherRef.current.includes(el)) {
      otherRef.current.push(el);
    }
  };

  const inputRef = useRef([]);
  inputRef.current = [];

  const addToInputRefs: (el) => void = (el) => {
    if (el && !inputRef.current.includes(el)) {
      inputRef.current.push(el);
    }
  };

  const [modalOpen, setModalOpen] = useState(false);
  const steps = [
    {
      title: "License Type",
      question: "Select your license type to get started.",
      formName: "licenseType",
      options: [
        "Psychologist",
        "Marriage and Family Therapist",
        "Clinical Social Worker",
        "Child Therapist",
        "Mental Health Counselor",
        "Professional Counselor",
      ],
    },
    {
      title: "Question",
      question: "Where do you currently practice your license?",
      formName: "secondQuestion",
      options: [
        "Clinical Practice",
        "Online Therapy Platforms",
        "Private Practice",
        "Community Health Center",
        "Practice on Academic or Research Setting",
        "Other",
      ],
    },
    {
      title: "Question",
      question: "Why do you want to join 24 hour therapy?",
      formName: "thirdQuestion",
      options: [
        "Interested in Online Therapy",
        "To grow my private practice",
        "To work as a full time",
        "To work as a part time",
        "Other",
      ],
    },
    {
      title: "Question",
      question:
        "How much time do you intend to be available for 24 hour therapy clients?",
      formName: "fourthQuestion",
      options: [
        "Be flexible in time",
        "Up to 5 hours a week",
        "5 to 10 hours a week",
        "10 to 20 hours a week",
        "Other than 30 hours a week",
        "Not decided yet",
      ],
    },
    {
      title: "Question",
      question: "How did you first hear about 24 hour Therapy?",
      formName: "finalQuestion",
      options: [
        "Internet Research",
        "Social Media",
        "Friend or colleague",
        "Email Outreach",
        "Other",
      ],
    },
    {
      title: "Form",
      content: <RegisterForm />,
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const [radioValue, setRadioValue] = useState("");
  const initialFormValues = [
    {
      answer: "",
    },
  ];
  const [formValues, setFormValues] = useState(initialFormValues);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setRadioValue(e.target.value);
  };

  const handleNextClick = () => {
    for (let i = 0; i <= 5; i++) {
      const checkedValue = otherRef?.current[i]?.props?.value;
      const inputValue = inputRef?.current[i]?.input?.value;
      if (otherRef?.current[i]?.input?.checked) {
        if (checkedValue === "Other") {
          setFormValues((prevState) => [...prevState, { answer: inputValue }]);
        } else {
          setFormValues((prevState) => [
            ...prevState,
            { answer: checkedValue },
          ]);
        }
      }
    }
    setRadioValue("");
    next();
  };

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
      <div className="registration-page-container">
        <Row>
          <Col xs={24} xl={12}>
            <div className="hero-left-column">
              <img className="hero-section-logo" src="/img/logo.png"></img>
              <h2>Help make a difference in people's lives.</h2>
              <p>
                We let you decide how many hours you'd want to excel at our
                service.
              </p>

              <Link href="#">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setModalOpen(true);
                  }}
                  className="default-btn"
                >
                  Join as a Professional
                </a>
              </Link>
              <Row className="features-list">
                <Col className="feature-container" xs={24} xl={8}>
                  <img src="/img/professional-register/time.svg"></img>
                  <p>Flexible Schedule</p>
                </Col>
                <Col className="feature-container" xs={24} xl={8}>
                  <img src="/img/professional-register/reliable.svg"></img>
                  <p>Reliable Service</p>
                </Col>
                <Col className="feature-container" xs={24} xl={8}>
                  <img src="/img/professional-register/money.svg"></img>
                  <p>Earn Money</p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col className="hero-img-container" xs={24} xl={12}>
            <img
              className="hero-img"
              src="/img/professional-register/doctor-image-two.png"
            />
          </Col>
        </Row>
        <div className="section-row">
          <h2 className="section-heading">
            Impact people's live from anywhere in the world.
          </h2>
          <br />
          <p className="section-description">
            Make a meaningful impact on people's mental health by working as an
            online therapist with our service.
          </p>
          <div className="section-content">
            <Row className="section-lists">
              <Col className="section-columns left-column" xs={24} xl={12}>
                <img src="/img/professional-register/img-doctor.png" />
              </Col>
              <Col className="section-columns right-column" xs={24} xl={12}>
                <ul>
                  <li>
                    <i className="flaticon-tick"></i>A simple, efficient
                    platform that empowers counselors to provide services
                    autonomously.
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Great support from the staff, and a robust community of
                    counselors offering peer support.
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Significantly enhance your own clinical skills.
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Make a profound difference in the lives of thousands of
                    people all around the world.
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>A professional growth
                    experience for therapists to offer counseling through this
                    online format.
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </div>
        <div className="section-row">
          <Link href="#">
            <a
              onClick={(e) => {
                e.preventDefault();
                setModalOpen(true);
              }}
              className="default-btn"
            >
              Click to be part of an awesome journey
            </a>
          </Link>
        </div>
      </div>
      <div className="requirements-container ptb-100">
        <div className="container">
          <h3>Requirements</h3>
          <ul>
            <li>
              Must have valid therapist related qualification and valid, current
              insurance
            </li>
            <li>
              Must offer DBS Disclosure and Barring Service
              <br />
              <i>
                NOTE: Unfortunately, if you are an intern or if you require
                supervision to provide counselling services, you cannot be a
                provider at 24hrtherapy.co.uk at this time.
              </i>
            </li>
            <li>
              Minimum of 1 years’ experience in counselling for adults and
              couples
            </li>
            <li>
              Must be flexible with time – we operate 24 hours a day every day
            </li>
            <li>Must be happy to work remotely via webcam services </li>
            <li>Reliable Internet connection </li>
          </ul>
          <i>
            Note: Therapists on our platform are independent service providers
            not employees of 24hrtherapy.co.uk
          </i>
          <br />
          <br />
        </div>
      </div>
      <Modal
        centered
        width="1200px"
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        okButtonProps={{
          hidden: true,
        }}
        cancelButtonProps={{
          hidden: true,
        }}
      >
        <div className="modal-content-container">
          <Steps
            style={{
              marginTop: "3rem",
            }}
            current={current}
            items={items}
          />

          <div
            style={{
              marginBottom: "3rem",
              marginTop: "3rem",
            }}
          >
            {steps[current]?.question ? (
              <h5>Q. {steps[current]?.question}</h5>
            ) : (
              ""
            )}

            {steps[current]?.content}
            <Radio.Group onChange={onChange} value={radioValue}>
              <Space direction="vertical">
                {steps[current]?.options?.map((item, index) => (
                  <div className="question-container" key={index}>
                    {item === "Other" ? (
                      <Radio value={item} ref={addToRefs}>
                        {item}
                        <Input
                          ref={addToInputRefs}
                          style={{
                            width: 100,
                            marginLeft: 10,
                          }}
                        />
                      </Radio>
                    ) : (
                      <Radio value={item} ref={addToRefs}>
                        {item}
                      </Radio>
                    )}
                  </div>
                ))}
              </Space>
            </Radio.Group>
          </div>
          <div
            style={{
              marginTop: 24,
            }}
          >
            {current < steps.length - 1 && (
              <Button
                className="modal-cta-button"
                type="primary"
                style={{ height: `50px` }}
                onClick={handleNextClick}
              >
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                className="modal-cta-button"
                type="primary"
                style={{ height: `50px` }}
                onClick={() => {
                  message.success("Processing complete!");
                  formValues.shift();
                  console.log(formValues);
                }}
              >
                Done
              </Button>
            )}
            {current > 0 && (
              <Button
                className="modal-cta-button"
                style={{
                  height: `50px`,
                }}
                onClick={() => prev()}
              >
                Previous
              </Button>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}

const mapStateToProps = (state) => ({
  ui: { ...state.ui },
  settings: state.settings,
});

export default connect(mapStateToProps)(Homepage);
