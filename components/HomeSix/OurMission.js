import React from 'react';
import Link from 'next/link';

const OurMission = () => {
    return (      
        <div className="ours-doctors-area">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-6">
						<div className="doctors-content ptb-100">
							<span className="top-title">Our Mission</span>
							<h2>We are Offering Reliable Consulting Services</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
							
							<ul>
								<li>
									<i className="flaticon-tick"></i>
									Provide free and high-quality medical services for poor population
								</li>
								<li>
									<i className="flaticon-tick"></i>
									Raise health awareness among the community and teach them to deal with communicable and noncommunicable.
								</li>
								<li>
									<i className="flaticon-tick"></i>
									Refer medical cases towards surgeries if required
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
						<div className="doctors-img about"></div>
					</div>
				</div>
			</div>

			<div className="shape">
				<img src="/img/home-six/home-six-about-shape.png" alt="Image" />
			</div>
		</div>
    )
}

export default OurMission;