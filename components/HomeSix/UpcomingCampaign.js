import React from 'react';
import Link from 'next/link';

const UpcomingCampaign = () => {
    return (      
        <div className="events-area pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<span className="top-title">Event</span>
					<h2>Our Upcoming Campaign</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Quis ipsum suspendisse</p>
				</div>

				<div className="row justify-content-center">
					<div className="col-lg-4 col-md-6">
						<div className="single-events">
							<div className="event-img">
								<img src="/img/home-six/home-six-event1.jpg" alt="Image" />
								<span>17 May 2020</span>
							</div>

							<div className="event-content">
								<h3>Donate for free healthcare services in remote area</h3>
								<p>Lorem ipsum dolor Cumque sit amet, consectetur adipisicing  elit. Libero pariatur quasi dolorem Cumque dolor Cumque sit amet</p>

                                <Link href="/index-6/#">
                                    <a className="read-more">
                                        Read More <i className="bx bx-plus"></i>
                                    </a>
                                </Link>

								<span className="usd-bar"></span>

								<ul>
									<li>
										<span>$1,161.61</span> Required
									</li>
									<li className="right">
										<span>$36.32</span> Raised
									</li>
								</ul>
                                
                                <Link href="/index-6/#">
                                    <a className="default-btn">
                                        Donate Now
                                    </a>
                                </Link>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-events">
							<div className="event-img">
								<img src="/img/home-six/home-six-event2.jpg" alt="Image" />
								<span>18 May 2020</span>
							</div>

							<div className="event-content">
								<h3>Help us in providing free medical care to people of</h3>
								<p>Lorem ipsum dolor Cumque sit amet, consectetur adipisicing  elit. Libero pariatur quasi dolorem Cumque dolor Cumque sit amet</p>

								<Link href="/index-6/#">
                                    <a className="read-more">
                                        Read More <i className="bx bx-plus"></i>
                                    </a>
                                </Link>

								<span className="usd-bar"></span>

								<ul>
									<li>
										<span>$1,461.61</span> Required
									</li>
									<li className="right">
										<span>$00.32</span> Raised
									</li>
								</ul>

								<Link href="/index-6/#">
                                    <a className="default-btn">
                                        Donate Now
                                    </a>
                                </Link>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-events">
							<div className="event-img">
								<img src="/img/home-six/home-six-event3.jpg" alt="Image" />
								<span>19 May 2020</span>
							</div>

							<div className="event-content">
								<h3>Help us bring quality health care for poor people</h3>
								<p>Lorem ipsum dolor Cumque sit amet, consectetur adipisicing  elit. Libero pariatur quasi dolorem Cumque dolor Cumque sit amet</p>

								<Link href="/index-6/#">
                                    <a className="read-more">
                                        Read More <i className="bx bx-plus"></i>
                                    </a>
                                </Link>

								<span className="usd-bar"></span>

								<ul>
									<li>
										<span>$1,121.61</span> Required
									</li>
									<li className="right">
										<span>$38.32</span> Raised
									</li>
								</ul>

								<Link href="/index-6/#">
                                    <a className="default-btn">
                                        Donate Now
                                    </a>
                                </Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default UpcomingCampaign;