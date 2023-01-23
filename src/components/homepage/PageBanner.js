import React from 'react';
import Link from 'next/link';

const PageBanner = ({pageTitle, homePageUrl, homePageText, activePageText, imgClass}) => {
    return (
        <div className={`page-title-area ${imgClass}`}>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="page-title-content">
                            <h2>{pageTitle}</h2>
                            <ul>
                                <li>
                                    <Link href={homePageUrl}>
                                        <a>{homePageText}</a>
                                    </Link>
                                </li>
                                <li className="active">{activePageText}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageBanner;