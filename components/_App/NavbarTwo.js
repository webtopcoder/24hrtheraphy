import React from 'react';
import Link from '../../utils/ActiveLink';
import TopHeader from './TopHeader';

const NavbarTwo = () => {
    const [menu, setMenu] = React.useState(true)

    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    })
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <header className="header-area fixed-top">
                <TopHeader />
                
                <div className="nav-area four">
                    <div id="navbar" className="navbar-area">
                        <div className="main-nav">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <div className="container">
                                    <Link href="/">
                                        <a onClick={toggleNavbar} className="navbar-brand">
                                            <img src="/img/logo-two.png" alt="logo" />
                                        </a>
                                    </Link>

                                    <button 
                                        onClick={toggleNavbar} 
                                        className={classTwo}
                                        type="button" 
                                        data-toggle="collapse" 
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                        aria-expanded="false" 
                                        aria-label="Toggle navigation"
                                    >
                                        <span className="icon-bar top-bar"></span>
                                        <span className="icon-bar middle-bar"></span>
                                        <span className="icon-bar bottom-bar"></span>
                                    </button>

                                    <div className={classOne} id="navbarSupportedContent">
                                        <ul className="navbar-nav m-auto">
                                            <li className="nav-item">
                                                <Link href="/#" activeClassName="active">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        Home <i className='bx bx-plus'></i>
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Home 1 (Emergency Medical Clinic)</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/index-2" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Home 2 (Covid-19 Treatment Clinic)</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/index-3" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Home 3 (Covid-19 Test Center)</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/index-4" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Home 4 (Vaccination Center/Clinic)</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/index-5" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Home 5 (Doctors Directory Listing)</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/index-6" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Home 6 (Health Charity Event)</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/index-7" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Home 7 (Medical Research)</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/index-8" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Home 8 (Dental Clinic)</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/about" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">About</a>
                                                </Link>
                                            </li>
        
                                            <li className="nav-item">
                                                <Link href="/#">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        Pages <i className='bx bx-plus'></i>
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/pricing" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Pricing</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/testimonials" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Testimonials</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/doctors" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Doctors</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/appointment" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Appointment</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/faq" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">FAQs</a>
                                                        </Link>
                                                    </li>
   
                                                    <li className="nav-item">
                                                        <Link href="/#">
                                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                                User <i className='bx bx-plus'></i>
                                                            </a>
                                                        </Link>

                                                        <ul className="dropdown-menu">
                                                            <li className="nav-item">
                                                                <Link href="/sign-in" activeClassName="active">
                                                                    <a onClick={toggleNavbar} className="nav-link">Sign In</a>
                                                                </Link>
                                                            </li> 

                                                            <li className="nav-item">
                                                                <Link href="/sign-up" activeClassName="active">
                                                                    <a onClick={toggleNavbar} className="nav-link">Sign Up</a>
                                                                </Link>
                                                            </li> 

                                                            <li className="nav-item">
                                                                <Link href="/recover-password" activeClassName="active">
                                                                    <a onClick={toggleNavbar} className="nav-link">Recover Password</a>
                                                                </Link>
                                                            </li> 
                                                        </ul>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/coming-soon" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Coming Soon</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/terms-conditions" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Terms & Conditions</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/privacy-policy" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Privacy Policy</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/404" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">404 Error Page</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
        
                                            <li className="nav-item">
                                                <Link href="/#">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        Services <i className='bx bx-plus'></i>
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/services-1" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Services Style One</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/services-2" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Services Style Two</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/services-3" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Services Style Three</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/service-details" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Service Details</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                    
                                            <li className="nav-item">
                                                <Link href="/#">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        Doctors <i className='bx bx-plus'></i>
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/doctors-1" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Doctors Style One</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/doctors-2" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Doctors Style Two</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/doctors-3" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Doctors Style Three</a>
                                                        </Link>
                                                    </li>
 
                                                    <li className="nav-item">
                                                        <Link href="/doctor-details" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Doctors Details</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/#">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        Blog <i className='bx bx-plus'></i>
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/blog-grid" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Blog Grid</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/blog-left-sidebar" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Blog Left Sidebar</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/blog-right-sidebar" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Blog Right Sidebar</a>
                                                        </Link>
                                                    </li>
 
                                                    <li className="nav-item">
                                                        <Link href="/blog-details" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Blog Details</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/contact" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Contact</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="others-option">
                                        <div className="subscribe">
                                            <Link href="/contact">
                                                <a className="default-btn">
                                                    Get A Quote
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default NavbarTwo;
