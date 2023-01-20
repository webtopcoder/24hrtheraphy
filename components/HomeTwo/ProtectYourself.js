import React from 'react';

const ProtectYourself = () => {
    return (      
        <div className="prevention-area pt-100 pb-70">
			<div className="container-fluid">
				<div className="section-title">
					<span className="top-title">Prevention</span>
					<h2>How To Protect Yourself</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Quis ipsum suspendisse</p>
				</div>

				<div className="row align-items-center">
					<div className="col-lg-8">
						<div className="prevention-wrap">
							<div className="row">
								<div className="col-lg-6 col-sm-6">
									<div className="single-prevention">
										<i className="flaticon-hand-wash"></i>
										<h3>Wash Your Hands</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua. ipsum utislen consectetur</p>
									</div>
								</div>
	
								<div className="col-lg-6 col-sm-6">
									<div className="single-prevention">
										<i className="flaticon-medical-mask"></i>
										<h3>Use Face Mask</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua. ipsum utislen consectetur</p>
									</div>
								</div>
	
								<div className="col-lg-6 col-sm-6">
									<div className="single-prevention">
										<i className="flaticon-stay-home"></i>
										<h3>Stay At Home</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua. ipsum utislen consectetur</p>
									</div>
								</div>
	
								<div className="col-lg-6 col-sm-6">
									<div className="single-prevention">
										<i className="flaticon-alcohol-gel"></i>
										<h3>Use Hand Sanitizer</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua. ipsum utislen consectetur</p>
									</div>
								</div>
	
								<div className="col-lg-6 col-sm-6">
									<div className="single-prevention">
										<i className="flaticon-protection"></i>
										<h3>Avoid Close Contact</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua. ipsum utislen consectetur</p>
									</div>
								</div>
	
								<div className="col-lg-6 col-sm-6">
									<div className="single-prevention">
										<i className="flaticon-washing-hands"></i>
										<h3>Washing Hands</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua. ipsum utislen consectetur</p>
									</div>
								</div>
	
								<div className="col-lg-6 col-sm-6">
									<div className="single-prevention">
										<i className="flaticon-protection-1"></i>
										<h3>Don’t Touch Face</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua. ipsum utislen consectetur</p>
									</div>
								</div>
	
								<div className="col-lg-6 col-sm-6">
									<div className="single-prevention">
										<i className="flaticon-gloves"></i>
										<h3>Use Your Gloves</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua. ipsum utislen consectetur</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-4">
						<div className="prevention-img">
							<img src="/img/prevention-img.png" alt="Image" />

							<div className="shape">
								<img src="/img/prevention-shape-2.png" alt="Image" />
							</div>
						</div>
					</div>
				</div>
			</div>

            {/* Shape Images */}
			<div className="shape-1">
				<img src="/img/prevention-shape-1.png" alt="Image" />
			</div>
			<div className="shape-2">
				<img src="/img/prevention-shape-1.png" alt="Image" />
			</div>
			<div className="shape-3">
				<img src="/img/prevention-shape-1.png" alt="Image" />
			</div>
			<div className="shape-4">
				<img src="/img/prevention-shape-1.png" alt="Image" />
			</div>
		</div>
    )
}

export default ProtectYourself;