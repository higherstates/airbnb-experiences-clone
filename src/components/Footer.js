import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

function Footer() {
    return (
        <footer>
            <div className="footer--social">
                <a 
                    href="https://www.facebook.com/airbnb" 
                    className="footer--social_links"
                >
                    <FontAwesomeIcon icon={faFacebookF} size="lg" />
                </a>
                <a 
                    href="https://twitter.com/airbnb" 
                    className="footer--social_links"
                >
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
                <a 
                    href="https://www.instagram.com/airbnb/"     
                    className="footer--social_links"
                >
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
            </div>
            <small className="footer--text">
                &copy; 2021 Airbnb Experiences Clone by higherstates.
            </small>
            <div>
                <a 
                    href="https://www.airbnb.com/help/article/2855/privacy-policy"
                    className="footer--social_links footer--text"
                >
                    Privacy
                </a>
                <span>·</span>
                <a 
                    href="https://www.airbnb.com/help/article/2908/terms-of-service"
                    className="footer--social_links footer--text"
                >
                    Terms
                </a>
                <span>·</span>
                <a 
                    href="https://www.airbnb.com/sitemaps/v2"
                    className="footer--social_links footer--text"
                >
                    Sitemap
                </a>
            </div>
        </footer>
    )
}

export default Footer