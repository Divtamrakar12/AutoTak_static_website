"use client"; // ✅ Mark as a Client Component

import { useEffect } from "react";
import "@/styles/navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Navbar() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js"); // ✅ Load Bootstrap JS for dropdown functionality
  }, []);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
      <div className="container-fluid">
        {/* Logo */}
        <img
          src="/images_logo/Or_logo-removebg-preview.png"
          alt="Logo"
          className="navbar-brand logo-img"
        />
        <Link className="navbar-brand brand-text" href="/">
          AUTOTAK
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex gap-2">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>

            {/* Products Dropdown (Mega Menu) */}
            <li className="nav-item dropdown mega-dropdown">
              <Link className="nav-link" href="/products">
                Products
              </Link>
              <div className="dropdown-menu mega-menu">
                <div className="row">
                  {/* Wheel Aligner */}
                  <div className="col-md-4">
                    <h6>Wheel Aligner</h6>
                    <Link className="dropdown-item" href="/products#wheelAligner">Tristar 3D Wheel Aligner</Link>
                    <a className="dropdown-item" href="#">John Bean V2100 Wheel Aligner</a>
                    <a className="dropdown-item" href="#">Dent Puller</a>
                    <a className="dropdown-item" href="#">WHEEL LAIGNER RIGEL JOHNBEAN</a>
                  </div>

                  {/* Wheel Alignment Machine */}
                  <div className="col-md-4">
                    <h6>Wheel Alignment Machine</h6>
                    <a className="dropdown-item" href="#">Pyramid Wheel Aligner</a>
                    <a className="dropdown-item" href="#">John Bean 3D Wheel Aligner</a>
                    <a className="dropdown-item" href="#">Video Graphic Wheel Balancer</a>
                  </div>

                  {/* Air Compressor */}
                  <div className="col-md-4">
                    <h6>Air Compressor</h6>
                    <a className="dropdown-item" href="#">Air Compressor</a>
                    <a className="dropdown-item" href="#">PCL-Sumo Two Stage Air Compressors</a>
                    <a className="dropdown-item" href="#">Digital Wheel Balancing Machine</a>
                  </div>

                  {/* Scissor Lift */}
                  <div className="col-md-4">
                    <h6>Scissor Lift</h6>
                    <a className="dropdown-item" href="#">John Bean GOLD 2 Wheel Alignment Machine</a>
                    <a className="dropdown-item" href="#">Car Washing Scissor Lift</a>
                  </div>

                  {/* Wheel Balancer */}
                  <div className="col-md-4">
                    <h6>Wheel Balancer</h6>
                    <a className="dropdown-item" href="#">John Bean B600L Wheel Balancer</a>
                    <a className="dropdown-item" href="#">John Bean B9100 Wheel Balancer</a>
                    <a className="dropdown-item" href="#">John Bean B100 Wheel Balancer</a>
                  </div>

                  {/* Stanley Hand Tools */}
                  <div className="col-md-4">
                    <h6>Stanley Hand Tools</h6>
                    <a className="dropdown-item" href="#">Stanley Multi Tool Kit</a>
                    <a className="dropdown-item" href="#">Stanley Mechanic Tool Kit</a>
                  </div>

                  {/* Tyre Changer */}
                  <div className="col-md-4">
                    <h6>Tyre Changer</h6>
                    <a className="dropdown-item" href="#">John Bean T900 Tyre Changer</a>
                    <a className="dropdown-item" href="#">John Bean T3000 Tyre Changer</a>
                  </div>

                  {/* Nitrogen Generator */}
                  <div className="col-md-4">
                    <h6>Nitrogen Generator</h6>
                    <a className="dropdown-item" href="#">PCL Sumo Nitrogen Inflator</a>
                  </div>

                  {/* View All Categories Button */}
                  <div className="col-md-4 d-flex justify-content-center align-items-center"> 
                    <Link href="/products">
                      <button className="btn btn-outline-success view-all-btn">View All Categories</button>
                    </Link>
                  </div>
                </div>
              </div>
            </li>

             {/* Services Link */}
             <li className="nav-item">
              <Link className="nav-link" href="/p_services">
                Services
              </Link>
            </li>

            {/* About Links */}
            <li className="nav-item">
              <Link className="nav-link" href="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">
                Contact
              </Link>
            </li>
          </ul>

          {/* Social Media Icons and Contact Number */}
          <div className="d-flex flex-column align-items-center">
          {/* Social Media Icons */}
            <div className="d-flex gap-3 mb-2">
              <a href="#" style={{ color: "#cd0402", fontSize: "1.0rem " }}>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" style={{ color: "#cd0402", fontSize: "1.0rem " }}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" style={{ color: "#cd0402", fontSize: "1.0rem " }}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" style={{ color: "#cd0402", fontSize: "1.0rem "}}>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>

            {/* Phone Number */}
            <div className="d-flex align-items-center" style={{ color: "#cd0402", fontWeight: "bold", fontSize: "1.1rem" }}>
              <FontAwesomeIcon icon={faPhone} className="me-2" />
              <span>+91 07942545733</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}