import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    margin: 30,
    nav: false,
    mouseDrag: true, 
    dots: false, 
    autoplay: true,
    smartSpeed: 1500,
    autoplayHoverPause: true, 

    responsive:{
        0:{
            items:1,
            margin: 10,
        },
        576:{
            items:1,
        },
        768:{
            items:2,
            margin: 20,
        },
        992:{
            items:2,
        },
        1200:{
            items:2,
        }
    }
};

const TestimonialStyleOne = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (      
        <div className="client-area c-bg pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<span className="top-title">Testimonials</span>
					<h2>What Our Client’s Say</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta, temporibus.</p>
				</div>

                {display ? <OwlCarousel 
                    className="client-wrap owl-carousel owl-theme"
                    {...options}
                > 
					<div className="single-client">
						<img src="/img/client/client1.jpg" alt="img" />

						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing and Quis suspendisse typesetting ipsum dolor sit amet, consectetur</p>

						<ul>
							<li><i className="bx bxs-star"></i></li>
							<li><i className="bx bxs-star"></i></li>
							<li><i className="bx bxs-star"></i></li>
							<li><i className="bx bxs-star"></i></li>
							<li><i className="bx bxs-star"></i></li>
						</ul>	

						<h3>Steven Jony</h3>
						<span>CEO of Company</span>
					</div>
					
					<div className="single-client">
						<img src="/img/client/client2.jpg" alt="img" />
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing and Quis suspendisse typesetting ipsum dolor sit amet, consectetur</p>

						<ul>
							<li><i className="bx bxs-star"></i></li>
							<li><i className="bx bxs-star"></i></li>
							<li><i className="bx bxs-star"></i></li>
							<li><i className="bx bxs-star"></i></li>
							<li><i className="bx bxs-star"></i></li>
						</ul>	

						<h3>Omit Jacson</h3>
						<span>Company Founder</span>
					</div>
                </OwlCarousel> : ''}
			</div>
		</div>
    )
}

export default TestimonialStyleOne;