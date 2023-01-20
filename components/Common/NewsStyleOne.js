import React from 'react';
import Link from 'next/link';

const NewsStyleOne = () => {
    return (      
        <div className="blog-area pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<span className="top-title">News</span>
					<h2>Our Latest News</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus</p>
				</div>

				<div className="row justify-content-center">
					<div className="col-lg-4 col-md-6">
						<div className="single-blog">
                            <Link href="/blog-details">
                                <a>
                                    <img src="/img/blog/blog1.jpg" alt="Image" />
                                </a>
                            </Link>

							<span>10 May 2020</span>
							<div className="blog-content">
								<ul>
									<li><a href="#">Medical</a></li>
								</ul>

                                <Link href="/blog-details">
                                    <a>
                                        <h3>250+ Medical Tips We just had to share</h3>
                                    </a>
                                </Link>

                                <Link href="/blog-details">
                                    <a className="read-more">
                                        Read More <i className="bx bx-plus"></i>
                                    </a>
                                </Link>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-blog">
                            <Link href="/blog-details">
                                <a>
                                    <img src="/img/blog/blog2.jpg" alt="Image" />
                                </a>
                            </Link>

							<span>11 May 2020</span>
							<div className="blog-content">
								<ul>
									<li>
										<a href="#">Treatment</a>
									</li>
								</ul>

                                <Link href="/blog-details">
                                    <a>
                                        <h3>What Can I Do To Prevent Myself & prevent Disease</h3>
                                    </a>
                                </Link>

								<Link href="/blog-details">
                                    <a className="read-more">
                                        Read More <i className="bx bx-plus"></i>
                                    </a>
                                </Link>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-blog">
                            <Link href="/blog-details">
                                <a>
                                    <img src="/img/blog/blog3.jpg" alt="Image" />
                                </a>
                            </Link>

							<span>13 May 2020</span>
							<div className="blog-content">
								<ul>
									<li>
										<a href="#">COVID-19</a>
									</li>
								</ul>

                                <Link href="/blog-details">
                                    <a>
                                        <h3>CCU For Emergency  Services  & Medical support</h3>
                                    </a>
                                </Link>

								<Link href="/blog-details">
                                    <a className="read-more">
                                        Read More <i className="bx bx-plus"></i>
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

export default NewsStyleOne;