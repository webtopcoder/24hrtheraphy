import React from 'react';
import Link from 'next/link';

const AboutUs = () => {
    return (      
        <div className="about-area two ptb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="about-img">
							<img src="/img/about-two/about-two1.png" alt="Image" />

							<div className="shape-1">
								<img src="/img/about-two/about-two-shape2.png" alt="Image" />
							</div>
						</div>
					</div>

					<div className="col-lg-6">
						<div className="about-content">
							<span className="top-title">About Corona</span>
							<h2>How COV-19 Spreads</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
							<strong>The best way to prevent illness is to avoid being exposed to this virus.</strong>

							<ul>
								<li>
									<i className="flaticon-tick"></i>
									Clean and disinfect frequently touched surfaces
								</li>
								<li>
									<i className="flaticon-tick"></i>
									Avoid touching your eyes, nose, and mouth
								</li>
								<li>
									<i className="flaticon-tick"></i>
									Clean your hands with a hand sanitizer
								</li>
								<li>
									<i className="flaticon-tick"></i>
									Cover coughs and sneezes
								</li>
								<li>
									<i className="flaticon-tick"></i>
									Stay home if you’re sick
								</li>
								<li>
									<i className="flaticon-tick"></i>
									Wear a facemask if sick
								</li>
								<li>
									<i className="flaticon-tick"></i>
									Cover your mouth and nose
								</li>
							</ul>

                            <Link href="/about">
                                <a className="default-btn">Know Details</a>
                            </Link>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default AboutUs;