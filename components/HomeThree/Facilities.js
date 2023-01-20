import React from 'react';
import Link from 'next/link';

const Facilities = () => {
    return (      
        <div className="second-facility-area three mt-100 pb-70">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-4 col-sm-6 p-0">
						<div className="second-facility-item">
							<img src="/img/facility-img/facility-icon1.png" alt="Image" />
							<h3>Qualified Doctors</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            <Link href="/service-details">
                                <a className="read-more">
                                    Read More <i className="bx bx-plus"></i>
                                </a>
                            </Link>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6 p-0">
						<div className="second-facility-item">
							<img src="/img/facility-img/facility-icon2.png" alt="Image" />
							<h3>Emergency Helicopter</h3>
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
							<img src="/img/facility-img/facility-icon3.png" alt="Image" />
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

export default Facilities;