import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    nav:true,
    autoplay:true,
    autoplayHoverPause: true,
    mouseDrag: true,
    margin: 30,
    center: true,
    dots: false,
    smartSpeed:1500,
    navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>",
    ],
    responsive:{
        0:{
            items:1,
        },
        576:{
            items:2,
        },
        768:{
            items:2,
        },
        992:{
            items:3,
        },
        1200:{
            items:3,
        }
    }
};

const DoctorsStyleOne = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (      
        <div className="doctors-area pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<span className="top-title">Our therapists</span>
					<h2>Our therapists</h2>
					<p>24 hour therapy being an online therapy platform offers access to licensed, skilled and experienced therapist.</p>
				</div>

                {display ? <OwlCarousel 
                    className="doctors-wrap owl-carousel owl-theme"
                    {...options}
                > 
					<div className="single-doctor">
						<img src="/img/doctors/doctor1.png" alt="Image" />
						<h3>Dr. Jelin Alis</h3>
						<span className="top-title">Cardiologist</span>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodin</p>
						
						<ul>
							<li>
								<a href="https://www.facebook.com/" target="_blank">
									<i className="bx bxl-facebook"></i>
								</a>
							</li>
							<li>
								<a href="https://www.twitter.com/" target="_blank">
									<i className="bx bxl-twitter"></i>
								</a>
							</li>
							<li>
								<a href="https://www.pinterest.com/" target="_blank">
									<i className="bx bxl-pinterest-alt"></i>
								</a>
							</li>
							<li>
								<a href="https://www.instagram.com/" target="_blank">
									<i className="bx bxl-instagram"></i>
								</a>
							</li>
						</ul>
					</div>
			
					<div className="single-doctor">
						<img src="/img/doctors/doctor2.png" alt="Image" />
						<h3>Dr. Jemse Watson</h3>
						<span className="top-title">Necrologist</span>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodin</p>
						
						<ul>
							<li>
								<a href="https://www.facebook.com/" target="_blank">
									<i className="bx bxl-facebook"></i>
								</a>
							</li>
							<li>
								<a href="https://www.twitter.com/" target="_blank">
									<i className="bx bxl-twitter"></i>
								</a>
							</li>
							<li>
								<a href="https://www.pinterest.com/" target="_blank">
									<i className="bx bxl-pinterest-alt"></i>
								</a>
							</li>
							<li>
								<a href="https://www.instagram.com/" target="_blank">
									<i className="bx bxl-instagram"></i>
								</a>
							</li>
						</ul>
					</div>
			
					<div className="single-doctor">
						<img src="/img/doctors/doctor3.png" alt="Image" />
						<h3>Dr. Neels Bore</h3>
						<span className="top-title">Surgery Specialist</span>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodin</p>
						
						<ul>
							<li>
								<a href="https://www.facebook.com/" target="_blank">
									<i className="bx bxl-facebook"></i>
								</a>
							</li>
							<li>
								<a href="https://www.twitter.com/" target="_blank">
									<i className="bx bxl-twitter"></i>
								</a>
							</li>
							<li>
								<a href="https://www.pinterest.com/" target="_blank">
									<i className="bx bxl-pinterest-alt"></i>
								</a>
							</li>
							<li>
								<a href="https://www.instagram.com/" target="_blank">
									<i className="bx bxl-instagram"></i>
								</a>
							</li>
						</ul>
					</div>

					<div className="single-doctor">
						<img src="/img/doctors/doctor11.png" alt="Image" />
						<h3>Dr. Kilva Alis</h3>
						<span className="top-title">Cardiologist</span>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodin</p>
						
						<ul>
							<li>
								<a href="https://www.facebook.com/" target="_blank">
									<i className="bx bxl-facebook"></i>
								</a>
							</li>
							<li>
								<a href="https://www.twitter.com/" target="_blank">
									<i className="bx bxl-twitter"></i>
								</a>
							</li>
							<li>
								<a href="https://www.pinterest.com/" target="_blank">
									<i className="bx bxl-pinterest-alt"></i>
								</a>
							</li>
							<li>
								<a href="https://www.instagram.com/" target="_blank">
									<i className="bx bxl-instagram"></i>
								</a>
							</li>
						</ul>
					</div>
                </OwlCarousel> : ''}
			</div>
		</div>
    )
}

export default DoctorsStyleOne;