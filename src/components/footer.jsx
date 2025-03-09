import '@fortawesome/fontawesome-free/css/all.css';
import React from 'react';
import '../css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div>
                <p>&copy; 2025 TSP NewsBit. All rights reserved by Anchal sharma.</p>
                <div className='social'>
                    <span>Contact Us</span>
                    <a href="https://www.facebook.com/share/1LKF1zT7ki/"><i className="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=egshpr4"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/anchal-sharma-b18b0b331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="fab fa-linkedin"></i></a>
                </div>
                <div>Or Mail Us
                    <a style={{marginLeft: '10px'}} href="mailto:ancdto123@gmail.com">Here</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
