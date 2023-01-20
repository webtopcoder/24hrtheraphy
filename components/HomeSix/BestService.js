import React from 'react';
import Link from 'next/link';

const BestService = () => {
    return (      
        <div className="best-services-area pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<span className="top-title">Focused on Best Service</span>
					<h2>Organizer Free Camp</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Quis ipsum suspendisse</p>
				</div>

				<div className="row justify-content-center">
					<div className="col-lg-4 col-sm-6">
						<div className="single-best-services">
							<img src="/img/home-six/home-six-service1.jpg" alt="Image" />

							<div className="best-services-content">
								<h3>Free health checkup</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolor sit amet, consectetur.</p>
								
                                <Link href="/service-details">
                                    <a className="read-more">
                                        Read More <i className="bx bx-plus"></i>
                                    </a>
                                </Link>

								<span className="flaticon-heart-2"></span>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-best-services">
                            <img src="/img/home-six/home-six-service2.jpg" alt="Image" />

							<div className="best-services-content">
								<h3>Diagnosis test</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolor sit amet, consectetur.</p>

								<Link href="/service-details">
                                    <a className="read-more">
                                        Read More <i className="bx bx-plus"></i>
                                    </a>
                                </Link>

								<span className="flaticon-test-tube"></span>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-best-services">
                            <img src="/img/home-six/home-six-service3.jpg" alt="Image" />

							<div className="best-services-content">
								<h3>Health care counseling</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolor sit amet, consectetur.</p>

								<Link href="/service-details">
                                    <a className="read-more">
                                        Read More <i className="bx bx-plus"></i>
                                    </a>
                                </Link>

								<span className="flaticon-man"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default BestService;