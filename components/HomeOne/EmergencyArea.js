import React from 'react';

const EmergencyArea = () => {
    return (      
        <div className="emergency-area">
			<div className="container-fluid">
				<div className="row">
				<video width="750" height="600" controls >
					<source src="/img/123.mp4" type="video/mp4"/>
					</video>
				</div>
			</div>

			<div className="shape">
				<img src="/img/shape/emergency-shape.png" alt="Image" />
			</div>
		</div>
    )
}

export default EmergencyArea;