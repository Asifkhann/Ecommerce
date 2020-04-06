import React from "react";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

const TopHeader = (props) => {
  const { toggle } = props
  return (
    <div className="topbar topbar-bg-color-default topbar-desktop-on topbar-mobile-off">
      <div className="container-fluid">
        <Row>
          <Col lg={6} sm={12}>
            <div className="topbar-left text-left">
              <div className="topbar-link">
                <ul>
                  <li className="topbar_item topbar_item_type-email">
                    <Link to="/">
                      <i className="fa fa-envelope-o">&nbsp;</i>
                      asifkhan51194@gmail.com
                    </Link>
                  </li>
                  <li className="topbar_item topbar_item_type-phone_number">
                    <Link to="/">
                      <i className="fa fa-phone">&nbsp;</i>126-632-2345
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={12}>
            <div className="topbar-right text-right">
              <div className="topbar-link">
                <ul>
                  <li className="topbar_item topbar_item_type-topbar_menu">
                    <div className="menu-top-bar-menu-container">
                      <ul className="top-menu list-inline">
                        <li className="menu-item">
                          <Link to="/">My account</Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={toggle}
                            data-toggle="modal"
                            data-target="#"
                          >
                            <i className="fa fa-sign-in">&nbsp;</i>
                            Login
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="topbar_item topbar_item_type-social_profiles">
                    <div className="topbar-social_profiles-wrapper">
                      <ul className="topbar-social_profiles">
                        <li className="topbar-social_profile">
                          <a href={"https://www.facebook.com"} target="_blank">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li className="topbar-social_profile">
                          <a href={"https://twitter.com/"} target="_blank">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li className="topbar-social_profile">
                          <a href={"https://plus.google.com/"} target="_blank">
                            <i className="fa fa-google-plus" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TopHeader;
