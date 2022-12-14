import React from 'react';
import Link from 'next/link';

const FeaturedService = () => {
    return (      
        <div className="second-facility-area six pt-100 pb-70">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-4 col-sm-6">
						<div className="second-facility-item">
							<img src="/img/home-six/home-six-service-icon1.png" alt="Image" />
							<h3>Medical Counseling</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            <Link href="/service-details">
                                <a className="read-more">
                                    Read More <i className="bx bx-plus"></i>
                                </a>
                            </Link>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="second-facility-item">
                            <img src="/img/home-six/home-six-service-icon2.png" alt="Image" />
							<h3>Free Health Checkup</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

							<Link href="/service-details">
                                <a className="read-more">
                                    Read More <i className="bx bx-plus"></i>
                                </a>
                            </Link>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="second-facility-item">
                            <img src="/img/home-six/home-six-service-icon3.png" alt="Image" />
							<h3>Emergency Service</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

							<Link href="/service-details">
                                <a className="read-more">
                                    Read More <i className="bx bx-plus"></i>
                                </a>
                            </Link>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default FeaturedService;