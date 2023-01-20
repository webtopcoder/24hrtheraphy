import React from 'react'; 

const FunFact = () => {
    return (      
        <div className="counter-area pt-100 pb-70">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-sm-6">
						<div className="single-counter">
							<i className="flaticon-man"></i>

							<h2>
                                540 <span className="target">+</span>
							</h2>

							<p>Expert Doctors</p>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-counter">
							<i className="flaticon-tick"></i>

							<h2>
                                990 <span className="target">+</span>
							</h2>

							<p>Successful Story</p>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-counter">
							<i className="flaticon-trophy"></i>

							<h2>
                                3500 <span className="traget">+</span>
							</h2>

							<p>Global Presence</p>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-counter">
							<i className="flaticon-experience"></i>

							<h2>
                                54 <span className="traget">+</span>
							</h2>

							<p>Experiences</p>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default FunFact;