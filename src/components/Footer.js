import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/recode.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer p-2 d-flex justify-content-center align-items-center">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" className="logo" />
          </Col>
          <Col
            size={12}
            sm={6}
            className=" d-flex justify-content-center text-center text-sm-end"
          >
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/enmanuel-reyes-61aaa2250/"
                target="_blank"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.facebook.com/Enmanuel.33" target="_blank">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://github.com/EnmaReyes" target="_blank">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
