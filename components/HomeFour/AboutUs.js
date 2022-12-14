import React from 'react';
import Link from 'next/link';

const AboutUs = () => {
    return (      
        <div className="about-area four ptb-100">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-6 pl-0">
						<div className="about-img about-bg-1">
						</div>
					</div>
					
					<div className="col-lg-6">
						<div className="about-content">
							<span className="top-title">About Us</span>
							<h2>Routine Vaccines Provided for Babies and Children</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
							
							<ul>
								<li>
									<i className="flaticon-tick"></i>
									Vaccine against Diphtheria-Tetanus-Whooping cough 
								</li>
								<li>
									<i className="flaticon-tick"></i>
									Vaccine against Measles-Mumps-Rubella
								</li>
								<li>
									<i className="flaticon-tick"></i>
									Vaccine against pneumococcus bacteria
								</li>
								<li>
									<i className="flaticon-tick"></i>
									Vaccine against Hepatitis B
								</li>
								<li>
									<i className="flaticon-tick"></i>
									Vaccine against Hepatitis A
								</li>
								<li>
									<i className="flaticon-tick"></i>
									Wear a facemask if sick
								</li>
								<li>
									<i className="flaticon-tick"></i>
									Cover your mouth and nose
								</li>
							</ul>
                            
                            <Link href="/about">
                                <a className="default-btn">More About Us</a>
                            </Link>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default AboutUs;