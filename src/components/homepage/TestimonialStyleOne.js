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
					<p>There has been plenty of successful stories here at 24 hour therapy. Let's take a look at what our clients say about the experience.</p>
				</div>

                {display ? <OwlCarousel 
                    className="client-wrap owl-carousel owl-theme"
                    {...options}
                > 
					<div className="single-client">
						<img src="/img/client/client1.jpg" alt="img" />

						<p>I used to go for face to face therapy before the COVID but due to the pandemic I had to stop my therapy. After the lockdown, my life got pretty busy so I completely had to end therapy as I couldn’t manage any time. I got introduced to online therapy several months ago and found 24 hour therapy. It is perfect for me as I don’t have to travel anywhere and whenever I feel anxious I can come to 24 hour therapy and talk through my problems. 24 hour therapy is very suitable for someone who has a busy lifestyle. Highly recommend.</p>

						<ul>
							<li><i className="bx bxs-star"></i></li>
							<li><i className="bx bxs-star"></i></li>
							<li><i className="bx bxs-star"></i></li>
							<li><i className="bx bxs-star"></i></li>
							<li><i className="bx bxs-star"></i></li>
						</ul>	

						<h3>Simon Gray</h3>
						{/* <span>CEO of Company</span> */}
					</div>
					
					<div className="single-client">
						<img src="/img/client/client2.jpg" alt="img" />
						<p>I suffered from a severe social anxiety. I tried the traditional face to face therapy but I stopped after 2 sessions. Travelling there and talking in person made me even more anxious. When I found out about chat therapy in 24 hour therapy, I decided to give it a try. It helped me so much than I thought. The therapists are so helpful and understanding. The activities that they have provided me to overcome my anxiety has changed my life. After a month of chat therapy, I am finally trying webcam therapy. </p>

						<ul>
							<li><i className="bx bxs-star"></i></li>
							<li><i className="bx bxs-star"></i></li>
							<li><i className="bx bxs-star"></i></li>
							<li><i className="bx bxs-star"></i></li>
							<li><i className="bx bxs-star"></i></li>
						</ul>	

						<h3>Emily Thomas</h3>
						{/* <span>Company Founder</span> */}
					</div>
                    <div className="single-client">
						<img src="/img/client/client2.jpg" alt="img" />
						<p>24 hour therapy is an amazing platform. I recommend this to everyone who is going through tough times. It is affordable and saves a lot of time. I don’t have to schedule my whole day just to see a therapist. I can talk as long as I want.  </p>

						<ul>
							<li><i className="bx bxs-star"></i></li>
							<li><i className="bx bxs-star"></i></li>
							<li><i className="bx bxs-star"></i></li>
							<li><i className="bx bxs-star"></i></li>
							<li><i className="bx bxs-star"></i></li>
						</ul>	

						<h3>Sarah Edwards</h3>
						{/* <span>Company Founder</span> */}
					</div>
                </OwlCarousel> : ''}
			</div>
		</div>
    )
}

export default TestimonialStyleOne;