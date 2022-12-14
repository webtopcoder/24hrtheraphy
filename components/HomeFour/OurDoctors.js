import React from 'react';
import Link from 'next/link';

const OurDoctors = () => {
    return (      
        <div className="ours-doctors-area four">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-6">
						<div className="doctors-content ptb-100">
							<span className="top-title">Our Doctors</span>
							<h2>Help your kids understand the importance of vaccines</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
							
							<ul>
								<li>
									<i className="flaticon-tick"></i>
									Influenza Vaccine
								</li>
								<li>
									<i className="flaticon-tick"></i>
									Vaccination Guidelines
								</li>
								<li>
									<i className="flaticon-tick"></i>
									How Vaccine Works
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
						<div className="doctors-img"></div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default OurDoctors;