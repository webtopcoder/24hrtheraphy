import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    margin: 0,
    nav: false,
    mouseDrag: true,
    items: 1,
    dots: true,
    autoplay: true,
    smartSpeed: 800,
    autoplayHoverPause: true,
    navText: [
        "<i class='flaticon-back'></i>",
        "<i class='flaticon-right'></i>",
    ],
};

const MainBanner = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="hero-slider-area hero-slider-area-seven">
            {display ? <OwlCarousel
                className="hero-slider-wrap owl-carousel owl-theme"
                {...options}
            >
                <div className="slider-item slider-item-bg-6">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider-item slider-item-bg-4">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="slider-text one">
                                    <span className="top-title">Welcome to 24 hour therapy</span>
                                    <h1>Convenient and affordable therapy anytime and anywhere</h1>
                                    <p>Get guidance and support from your therapist.</p>

                                    {/* <div className="slider-btn">
                                        <Link href="/appointment">
                                            <a className="default-btn">
                                                Book An Appointment
                                            </a>
                                        </Link>
									</div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="slider-item slider-item-bg-5">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="slider-text two">
                                    <span className="top-title">Welcome to 24 hour therapy</span>
                                    <h1>Face the obstacles in your life and bring back your confidence.</h1>
                                    <p>24 hour therapy, Providing personalized therapy.</p>

                                    {/* <div className="slider-btn">
                                        <Link href="/appointment">
                                            <a className="default-btn">
                                                Book An Appointment
                                            </a>
                                        </Link>
									</div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel> : ''}
        </div>
    )
}

export default MainBanner;