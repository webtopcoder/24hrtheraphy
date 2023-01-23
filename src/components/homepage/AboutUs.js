import React from 'react';
import Link from 'next/link';

const AboutUs = () => {
    return (      
        <div className="about-area pb-130">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="about-img">
							<img src="/img/about/about1.jpg" alt="Image" />

							<div className="shape-1">
								<img src="/img/about/about-shape-1.png" alt="Image" />
							</div>

							<div className="shape-2">
								<img src="/img/about/about-shape-2.png" alt="Image" />
							</div>

							<div className="shape-3">
								<img src="/img/about/about-shape-3.png" alt="Image" />
							</div>
						</div>
					</div>

					<div className="col-lg-6">
						<div className="about-content">
							<span className="top-title">About Us</span>
							<h2>Online Therapy, Effective, Affordable, Convenient</h2>
							<p>24 hour therapy is an online therapy platform made to help people who are struggling mentally, emotionally and experiencing behavioral concerns. <br />You can find qualified and experienced counselors and therapists anytime and anywhere according to your convenience. If you or someone you know is experiencing mental health, behavioral or any kind of issues or life challenges, visit <Link href="/our-therapists">our therapist page</Link> to find a qualified therapist to talk to.</p>
							
							<ul>
								<li>
									<i className="flaticon-tick"></i>
									Licensed Therapist
								</li>
								<li>
									<i className="flaticon-tick"></i>
									Privacy
								</li>
								<li>
									<i className="flaticon-tick"></i>
									24/7 service
								</li>
								<li>
									<i className="flaticon-tick"></i>
									Personalized Therapy
								</li>
								<li>
									<i className="flaticon-tick"></i>
									A trustful environment
								</li>
							</ul>

                            <Link href="/about-us">
						    	<a className="default-btn">About Us</a>
                            </Link>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default AboutUs;