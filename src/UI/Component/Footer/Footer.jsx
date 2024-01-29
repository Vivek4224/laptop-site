import React from 'react';
import "./Footer.css";
import l1 from "../../../Image/logo1.png";
import l2 from "../../../Image/logo2.png";
import { Facebook, Github, Linkedin, Mails, MapPin, Phone, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <>
            <footer class="footer-distributed">

                <div class="footer-left">

                    <img className='img1' src={l1} alt="" />
                    <img className='img2' src={l2} alt="" />

                    <p class="footer-links">
                        <a href="#" class="link-1">Home</a>

                        <a href="#">ProArtBook</a>

                        <a href="#">ZenBook</a>

                        <a href="#">VivoBook</a>

                        <a href="#">ChromBook</a>

                        <a href="#">Contact</a>
                    </p>

                    <p class="footer-company-name">ASUS © 2015</p>
                </div>

                <div class="footer-center">

                    <div>
                        <MapPin style={{ color: "red", top: "10px", margin: "0rem 0.5rem 0rem 1rem" }} />
                        <p> Gujarat, India</p>
                    </div>

                    <div style={{ marginTop: "10px" }}>
                        <Phone style={{ color: "red", top: "10px", margin: "0rem 0.5rem 0rem 1rem" }} />
                        <p>+91 9723192735</p>
                    </div>

                    <div style={{ marginTop: "10px" }}>
                        <Mails style={{ color: "red", top: "10px", margin: "0rem 0.5rem 0rem 1rem" }} />
                        <p><a href="mailto:support@company.com">support@asus.com</a></p>
                    </div>

                </div>

                <div class="footer-right">

                    <p class="footer-company-about">
                        <span>About the company</span>
                        ASUS is a Taiwan-based, multinational computer hardware and consumer electronics company that was established in 1989.
                    </p>

                    <div class="footer-icons">

                        <Facebook style={{ color: "red", top: "10px", margin: "0rem 0.5rem 0rem 1rem" }} />
                        <Twitter style={{ color: "red", top: "10px", margin: "0rem 0.5rem 0rem 1rem" }} />
                        <Linkedin style={{ color: "red", top: "10px", margin: "0rem 0.5rem 0rem 1rem" }} />
                        <Github style={{ color: "red", top: "10px", margin: "0rem 0.5rem 0rem 1rem" }} />

                    </div>

                </div>

            </footer>
        </>
    )
}
