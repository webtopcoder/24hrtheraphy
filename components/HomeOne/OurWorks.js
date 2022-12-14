import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    nav:false,
    autoplay:true,
    autoplayHoverPause: true,
    mouseDrag: true,
    margin: 30,
    center: true,
    dots: true,
    smartSpeed:1500,
    responsive:{
        0:{
            items:1,
        },
        576:{
            items:1,
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

const OurWorks = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (      
        <div className="our-work-area ptb-100">
			<div className="container">
				<div className="section-title">
					<span className="top-title">Our Works</span>
					<h2>Our Intensive Care Unit</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta, temporibus.</p>
				</div>

                {display ? <OwlCarousel 
                    className="work-wrap owl-carousel owl-theme"
                    {...options}
                >  
					<div className="single-work">
						<img src="/img/work1.jpg" alt="Image" />

						<h3 className="work-title">
							<i className="flaticon-kidney"></i>
							Surgery Dep
						</h3>

						<div className="work-content-wrap">
							<div className="work-content">
								<h3>Surgery Dep</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>

                                <Link href="/service-details">
                                    <a className="read-more">
                                        Details <i className="bx bx-plus"></i>
                                    </a>
                                </Link>
							</div>
						</div>
					</div>
				
					<div className="single-work">
						<img src="/img/work2.jpg" alt="Image" />

						<h3 className="work-title">
							<i className="flaticon-doll"></i>
							Childcare Dep
						</h3>

						<div className="work-content-wrap">
							<div className="work-content">
								<h3>Childcare Dep</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>

								<Link href="/service-details">
                                    <a className="read-more">
                                        Details <i className="bx bx-plus"></i>
                                    </a>
                                </Link>
							</div>
						</div>
					</div>
				
					<div className="single-work">
						<img src="/img/work3.jpg" alt="Image" />

						<h3 className="work-title">
							<i className="flaticon-cardiology"></i>
							Cardiology Dep
						</h3>

						<div className="work-content-wrap">
							<div className="work-content">
								<h3>Cardiology Dep</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>

								<Link href="/service-details">
                                    <a className="read-more">
                                        Details <i className="bx bx-plus"></i>
                                    </a>
                                </Link>
							</div>
						</div>
					</div>
					
					<div className="single-work">
						<img src="/img/work4.jpg" alt="Image" />

						<h3 className="work-title">
							<i className="flaticon-cardiology"></i>
							Cardiologist
						</h3>

						<div className="work-content-wrap">
							<div className="work-content">
								<h3>Cardiologist</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>

								<Link href="/service-details">
                                    <a className="read-more">
                                        Details <i className="bx bx-plus"></i>
                                    </a>
                                </Link>
							</div>
						</div>
					</div>
                </OwlCarousel> : ''}
			</div>

			<div className="shape">
				<img src="/img/shape/work-shape.png" alt="Image" />
			</div>
		</div>
    )
}

export default OurWorks;