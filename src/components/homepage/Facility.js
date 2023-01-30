import React from 'react';
import Link from 'next/link';

const Facilities = () => {
    return (      
        <div className="second-facility-area pt-100 pb-70">
			<div className="container">
			<div className="section-title">
					<h2 className="top-title">HOW IT WORKS</h2>
				</div>

				<div className="row justify-content-center">
					<div className="col-lg-3 col-sm-6">
						<div className="second-facility-item second-facility-height">
							<img src="/img/facility-img/facility-icon1.png" alt="Image" />
							<h3>Sign up or Login</h3><br/>
							<p>You can download the app or visit the website then follow the sign in or login instructions.</p>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="second-facility-item second-facility-height">
							<img src="/img/facility-img/facility-icon2.png" alt="Image" />
							<h3>Pay Online</h3>
							<p>Complete our online payments process to purchase your webcam counselling tokens securely via PayPal.</p>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="second-facility-item second-facility-height">
							<img src="/img/facility-img/facility-icon3.png" alt="Image" />
							<h3>Choose a therapist</h3><br/>
							<p>Visit the &nbsp; 
							<Link href=""> 'Our Therapists'</Link> page with where you will find full profiles for each therapist and see who is available online for a session.
							</p>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="second-facility-item second-facility-height">
							<img src="/img/facility-img/facility-icon4.png" alt="Image" />
							<h3>Speak to your therapist</h3><br/>
							<p>Once you have selected the right therapist for you, click the join now button and connect instantly with your therapist.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Facilities;