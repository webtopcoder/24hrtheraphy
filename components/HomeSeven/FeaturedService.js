import React from 'react';
import Link from 'next/link';

const FeaturedService = () => {
    return (      
        <div className="second-facility-area seven pt-100 pb-70">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-3 col-sm-6 p-0">
						<div className="second-facility-item">
							<img src="/img/facility-img/facility-icon4.png" alt="Image" />
							<h3>Laboratory Services</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            <Link href="/service-details">
                                <a className="read-more">
                                    Read More <i className="bx bx-plus"></i>
                                </a>
                            </Link>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6 p-0">
						<div className="second-facility-item">
							<img src="/img/facility-img/facility-icon5.png" alt="Image" />
							<h3>Laboratory Accreditation</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

							<Link href="/service-details">
                                <a className="read-more">
                                    Read More <i className="bx bx-plus"></i>
                                </a>
                            </Link>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="second-facility-item">
							<img src="/img/facility-img/facility-icon6.png" alt="Image" />
							<h3>Leading Technology</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

							<Link href="/service-details">
                                <a className="read-more">
                                    Read More <i className="bx bx-plus"></i>
                                </a>
                            </Link>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="second-facility-item">
							<img src="/img/facility-img/facility-icon6.png" alt="Image" />
							<h3>Leading Technology</h3>
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