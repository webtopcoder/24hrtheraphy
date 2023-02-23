import { IUIConfig } from "src/interfaces";
import "./index.less";
import { connect } from "react-redux";
import Head from "next/head";
import { Row, Col, Modal } from "antd";
import Link from "next/link";
import { useState } from "react";
import WorkWithUsSteps from "@components/auth/register/work-with-us-steps";

interface IProps {
  ui: IUIConfig;
  settings?: any;
}

function WorkWithUs({ settings, ui }: IProps) {
  const [modalOpen, setModalOpen] = useState(false);

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
        width="1000px"
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        okButtonProps={{
          hidden: true,
        }}
        cancelButtonProps={{
          hidden: true,
        }}
        className="modal-content-container"
      >
        <WorkWithUsSteps />
      </Modal>
    </>
  );
}

const mapStateToProps = (state) => ({
  ui: { ...state.ui },
  ...state.auth.performerRegister,
});

export default connect(mapStateToProps)(WorkWithUs);
