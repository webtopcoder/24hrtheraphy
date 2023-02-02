import React from 'react';
import Link from 'next/link';
import './footer.less';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="footer-top-area f-bg pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1 col-md-6">

                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="single-widget">
                                <Link href="/">
                                    <a>
                                        <img src="/img/logo.png" className='footer-logo' alt="Image" />
                                    </a>
                                </Link>

                                <p>24 hour therapy is an online therapy platform made for people who are struggling mentally, emotionally and experiencing behavioral concerns. Our mission is to provide the perfect therapy according to your needs anytime and anywhere. </p>

                                <div className="social-area">
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/profile.php?id=100087153733204" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/Camline_therapy" target="_blank">
                                                <i className="bx bxl-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/camline-therapy-339440263/?trk=public-profile-join-page" target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/@Camline24Therapy" target="_blank">
                                                <i className="bx bxl-youtube"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/camline24hrtherapy/" target="_blank">
                                                <i className="bx bxl-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6">
                            <div className="single-widget">
                                <h3>INFORMATION</h3>
                                <ul>
                                    <li>
                                        <Link href="/faq">
                                            <a>
                                                FAQ
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/work-with-us">
                                            <a>
                                                Work with us
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/type-of-therapy">
                                            <a>
                                                Type of therapy
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/mental-health-conditions">
                                            <a>
                                                Mental Health Conditions
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.nhs.uk/nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/">
                                            <a>
                                                Emergency Services
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget contact">
                                <h3>Get In Touch</h3>
                                <ul>
                                    <li>
                                        <a href="tel:+822456974">
                                            <i className="bx bx-phone-call"></i>
                                            <span>Hotline:</span>
                                            Phone: +822456974
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:hello@corf.com">
                                            <i className="bx bx-envelope"></i>
                                            <span>Email:</span>
                                            info@24hrtheraphy.com
                                        </a>
                                    </li>
                                    <li>
                                        <i className="bx bx-location-plus"></i>
                                        <span>Address:</span>
                                        Cuffley Place, Office Suite 112 Sopers Rd, Cuffley, London, United Kingdom, EN6 4SG
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-6">

                        </div>
                    </div>
                </div>
            </footer>

            <div className="footer-bottom-area">
                <div className="container">
                    <div className="copy-right">
                        <p>Copyright &copy; {currentYear} 24HOUR THERAPY &nbsp;&nbsp;|&nbsp;&nbsp;
                            <Link href="/privacy-policy">
                                <a>PRIVACY POLICY</a>
                            </Link>
                            &nbsp;&nbsp; | &nbsp;&nbsp;
                            <Link href="/terms-conditions">
                                <a>TERMS CONDITIONS</a>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;