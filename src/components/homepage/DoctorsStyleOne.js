import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
	loop: true,
	nav: true,
	autoplay: true,
	autoplayHoverPause: true,
	mouseDrag: true,
	margin: 30,
	center: true,
	dots: false,
	smartSpeed: 1500,
	navText: [
		"<i class='bx bx-chevron-left'></i>",
		"<i class='bx bx-chevron-right'></i>",
	],
	responsive: {
		0: {
			items: 1,
		},
		576: {
			items: 2,
		},
		768: {
			items: 2,
		},
		992: {
			items: 3,
		},
		1200: {
			items: 3,
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
						<h3>Rachel Poot</h3>
						<span className="top-title"> Integrative psychotherapist</span>
						<p>I am a registered member of the BACP offering face to face, walk and talk, online and telephone counselling.
							My private practice is based in Godalming. I work with adults 18+ and couples and have successful breakthroughs in the counselling.</p>

						{/* <ul>
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
						</ul> */}
					</div>

					<div className="single-doctor">
						<img src="/img/doctors/doctor2.png" alt="Image" />
						<h3>Emma Wallen</h3>
						<span className="top-title">Couples Therapists</span>
						<p>My passion when I work with couples is to engage in the pain you both are individually experiencing that has become blended in and co-dependent traits have seeped through. I love to awaken knowledge as through this you feel empowered.</p>

						{/* <ul>
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
						</ul> */}
					</div>

					<div className="single-doctor">
						<img src="/img/doctors/doctor3.png" alt="Image" />
						<h3>Anna Campbell-Colquhoun</h3>
						<span className="top-title">Behavioural, CBT</span>
						<p>I specialise in anxiety, depression, eating disorders, grief and loss, neurodiversity (autism, ADHD, dyslexia and dyspraxia), OCD, panic attacks, relationship issues (partner, family, friends, colleagues) and exploring self esteem / sense of self.</p>

						{/* <ul>
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
						</ul> */}
					</div>

					<div className="single-doctor">
						<img src="/img/doctors/doctor11.png" alt="Image" />
						<h3>Jack Williamson</h3>
						<span className="top-title"> Relationship Therapist</span>
						<p>Therapy can often be a journey into the unknown, exploring issues and parts of yourself that have been brought to the surface; often for the first time.Having a safe and supportive space within which to work through what has come up for you is paramount.</p>

						{/* <ul>
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
						</ul> */}
					</div>
				</OwlCarousel> : ''}
			</div>
		</div>
	)
}

export default DoctorsStyleOne;