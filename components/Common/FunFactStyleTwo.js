import React from 'react'; 

const FunFactStyleTwo = () => {
    return (      
        <div className="counter-area two pt-100 pb-70">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-sm-6">
						<div className="single-counter">
							<h2>
                                4,348,595 <span className="target">+</span>
							</h2>

							<p>Total Confirmed</p>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-counter">
							<h2>
                                147 <span className="target">+</span>
							</h2>

							<p>Total Countries</p>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-counter">
							<h2>
                                20 <span className="traget">%</span>
							</h2>

							<p>Total Recovered</p>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-counter">
							<h2>
                                80 <span className="traget">%</span>
							</h2>

							<p>Confirm Deaths</p>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default FunFactStyleTwo;