import React from "react";

import '../styles/footer.css';


const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <p className="col-lg">
                        &copy;{new Date().getFullYear()} The Brightside Productions, LLC. <a className="socials" href="https://twitter.com/" target="blank">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                        <a className="socials" href="https://youtube.com/" target="blank">
                            <ion-icon name="logo-youtube"></ion-icon>
                        </a>
                        <a className="socials" href="https://www.linkedin.com/company/the-brightside-productions-llc" target="blank">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
};
export default Footer; 
