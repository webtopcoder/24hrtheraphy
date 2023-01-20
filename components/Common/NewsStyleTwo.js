import React from 'react';
import Link from 'next/link';

const NewsStyleTwo = () => {
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
                                    <img src="/img/blog/blog10.jpg" alt="Image" />
                                </a>
                            </Link>
							
							<div className="blog-content">
								<ul>
									<li>15 / 05 / 2020</li>
								</ul>

                                <Link href="/blog-details">
                                    <a>
                                        <h3>Equipping Researchers In The Developing World</h3>
                                    </a>
                                </Link>

								<p>Lorem ipsum dolor sit amet sit consectetur, adipisicing elit. Eum mollitia tempore animi dolor voluptates, architecto, praesentium asperiores minima deleniti voluptates</p>
                                
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
                                    <img src="/img/blog/blog11.jpg" alt="Image" />
                                </a>
                            </Link>
						
							<div className="blog-content">
								<ul>
									<li>16 / 05 / 2020</li>
								</ul>

                                <Link href="/blog-details">
                                    <a>
                                        <h3>Should We Trust Computer-Aided Weapons Modeling?</h3>
                                    </a>
                                </Link>

								<p>Lorem ipsum dolor sit amet sit consectetur, adipisicing elit. Eum mollitia tempore animi dolor voluptates, architecto, praesentium asperiores minima deleniti voluptates</p>

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
                                    <img src="/img/blog/blog12.jpg" alt="Image" />
                                </a>
                            </Link>
						
							<div className="blog-content">
								<ul>
									<li>17 / 05 / 2020</li>
								</ul>

                                <Link href="/blog-details">
                                    <a>
                                        <h3>Book Review: Clinical Research Compliance Manual</h3>
                                    </a>
                                </Link>

								<p>Lorem ipsum dolor sit amet sit consectetur, adipisicing elit. Eum mollitia tempore animi dolor voluptates, architecto, praesentium asperiores minima deleniti voluptates</p>

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

export default NewsStyleTwo;