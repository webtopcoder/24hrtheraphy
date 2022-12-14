import React from 'react';
import Link from 'next/link';

const Prevention = () => {
    return (      
        <div className="emergency-department-area ptb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="emergency-contents">
							<span className="top-title">Prevention</span>
							<h2>How Can I get best to <br /> protect myself</h2>
							<p>People who have symptoms of upper respiratory tract infection (cough, sore throat, headache, muscle aches, fatigue, runny nose, and joint aches, and may also include</p>

							<ul>
								<li>Wash your hands often with soap and water for at least 15-20 seconds.</li>
								<li>Avoid touching your eyes, nose and mouth with unwashed hands.</li>
								<li>Avoid close contact (within 6 feet) with people who are sick.</li>
								<li>Cover your cough or sneeze with a tissue</li>
								<li>Stay home when you are sick.</li>
							</ul>
                            
                            <Link href="/index-3/#">
                                <a className="default-btn">
                                    Know Details
                                </a>
                            </Link>
						</div>
					</div>

					<div className="col-lg-6">
						<div className="assessments-img">
							<img src="/img/home-three/home-three-prevention-img.png" alt="Image" />
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Prevention;