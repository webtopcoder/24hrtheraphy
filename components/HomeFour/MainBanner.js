import React from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

const MainBanner = () => {
    return (      
        <div className="main-banner-area-four">
			<div className="d-table">
				<div className="d-table-cell">
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-7">
								<div className="banner-text">
									<ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                        <span>Smarter Service Care</span>
                                    </ScrollAnimation>

                                    <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
									    <h1>Vaccination Program for Diseases Prevention</h1> 
                                    </ScrollAnimation>
									
                                    <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
									    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua gravida. Risus commodo.</p>
                                    </ScrollAnimation>

                                    <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                        <div className="banner-btn">
                                            <Link href="/appointment">
                                                <a className="default-btn">
                                                    Book An Appointment
                                                </a>
                                            </Link>
                                        </div>
                                    </ScrollAnimation>
								</div>
							</div>
		
							<div className="col-lg-5 pr-0">
								<div className="banner-img-wrap">
									<ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                        <div className="banner-img">
                                            <img src="/img/home-four/home-four-banner.png" alt="Image" />
                                        </div>
                                    </ScrollAnimation>

									<div className="shape">
										<img src="/img/home-four/home-four-shape-2.png" alt="Image" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="shape">
				<img src="/img/home-four/home-four-shape-1.png" alt="Image" />
			</div>
		</div>
    )
}

export default MainBanner;