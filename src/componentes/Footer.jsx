import React from 'react';
import './fotter.css'
function Footer(props) {
    return (
        <footer>
            <div className="part-a">
                <h1>RECYCLE RALLY</h1>
                <p>Name : Keerthi</p>
                <p>Email : Keerthi@outlook.com</p>
                <p>Contact No :123456789</p>
            </div>
            <div className="part-b">
                <h2>Links</h2>
                <div className="linkes">
                    <a href="">home</a>
                    <a href="">About Us</a>

                    <a href="">Contact Us</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;