import React from "react";
import '../styles/footer.css'; 


const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <p className="col-lg">
                        &copy;{new Date().getFullYear()} The Brightside Productions, LLC. <a className="socials" href="https://twitter.com/" target="_blank">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                        <a className="socials" href="https://youtube.com/" target="_blank">
                            <ion-icon name="logo-youtube"></ion-icon>
                        </a> 
                        <a className="socials" href="https://www.linkedin.com/company/the-brightside-productions-llc" target="_blank">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a> 


                    </p>
</div>
            </div>
        </div>
    )
} 
export default Footer; 
