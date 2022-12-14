import React from 'react';
import Link from 'next/link';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    items:1,
    loop:true,
    nav:false,
    mouseDrag: true,
    dots: true,
    autoplay: true, 
    autoplayHoverPause: true,
};

const MainBanner = () => {
    // Slider
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }

    return (      
        <>
            <div className="hero-slider-area">
                {display ? <OwlCarousel 
                    className="hero-slider-wrap owl-carousel owl-theme"
                    {...options}
                >  
                    <div className="slider-item slider-item-bg-1">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-9">
                                            <div className="slider-text one">
                                                <span className="top-title">Assessment Center &  Testing</span>
                                                <h1>Assessment Treatment Center For COVID-19 Disease</h1>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto laborum eaque! Deserunt maxime, minus quas molestiae reiciendis esse natus nisi iure.</p>
            
                                                <div className="slider-btn">
                                                    <Link href="/appointment">
                                                        <a className="default-btn">
                                                            Book An Appointment
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-3">
                                            <div
                                                onClick={e => {e.preventDefault(); openModal()}}
                                                className="video-btn popup-youtube"
                                            > 
                                                <i className="flaticon-play-button-2"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slider-item slider-item-bg-2">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-9">
                                            <div className="slider-text two">
                                                <span className="top-title">Assessment Center & Testing</span>
                                                <h1>Emergency? The world’s Wait for Find Doctor <br /> Easy Way</h1>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto laborum eaque! Deserunt maxime, minus quas molestiae reiciendis esse natus nisi iure.</p>
                                                
                                                <div className="slider-btn">
                                                    <Link href="/appointment">
                                                        <a className="default-btn">
                                                            Book An Appointment
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3">
                                            <div
                                                onClick={e => {e.preventDefault(); openModal()}}
                                                className="video-btn popup-youtube"
                                            > 
                                                <i className="flaticon-play-button-2"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slider-item slider-item-bg-3">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-9">
                                            <div className="slider-text two">
                                                <span className="top-title">Assessment Center &  Testing</span>
                                                <h1>Free Health Checkup Ensure A Better Life!</h1>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto laborum eaque! Deserunt maxime, minus quas molestiae reiciendis esse natus nisi iure.</p>
                                                
                                                <div className="slider-btn">
                                                    <Link href="/appointment">
                                                        <a className="default-btn">
                                                            Book An Appointment
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3">
                                            <div
                                                onClick={e => {e.preventDefault(); openModal()}}
                                                className="video-btn popup-youtube"
                                            > 
                                                <i className="flaticon-play-button-2"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </div>

            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />
        </>
    )
}

export default MainBanner;