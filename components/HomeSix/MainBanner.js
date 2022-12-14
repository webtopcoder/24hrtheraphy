import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true, 
    items: 1,
    animateOut: 'fadeOut',
    margin: 0,
};

const MainBanner = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (      
        <div className="main-banner-six">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="main-banner-content">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="content">
										<span className="top-title">For Better Life!</span>
                                        <h1>Free Health Checkup Ensure A Better Life!</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                        <Link href="/contact">
                                            <a className="default-btn">
                                                Book An Appointment 
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 pr-0 col-md-12">
                        {display ? <OwlCarousel 
                            className="banner-image-slider owl-carousel owl-theme"
                            {...options}
                        > 
                            <div className="banner-image banner-slider-bg-1"></div>
                            <div className="banner-image banner-slider-bg-2"></div>
                        </OwlCarousel> : ''}
                    </div>
                </div>
			</div>

			<div className="shape">
				<img src="/img/home-six/home-six-shape1.png" alt="Image" />
			</div>
			<div className="shape-2">
				<img src="/img/home-six/home-six-shape2.png" alt="Image" />
			</div>
        </div>
    )
}

export default MainBanner;