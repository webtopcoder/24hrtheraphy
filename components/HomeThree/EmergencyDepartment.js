import React from 'react';
import Link from 'next/link';

const EmergencyDepartment = () => {
    return (      
        <div className="emergency-department-area pb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="emergency-contents">
							<span className="top-title">Emergency Department</span>
							<h2>Who Should Go to the Nearest Emergency Department</h2>
							<p>People who have symptoms of upper respiratory tract infection (cough, sore throat, headache, muscle aches, fatigue, runny nose, and joint aches, and may also include.</p>

							<ul>
								<li>Weakness that impairs ability to carry out activities of daily</li>
								<li>Shortness of breath when walking, exercising, or at rest</li>
								<li>Chest pain or discomfort</li>
								<li>Lethargy or drowsiness</li>
								<li>Dizziness</li>
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
							<img src="/img/home-three/emergency-img.png" alt="Image" />
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default EmergencyDepartment;