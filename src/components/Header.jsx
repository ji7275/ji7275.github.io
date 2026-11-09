// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Header.css";

// const destinationsIndia = [
//   { label: "Goa", path: "/goa" },
//   { label: "Kashmir", path: "/kashmir" },
//   { label: "Rajasthan", path: "/rajasthan" },
//   { label: "Kerala", path: "/kerala" },
//   { label: "Himachal Pradesh", path: "/himachal" },
// ];

// const international = [
//   { label: "Dubai", path: "/dubai" },
//   { label: "Bali", path: "/bali" },
//   { label: "Thailand", path: "/thailand" },
//   { label: "Switzerland", path: "/switzerland" },
//   { label: "Europe", path: "/europe" },
// ];

// const experiences = [
//   { label: "Honeymoon Holidays", path: "/honeymoon" },
//   { label: "Family Holidays", path: "/Family" },
//   { label: "Adventure Tours", path: "/Adventure" },
//   { label: "Weekend Getaways", path: "/Weekend" },
// ];

// const services = [
//   { label: "Flight Booking", id: "flight-booking" },
//   { label: "Hotel Booking", id: "hotel-booking" },
//   { label: "Holiday Packages", id: "holiday-packages" },
//   { label: "Visa Assistance", id: "visa-assistance" },
//   { label: "Travel Insurance", id: "travel-insurance" },
//   { label: "Airport Transfers", id: "airport-transfers" },
// ];

// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState("");

//   const closeMenu = () => {
//     setMenuOpen(false);
//     setActiveDropdown("");
//   };

//   const toggleDropdown = (name) => {
//     setActiveDropdown((current) => (current === name ? "" : name));
//   };

//   const dropdownClass = (name) =>
//     `nav-dropdown ${activeDropdown === name ? "dropdown-open" : ""}`;

//   return (
//     <>
//       <div className="travel-topbar">
//         <div className="travel-header-container topbar-inner">
//           <div className="topbar-left">
//             <span>✦ Your Journey Begins Here!</span>
//             <span className="topbar-separator">|</span>
//             <span>Discover. Explore. Experience.</span>
//           </div>

//           <div className="topbar-right">
//             <a href="mailto:travelhigh99@gmail.com">✉ travelhigh99@gmail.com</a>
//             <a href="tel:+919871735122">☎ +91 9871735122</a>
//             <a href="tel:+919667859420">☎ +91 9667859420</a>
//           </div>
//         </div>
//       </div>

//       <header className="travel-header">
//         <div className="travel-header-container navbar">
//           <Link to="/" className="travel-brand" onClick={closeMenu}>
//             <img
//               src={`${import.meta.env.BASE_URL}Images/logo.png`}
//               alt="Travel99 Logo"
//               className="travel-brand-logo"
//             />

//             <div className="travel-brand-name">
//               <h2>
//                 Travel High <span>99</span>
//               </h2>
//               <p>EXPLORE THE WORLD</p>
//             </div>
//           </Link>

//           <button
//             type="button"
//             className="mobile-menu-button"
//             onClick={() => {
//               setMenuOpen(!menuOpen);
//               setActiveDropdown("");
//             }}
//             aria-label="Toggle navigation"
//             aria-expanded={menuOpen}
//           >
//             {menuOpen ? "✕" : "☰"}
//           </button>

//           <nav
//             className={`travel-navigation ${menuOpen ? "show-navigation" : ""}`}
//           >
//             <Link to="/" className="navigation-link" onClick={closeMenu}>
//               HOME
//             </Link>

//             <Link to="/about" className="navigation-link" onClick={closeMenu}>
//               ABOUT US
//             </Link>

//             <Link to="/news" className="navigation-link" onClick={closeMenu}>
//               NEWS
//             </Link>

//             {/* DESTINATIONS DROPDOWN */}
//             <div className={dropdownClass("destinations")}>
//               <button
//                 type="button"
//                 className="navigation-link dropdown-trigger"
//                 onClick={() => toggleDropdown("destinations")}
//                 aria-expanded={activeDropdown === "destinations"}
//               >
//                 DESTINATIONS <span className="nav-chevron"></span>
//               </button>

//               <div className="travel-dropdown mega-dropdown">
//                 <div className="mega-dropdown-heading">
//                   <span>EXPLORE THE WORLD</span>
//                   <h3>Find Your Next Destination</h3>
//                 </div>

//                 <div className="mega-dropdown-grid">
//                   <div className="mega-dropdown-column">
//                     <h4>Explore India</h4>
//                     {destinationsIndia.map((item) => (
//                       <Link key={item.path} to={item.path} onClick={closeMenu}>
//                         {item.label}
//                       </Link>
//                     ))}
//                   </div>

//                   <div className="mega-dropdown-column">
//                     <h4>International</h4>
//                     {international.map((item) => (
//                       <Link key={item.path} to={item.path} onClick={closeMenu}>
//                         {item.label}
//                       </Link>
//                     ))}
//                   </div>

//                   <div className="mega-dropdown-column">
//                     <h4>Holiday Experiences</h4>
//                     {experiences.map((item) => (
//                       <Link key={item.path} to={item.path} onClick={closeMenu}>
//                         {item.label}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* SERVICES DROPDOWN */}
//             <div className={dropdownClass("services")}>
//               <button
//                 type="button"
//                 className="navigation-link dropdown-trigger"
//                 onClick={() => toggleDropdown("services")}
//                 aria-expanded={activeDropdown === "services"}
//               >
//                 SERVICES <span className="nav-chevron"></span>
//               </button>

//               <div className="travel-dropdown simple-dropdown">
//                 {services.map((service) => (
//                   <Link
//                     key={service.id}
//                     to={`/#${service.id}`}
//                     onClick={closeMenu}
//                   >
//                     {service.label}
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             <Link
//               to="/packages"
//               className="navigation-link"
//               onClick={closeMenu}
//             >
//               PACKAGES
//             </Link>

//             <Link to="/contact" className="navigation-link" onClick={closeMenu}>
//               CONTACT
//             </Link>

//             <div className="navigation-actions">
//               <a
//                 href="https://localhost:7241/"
//                 className="admin-login-button"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 onClick={closeMenu}
//               >
//                 ♙ ADMIN LOGIN
//               </a>

//               <Link
//                 to="/#contact"
//                 className="plan-trip-button"
//                 onClick={closeMenu}
//               >
//                 PLAN YOUR TRIP <span>↗</span>
//               </Link>
//             </div>
//           </nav>
//         </div>
//       </header>
//     </>
//   );
// }

// export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const ADMIN_LOGIN_URL = "https://localhost:7241/";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("");

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown("");
  };

  const toggleDropdown = (name) => {
    setActiveDropdown((current) => (current === name ? "" : name));
  };

  const dropdownClass = (name) =>
    `nav-dropdown ${activeDropdown === name ? "dropdown-open" : ""}`;

  return (
    <>
      {/* TOP INFORMATION BAR */}
      <div className="travel-topbar">
        <div className="travel-header-container topbar-inner">
          <div className="topbar-left">
            <span className="topbar-star">✦</span>
            <span>Your Journey Begins Here!</span>
            <span className="topbar-separator">|</span>
            <span>Discover. Explore. Experience.</span>
          </div>

          <div className="topbar-right">
            <a href="mailto:travelhigh99@gmail.com">
              <span>✉</span>
              travelhigh99@gmail.com
            </a>
            <a href="mailto:travelhigh99@gmail.com">
              <span>✉</span>
              info@travelhigh99.com
            </a>

            <span className="topbar-line"></span>

            <a href="tel:+919871735122">
              <span>☎</span>
              +91 9871735122
            </a>
            <a href="tel:+919871735122">
              <span>☎</span>
              +91 9667859420
            </a>
            <a href="tel:+919871735122">
              <span>☎</span>
              +91 8586096704
            </a>
            <a href="tel:+919871735122">
              <span>☎</span>
              +91 9582356257
            </a>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <header className="travel-header">
        <div className="travel-header-container navbar">
          {/* BRAND LOGO */}

          <a href="/" className="travel-brand" onClick={closeMenu}>
            <img
              src={`${import.meta.env.BASE_URL}Images/logo.png`}
              alt="Travel99 Logo"
              className="travel-brand-logo"
            />
            {/* <img
              src="/Travel99.Client/Images/logo.png"
              alt="Travel99"
              className="travel-brand-logo"
            /> */}
            {/* </a> */}

            <div className="travel-brand-name">
              <h2>
                Travel High <span>99</span>
              </h2>
              <p>EXPLORE THE WORLD</p>
            </div>
          </a>

          {/* MOBILE MENU */}
          <button
            type="button"
            className={`mobile-menu-button ${menuOpen ? "is-open" : ""}`}
            onClick={() => {
              setMenuOpen(!menuOpen);
              setActiveDropdown("");
            }}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* NAVIGATION */}
          <nav
            className={`travel-navigation ${menuOpen ? "show-navigation" : ""}`}
          >
            <a href="/" className="navigation-link" onClick={closeMenu}>
              HOME
            </a>
            {/* <a href="/about" className="navigation-link" onClick={closeMenu}>
              ABOUT US
            </a> */}

            <Link to="/about" className="navigation-link" onClick={closeMenu}>
              ABOUT US
            </Link>

            <Link to="/news" className="navigation-link" onClick={closeMenu}>
              NEWS
            </Link>

            {/*
            <a href="/packages" className="navigation-link" onClick={closeMenu}>
              NEWS
            </a> */}

            {/* DESTINATIONS */}
            <div className={dropdownClass("destinations")}>
              <button
                type="button"
                className="navigation-link dropdown-trigger"
                onClick={() => toggleDropdown("destinations")}
                aria-expanded={activeDropdown === "destinations"}
              >
                DESTINATIONS
                <span className="nav-chevron"></span>
              </button>

              <div className="travel-dropdown mega-dropdown">
                <div className="mega-dropdown-heading">
                  <span>EXPLORE THE WORLD</span>
                  <h3>Find Your Next Destination</h3>
                </div>

                <div className="mega-dropdown-grid">
                  <div className="mega-dropdown-column">
                    <h4>Explore India</h4>
                    <a href="/goa" onClick={closeMenu}>
                      Goa
                    </a>

                    {/* <Link to="/goa">Goa</Link> */}
                    <a href="/kashmir" onClick={closeMenu}>
                      Kashmir
                    </a>
                    <a href="/rajasthan" onClick={closeMenu}>
                      Rajasthan
                    </a>
                    <a href="/kerala" onClick={closeMenu}>
                      Kerala
                    </a>
                    <a href="/himachal" onClick={closeMenu}>
                      Himachal Pradesh
                    </a>
                  </div>

                  <div className="mega-dropdown-column">
                    <h4>International</h4>
                    <a href="/dubai" onClick={closeMenu}>
                      Dubai
                    </a>
                    <a href="bali" onClick={closeMenu}>
                      Bali
                    </a>
                    <a href="/thailand" onClick={closeMenu}>
                      Thailand
                    </a>
                    <a href="/switzerland" onClick={closeMenu}>
                      Switzerland
                    </a>
                    <a href="/europe" onClick={closeMenu}>
                      Europe
                    </a>
                  </div>

                  <div className="mega-dropdown-column">
                    <h4>Holiday Experiences</h4>
                    <a href="/Honeymoon" onClick={closeMenu}>
                      Honeymoon Holidays
                    </a>
                    <a href="/Family" onClick={closeMenu}>
                      Family Holidays
                    </a>
                    <a href="/Adventure" onClick={closeMenu}>
                      Adventure Tours
                    </a>
                    <a href="/Weekend" onClick={closeMenu}>
                      Weekend Getaways
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* SERVICES */}
            <div className={dropdownClass("services")}>
              <button
                type="button"
                className="navigation-link dropdown-trigger"
                onClick={() => toggleDropdown("services")}
                aria-expanded={activeDropdown === "services"}
              >
                SERVICES
                <span className="nav-chevron"></span>
              </button>

              <div className="travel-dropdown simple-dropdown">
                <a href="/#flight-booking">Flight Booking</a>
                <a href="/#hotel-booking">Hotel Booking</a>
                <a href="/#holiday-packages">Holiday Packages</a>
                <a href="/#visa-assistance">Visa Assistance</a>
                <a href="/#travel-insurance">Travel Insurance</a>
                <a href="/#airport-transfers">Airport Transfers</a>
              </div>
            </div>

            <Link
              to="/packages"
              className="navigation-link"
              onClick={closeMenu}
            >
              PACKAGES
            </Link>

            <a href="/contact" className="navigation-link" onClick={closeMenu}>
              CONTACT
            </a>

            {/* MOBILE ACTIONS */}
            <div className="navigation-actions">
              <a
                href={ADMIN_LOGIN_URL}
                className="admin-login-button"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                <span>♙</span>
                ADMIN LOGIN
              </a>

              <a
                href="/#contact"
                className="plan-trip-button"
                onClick={closeMenu}
              >
                PLAN YOUR TRIP
                <span>↗</span>
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
