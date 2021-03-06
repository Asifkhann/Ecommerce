import React from "react";
import { Row, Col, Container } from "reactstrap";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.Checkscroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.Checkscroll);
  }

  Checkscroll() {
    var scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;

    if (scrollTop > 350) {
      if (document.getElementById("back-to-top") != null) {
        document
          .getElementById("back-to-top")
          .setAttribute("style", "display:block");
      }
    } else {
      if (document.getElementById("back-to-top") != null) {
        document
          .getElementById("back-to-top")
          .setAttribute("style", "display:none");
      }
    }
  }
  ClicktoTop() {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }
  render() {
    let backtotop = { display: "none" };
    return (
      <div>
        <footer className="site-footer">
          <div className="footer-wrapper">
            <div className="footer-widgets-wrapper">
              <div className="footer">
                <Container>
                  <Row>
                    <div className="col-lg-3 col-md-6 footer-align-left">
                      <div className="logo-wrapper widget">
                        <p>
                          <Link to="#">
                            <img
                              className="img-fluid"
                              src={require(`../../assets/images/logo.svg`)}
                              alt="logo"
                            />
                          </Link>
                        </p>
                      </div>
                      <div className="text-content">
                        <p className="mb-3 mt-4">
                          CiyaShop is an enchanting and easy to use e-Commerce
                          WP theme that allows you to sell your products in a
                          dynamic way.
                        </p>
                        <p className="mb-4">
                          The theme is packed with everything you need to create
                          a new website.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-align-left"></div>
                    <div className="col-lg-3 col-md-6 footer-align-left"></div>
                    <div className="col-lg-3 col-md-6 footer-align-left">
                      <div className="pgs-contact-widget widget mt-4 mt-lg-0">
                        <h4 className="footer-title title">Contact Info</h4>
                        <div className="footer-address">
                          <ul>
                            <li>
                              <i className="fa fa-map-marker" />
                              <span>
                                1635 Franklin Street Montgomery, Near Sherwood
                                Mall. AL 36104
                              </span>
                            </li>
                            <li className="pgs-contact-email">
                              <i className="fa fa-envelope-o" />
                              <span>support@ciyashop.com</span>
                            </li>
                            <li>
                              <i className="fa fa-phone" />
                              <span>126-632-2345</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="widget pgs-newsletter-widget">
                        <h4 className="footer-title title">Newsletter</h4>
                        <div className="newsletter">
                          <div className="section-field">
                            <form className="newsletter_form">
                              <div className="input-area">
                                <input
                                  type="text"
                                  className="placeholder newsletter-email"
                                  name="newsletter_email"
                                  placeholder="Enter your email"
                                />
                              </div>
                              <div className="button-area">
                                <span className="input-group-btn">
                                  <button
                                    className="btn btn-icon newsletter-mailchimp submit"
                                    type="button"
                                  >
                                    Subscribe
                                  </button>
                                </span>
                                <span className="newsletter-spinner spinimg-pgs_newsletter_widget_2" />
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Row>
                </Container>
              </div>
            </div>

            <div className="site-info">
              <div className="footer-widget">
                <Container>
                  <div className="row align-items-center">
                    <Col md={6} className="float-left">
                      <p>
                        © Copyright 2019 <Link to="#">CiyaShop</Link> All Rights
                        Reserved.
                      </p>
                    </Col>
                    <Col md={6} className="float-right">
                      <div className="payments text-right"></div>
                    </Col>
                  </div>
                  <div className="clearfix" />
                </Container>
              </div>
            </div>
          </div>
        </footer>
        {/* Back to Top */}
        <div id="back-to-top" style={backtotop} onClick={this.ClicktoTop}>
          <Link class="top arrow">
            <i class="fa fa-angle-up"></i>
          </Link>
        </div>
      </div>
    );
  }
}
export default Footer;
