import React from 'react';
import Link from 'next/link';

const HowItWorks = () => {
    return (      
        <div className="how-its-work ptb-100">
			<div className="container">
				<div className="section-title">
					<span className="top-title">Woks</span>
					<h2>How It Works</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta, temporibus.</p>
				</div>
                
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="how-its-work-content">
							<div className="content-wrap">
								<h3>Make An Appoinment</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum</p>
							</div>

							<div className="content-wrap">
								<h3>Get Ready For Testing</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum</p>
							</div>

							<div className="content-wrap">
								<h3>Admidmission to the Hospital</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum</p>
							</div>

                            <Link href="/index-3/#">
                                <a className="default-btn">
                                    Know Details
                                </a>
                            </Link>
						</div>
					</div>

					<div className="col-lg-6">
						<div className="how-work-img">
							<img src="/img/home-three/home-three-works-img.png" alt="Image" />
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default HowItWorks;