import React from "react";
import { Container } from "react-bootstrap";
import twitter from "../../assets/icons/twitter2.svg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import "../../assets/styles/footer.css";
const Footer = () => {
  return (
    <div>
      <Container>
        <div>
          <footer className="blog-footer d-flex justify-content-between align-items-center py-3 mt-auto border-top bg-light">
            <div className="col-md-4 d-flex align-items-center">
              <a
                href="/"
                className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
              >
                <img
                  className="bi"
                  style={{ width: "30px", height: "30px" }}
                  src="https://getbootstrap.com/docs/5.1/assets/img/favicons/safari-pinned-tab.svg"
                  alt="bootstrap"
                />
              </a>
              <span className="text-mute">&copy; 2022 AsadBaen, Inc</span>
            </div>
            <ul className="nav col-md-4 justify-content-end align-items-center list-unstyled">
              <li className="ms-3">
                <a className="text-muted" href=".#">
                  <img
                    className="bi"
                    style={{ width: "30px", height: "30px" }}
                    src={twitter}
                    alt="twitter-icon"
                  />
                </a>
              </li>
              <li className="ms-3">
                <a className="text-muted" href=".#">
                  <img
                    className="bi"
                    style={{ width: "30px", height: "30px" }}
                    src={facebook}
                    alt="facebook-icon"
                  />
                </a>
              </li>
              <li className="ms-3">
                <a className="text-muted" href=".#">
                  <img
                    className="bi"
                    style={{ width: "30px", height: "30px" }}
                    src={instagram}
                    alt="instagram-icon"
                  />
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
