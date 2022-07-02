import React, { useState } from "react";
import "../styles/Contact.css";
import GoogleMap from "./GoogleMap";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import TelegramIcon from "@material-ui/icons/Telegram";
import PublicIcon from "@material-ui/icons/Public";
import ClearIcon from "@material-ui/icons/Clear";

const Contact = () => {
  const [isAddressOpen, setIsAddressOpen] = useState(true);

  return (
    <div className="contact">
      <div className="contact_info">
        <p className="title">Contact Us</p>
        <div className="contact_section">
          {/* Address Part */}
          <div className="contact_addressSection">
            <div className="icon">
              <LocationOnIcon className="location_icon" />
            </div>
            <p>
              <strong>Address: </strong> Plot No.2004, Phase-IV,
              Vatva-Ahmedabad, Gujarat, India.
            </p>
          </div>
          {/* Phone Part */}
          <div className="contact_phoneSection">
            <div className="icon">
              <PhoneIcon className="phone_icon" />
            </div>
            <div className="phone_numberSection">
              <span>
                <strong>Mo:</strong>+91 9909224482
              </span>
              <span>
                <strong>Mo:</strong>+91 9824234369
              </span>
              <span>
                <strong>Tel:</strong>079-65453449
              </span>
            </div>
          </div>
          {/* Email Part */}
          <div className="contact_emailSection">
            <div className="icon">
              <TelegramIcon className="email_icon" />
            </div>
            <div className="email_mailSection">
              <span>
                <strong>Email:</strong>
                <a href="mailto:deepindustries11@rediffmail.com">
                  deepindustries11@rediffmail.com
                </a>
              </span>
              <span>
                <strong>Email:</strong>
                <a href="mailto:info@pellets.co.in">info@pellets.co.in</a>
              </span>
            </div>
          </div>
          {/* Website Part */}
          <div className="contact_webSection">
            <div className="icon">
              <PublicIcon className="web_icon" />
            </div>
            <p>
              <strong>Website: </strong>
              <a href="https://www.pellets.co.in" target="_blank">
                www.pellets.co.in
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Map Part begins */}

      <div className="map_section">
        {isAddressOpen && (
          <div className="map_address">
            <p className="title">
              Narol - Vatva Road
              <ClearIcon
                onClick={() => {
                  setIsAddressOpen(false);
                }}
                className="close_icon"
              />
            </p>
            <p className="address">Phase-4, GIDC Vatwa, Ahmedabad, Gujarat</p>
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Narol+-+Vatva+Rd,+Phase+4,+GIDC+Vatwa,+Ahmedabad,+Gujarat,+India/@22.9647,72.640888,12z/data=!4m5!3m4!1s0x395e88b27b559643:0xb4f92a2325e25625!8m2!3d22.964163!4d72.638186?hl=en"
            >
              View Larger Map <LocationOnIcon className="locationIcon" />
            </a>
          </div>
        )}
        <GoogleMap className="googleMap" />
      </div>

      {/* Map Part Ends */}
    </div>
  );
};

export default Contact;
