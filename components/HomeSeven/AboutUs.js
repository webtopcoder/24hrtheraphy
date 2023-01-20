import React from 'react';
import Link from 'next/link';

const AboutUs = () => {
    return (      
        <div className="about-area-seven bg-color ptb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="about-content">
							<h2>We Employ Latest Technology & Company</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do sit amet, consectetur.</p>
							
							<ul className="m-0">
								<li>
									<i className="bx bx-check"></i>
									Chemical Research
								</li>
								<li>
									<i className="bx bx-check"></i>
									Pathology Testing
								</li>
								<li>
									<i className="bx bx-check"></i>
									Sample Preparation
								</li>
								<li>
									<i className="bx bx-check"></i>
									Healthcare Labs
								</li>
								<li>
									<i className="bx bx-check"></i>
									Advanced Microscopy
								</li>
								<li>
									<i className="bx bx-check"></i>
									Advanced Robotics
								</li>
								<li>
									<i className="bx bx-check"></i>
									Environmental Testing
								</li>
								<li>
									<i className="bx bx-check"></i>
									Anatomical Pathology
								</li>
							</ul>

							<div className="about-btn">
                                <Link href="/about">
                                    <a className="default-btn">
                                        About Us
                                    </a>
                                </Link>
							</div>
						</div>
					</div>

					<div className="col-lg-6">
						<div className="about-img">
							<img src="/img/home-seven/home-seven-about.jpg" alt="Image" />
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default AboutUs;