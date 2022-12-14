import React from 'react';
import Link from 'next/link';

const SearchForm = () => {
    return (      
        <div className="search-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<form className="top-search-from">
							<div className="row">
								<div className="col-12">
									<div className="searchs-wraps">
										<input type="text" className="form-control" id="Search" placeholder="Start Your Search" />
										
										<button type="button" className="search-btn">
											<i className="bx bx-search"></i>
										</button>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-lg-5 col-sm-6">
									<div className="form-group">
										<input type="text" className="form-control" id="Location" placeholder="Search Doctors, clinics,etc" />
									</div>
								</div>

								<div className="col-lg-5 col-sm-6">
									<div className="form-group">
										<select className="form-control">
											<option value="0">Cardiologist</option>
											<option value="1">Necrologist</option>
											<option value="2">Surgery Specialist</option>
											<option value="3">Allergist</option>
										</select>
									</div>
								</div>

								<div className="col-lg-2">
									<button type="button" className="find-btn">
										<i className="bx bx-right-arrow-alt"></i>
									</button>
								</div>
							</div>
						</form>
					</div>

					<div className="col-lg-4">
						<div className="join-our-team">
							<span>Are You Doctor?</span>
							<h3>Join Our Team</h3>
                            <Link href="/index-5/#">
							    <a className="default-btn">Join As A Doctor</a>
                            </Link>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default SearchForm;