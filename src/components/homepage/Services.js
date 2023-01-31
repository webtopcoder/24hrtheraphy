import React from 'react';
import Link from 'next/link';

const Services = () => {
	return (
		<div className="services-area bg pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<span className="top-title">Our Services</span>
					<h2>The Therapy we offer</h2>
					<p>Online Therapy with CBT Therapists and Psychologists anytime and anywhere.<br />Choose the type of therapy you want to do and find the therapist.</p>
				</div>

				<div className="row">
					<div className="col-lg-4 col-sm-6">
						<div className="single-services">
							<span className="flaticon-man"></span>
							<h3>Individual Therapy</h3>
							<p>Individual therapy is a process of collaborative effort between the therapist and the person in therapy.</p>
							<Link href="/type-of-therapy">
                                <a className="read-more">
                                    Read More <i className="bx bx-plus"></i>
                                </a>
                            </Link>
							<div className="services-shape">
								<img src="/img/services-card-shape.png" alt="Image" />
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-services">
							<span className="flaticon-people"></span>
							<h3>Couples Therapy</h3>
							<p>Couples therapy is also a relationship counselling, marriage counselling and couples counselling.</p>
							<Link href="/type-of-therapy">
                                <a className="read-more">
                                    Read More <i className="bx bx-plus"></i>
                                </a>
                            </Link>
							<div className="services-shape">
								<img src="/img/services-card-shape.png" alt="Image" />
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-services">
							<span className="flaticon-doll"></span>
							<h3>Child Therapy</h3>
							<p>Therapy is for everybody and there is different type of therapy available to those in need. </p>
							<Link href="/type-of-therapy">
                                <a className="read-more">
                                    Read More <i className="bx bx-plus"></i>
                                </a>
                            </Link>
							<div className="services-shape">
								<img src="/img/services-card-shape.png" alt="Image" />
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-services">
							<span className="flaticon-people"></span>
							<h3>Group Therapy</h3>
							<p>Different types of group therapy exist depending on the mental conditions of the people. </p>
							<Link href="/type-of-therapy">
                                <a className="read-more">
                                    Read More <i className="bx bx-plus"></i>
                                </a>
                            </Link>
							<div className="services-shape">
								<img src="/img/services-card-shape.png" alt="Image" />
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-sm-6">
						<div className="single-services">
							<span className="flaticon-email"></span>
							<h3>Live - Chat Therapy</h3>
							<p> Live Chat therapy can be done individually or in the group.</p>
							<Link href="/type-of-therapy">
                                <a className="read-more">
                                    Read More <i className="bx bx-plus"></i>
                                </a>
                            </Link>
							<div className="services-shape">
								<img src="/img/services-card-shape.png" alt="Image" />
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-sm-6">
						<div className="single-services">
							<span className="flaticon-heartbeat"></span>
							<h3>Family Therapy</h3>
							<p> Family Therapy focuses on issues that affect the mental health and functioning of families.</p>
							<div className="services-shape">
								<img src="/img/services-card-shape.png" alt="Image" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Services;