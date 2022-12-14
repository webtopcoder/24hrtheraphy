import React from 'react';
import Link from 'next/link';

const Pricing = () => {
    return (      
        <div className="pricing-area pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<span className="top-title">What We Offer</span>
					<h2>Our Pricing Plan For You</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta, temporibus.</p>
				</div>

				<div className="row">
					<div className="col-lg-3 col-sm-6">
						<div className="single-pricing">
							<h3>Teeth Cleaning</h3>
							<h1>
								$12.00 <span>One-fee Payment</span>
							</h1>

							<ul>
								<li>
									<i className='bx bx-plus'></i>
									Feature 01
								</li>
								<li>
									<i className='bx bx-plus'></i>
									Feature 02
								</li>
								<li>
									<i className="red bx bx-minus"></i>
									Feature 03
								</li>
								<li>
									<i className="red bx bx-minus"></i>
									Feature 04
								</li>
							</ul>

                            <Link href="#">
                                <a className="default-btn">
                                    Order Now
                                </a>
                            </Link>
						</div>
					</div>
					
					<div className="col-lg-3 col-sm-6">
						<div className="single-pricing">
							<h3>Caries Defence</h3>
							<h1>
								$30.00
								<span>Per Day</span>
							</h1>

							<ul>
								<li>
									<i className='bx bx-plus'></i>
									Feature 01
								</li>
								<li>
									<i className='bx bx-plus'></i>
									Feature 02
								</li>
								<li>
									<i className="red bx bx-minus"></i>
									Feature 03
								</li>
								<li>
									<i className="red bx bx-minus"></i>
									Feature 04
								</li>
							</ul>

							<Link href="#">
                                <a className="default-btn">
                                    Order Now
                                </a>
                            </Link>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-pricing">
							<h3>Braces</h3>
							<h1>
								$60.00
								<span>Per Month</span>
							</h1>

							<ul>
								<li>
									<i className='bx bx-plus'></i>
									Feature 01
								</li>
								<li>
									<i className='bx bx-plus'></i>
									Feature 02
								</li>
								<li>
									<i className='bx bx-plus'></i>
									Feature 03
								</li>
								<li>
									<i className="red bx bx-minus"></i>
									Feature 04
								</li>
							</ul>

							<Link href="#">
                                <a className="default-btn">
                                    Order Now
                                </a>
                            </Link>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-pricing">
							<h3>Dental Implants</h3>
							<h1>
								$90.00
								<span>Per Year</span>
							</h1>

							<ul>
								<li>
									<i className='bx bx-plus'></i>
									Feature 01
								</li>
								<li>
									<i className='bx bx-plus'></i>
									Feature 02
								</li>
								<li>
									<i className='bx bx-plus'></i>
									Feature 03
								</li>
								<li>
									<i className='bx bx-plus'></i>
									Feature 04
								</li>
							</ul>

							<Link href="#">
                                <a className="default-btn">
                                    Order Now
                                </a>
                            </Link>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Pricing;