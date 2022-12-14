import React from 'react';
import Link from 'next/link';

const OurMission = () => {
    return (      
        <div className="about-area four mission pb-100">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-6">
						<div className="about-content ml-auto mt-0">
							<span className="top-title">Our Mission</span>
							<h2>Our Aim to Provide:</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
							
							<ul>
								<li>
									<i className="flaticon-tick"></i>
									Vaccine for Babies & Children
								</li>
								<li>
									<i className="flaticon-tick"></i>
									Vaccine for Premature Babies
								</li>
								<li>
									<i className="flaticon-tick"></i>
									Before Pregnancy
								</li>
								<li>
									<i className="flaticon-tick"></i>
									During Pregnancy
								</li>
								<li>
									<i className="flaticon-tick"></i>
									Childbirth
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
                                <a className="default-btn">
                                    More About Us
                                </a>
                            </Link>
						</div>
					</div>

					<div className="col-lg-6 pr-0">
						<div className="about-img about-img-2"></div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default OurMission;