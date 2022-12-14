import React from 'react'; 

const Cto = () => {
    return (      
        <div className="operate-area ptb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-4">
						<div className="operate-img">
							<img src="/img/home-three/operate-img.png" alt="Image" />
						</div>
					</div>

					<div className="col-lg-4">
						<div className="operate-text">
							<h2>We operate 24 a day!</h2>
							<p>Call us if you have any urgent help!</p>
						</div>
					</div>

					<div className="col-lg-4">
						<div className="operate-btn">
							<a href="tel:+882-456-889" className="default-btn">
								<i className='bx bx-phone-call'></i>
								+882-456-889
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Cto;