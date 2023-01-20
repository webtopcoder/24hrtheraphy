import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
	nav: true,
	dots: false,
	autoplayHoverPause: true,
	autoplay: true,
	items: 1,
	animateOut: 'fadeOut',
	margin: 0,
	navText: [
		"<i class='bx bx-chevron-right'></i>",
	],
};

const AboutUs = () => {
	const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (      
        <div className="about-area-three pb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="about-content">
							<span className="top-title">COVID-19 Testing</span>
							<h2>The clinic will be testing and treating COVID-19 cases </h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
							
							<ul>
								<li>
									<h3>Criteria For testing:</h3>
									<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio magnam recusandae doloribus facere. Distinctio nesciunt unde facere rerum natus eveniet nam</p>
								</li>
								<li>
									<h3>High-risk staff testing:</h3>
									<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio magnam recusandae doloribus facere. Distinctio nesciunt unde facere rerum natus eveniet nam</p>
								</li>
							</ul>

							<Link href="/about">
								<a className="default-btn">
									About Us
								</a>
							</Link>
						</div>
					</div>

					<div className="col-lg-6">
						<div className="about-img">
							{display ? <OwlCarousel 
								className="about-img-wrap owl-carousel owl-theme"
								{...options}
							>  
								<div className="about-item">
									<img src="/img/home-three/home-three-about1.jpg" alt="Image" />
								</div>
								<div className="about-item">
									<img src="/img/home-three/home-three-about2.jpg" alt="Image" />
								</div>
							</OwlCarousel> : ''}

							<div className="shape-3">
								<img src="/img/about/about-shape-3.png" alt="Image" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default AboutUs;