import classnames from "classnames";
import React from "react";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import {
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
} from "reactstrap";
import { appData, navLinks } from "../../components/utilities/constants";
import TopHeader from "../../components/topHeader/TopHeader";
import Logo from "../../components/logo/Logo";
import MainNavbar from "../../components/mainNavbar/MainNavbar";
import ShopingCart from "../../components/shopingCart/ShopingCart";
import WishList from "../../components/wishList/WishList";
import ToggleNavbar from "../../components/navbar/ToggleNavbar";
import Login from "../../components/login/Login";
import SignUp from "../../components/signUp/SignUp";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.ReadCartItems = this.ReadCartItems.bind(this);
    this.ReadWishListItems = this.ReadWishListItems.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      timeout: true,
      modal: false,
      activeTab: "1",
      isOpen: false,
      collapsed: true,
      CartHide: true,
      classset: "",
      getproduct: appData,
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      modal: !this.state.modal,
    });
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  logintoggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  ReadCartItems() {
    return JSON.parse(localStorage.getItem("LocalCartItems"));
  }
  removeFromCart = (Index) => {
    var UpdatedCart = JSON.parse(localStorage.getItem("LocalCartItems"));
    UpdatedCart = UpdatedCart.slice(0, Index).concat(
      UpdatedCart.slice(Index + 1, UpdatedCart.length)
    );
    localStorage.removeItem("LocalCartItems");
    localStorage.setItem("LocalCartItems", JSON.stringify(UpdatedCart));
  };

  ReadWishListItems() {
    return JSON.parse(localStorage.getItem("LocalWishListItems"));
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    var scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;

    if (scrollTop > 100) {
      document
        .getElementById("site-header")
        .setAttribute(
          "class",
          "site-header header-style-menu-center is-sticky"
        );
    } else {
      document
        .getElementById("site-header")
        .setAttribute("class", "site-header header-style-menu-center");
    }
  }

  ShowCart = () => {
    if (this.state.CartHide === true) {
      var elm = document.getElementById("DivCartContent");
      if (elm != null) {
        document
          .getElementById("DivCartContent")
          .setAttribute("style", "display:block");
        this.state.CartHide = false;
      }
    }
  };

  HideCart() {
    var elm = document.getElementById("DivCartContent");
    if (elm != null) {
      document
        .getElementById("DivCartContent")
        .setAttribute("style", "display:none");
      this.state.CartHide = true;
    }
  }

  closeNavbar() {
    if (this.state.collapsed !== true) {
      this.toggleNavbar();
    }
  }

  onClickClassAdd(pages) {
    if (this.state.classset !== pages) {
      this.setState({
        ...this.state,
        classset: pages,
      });
    } else {
      if (Object.keys(this.state.classset).length === 0) {
        this.setState({
          ...this.state,
          classset: pages,
        });
      } else {
        this.setState({
          ...this.state,
          classset: "",
        });
      }
    }
  }

  OpenSubmenuOpen(id) {
    var elm = document.getElementById(id);
    if (elm != null) {
      document
        .getElementById(id)
        .setAttribute("class", "dropdown-menu dropdown-menu-right show");
    }
  }

  OpenSubmenuClose(id) {
    var elm = document.getElementById(id);
    if (elm != null) {
      document
        .getElementById(id)
        .setAttribute("class", "dropdown-menu dropdown-menu-right");
    }
  }

  render() {
    let pathnames = document.location.href;
    let pathArray = pathnames.split("/");
    let pageName = "/" + pathArray[pathArray.length - 1];
    var searchName;
    if (pageName === "/topbar-with-load-more") {
      searchName = "/topbar-with-load-more";
    } else if (pageName === "/sidebar-without-lazyload") {
      searchName = "/sidebar-without-lazyload";
    } else if (pageName === "/topbar-without-lazyload") {
      searchName = "/topbar-without-lazyload";
    } else if (pageName === "/sidebar-with-lazyload") {
      searchName = "/sidebar-with-lazyload";
    } else {
      searchName = "/sidebar-with-load-more";
    }
    if (this.state.timeout === true) {
      setTimeout(
        function () {
          this.setState({ timeout: false });
        }.bind(this),
        2000
      ); // wait 5 seconds, then reset to false
    }

    return (
      <header className="site-header header-style-menu-center" id="site-header">
        {this.state.timeout === false ? (
          <div>
            <TopHeader toggle={this.toggle} />
            <div className="header-main header-main-bg-color-default">
              <div className="container-fluid">
                <Row>
                  <Col lg={12}>
                    <div className="row align-items-center justify-content-md-center">
                      <Logo />
                      <MainNavbar
                        navLinks={navLinks}
                        toggle={this.toggle}
                        isOpen={this.state.isOpen}
                      />

                      <Col xl={2} lg={2} className="col-6">
                        <div className="header-nav-right-wrapper">
                          <div className="ciya-tools">
                            <div className="ciya-tools-wrapper">
                              <ul className="ciya-tools-actions">
                                <ShopingCart
                                  ReadCartItems={this.ReadCartItems}
                                  ShowCart={this.ShowCart}
                                  removeFromCart={this.removeFromCart}
                                  HideCart={this.HideCart}
                                />
                                <WishList
                                  ReadWishListItems={this.ReadWishListItems}
                                />
                                <li className="ciya-tools-action ciya-tools-search">
                                  <Link to={searchName}>
                                    <i className="glyph-icon pgsicon-ecommerce-magnifying-glass" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <ToggleNavbar
                        toggleNavbar={this.toggleNavbar}
                        collapsed={this.state.collapsed}
                        navLinks={navLinks}
                        classset={this.state.classset}
                      />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className="modal-login modal-dialog-centered"
                  >
                    <ModalHeader toggle={this.toggle}>
                      <h4 className="mb-0">Sign in Or Register</h4>
                    </ModalHeader>
                    <ModalBody>
                      <Nav tabs>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.activeTab === "1",
                            })}
                            onClick={() => {
                              this.logintoggle("1");
                            }}
                          >
                            Sign In
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.activeTab === "2",
                            })}
                            onClick={() => {
                              this.logintoggle("2");
                            }}
                          >
                            Register
                          </NavLink>
                        </NavItem>
                      </Nav>

                      <TabContent activeTab={this.state.activeTab}>
                        <Login
                          toggle={this.toggle}
                          activeTab={this.state.activeTab}
                          logintoggle={this.logintoggle}
                        />
                        <SignUp
                          activeTab={this.state.activeTab}
                          toggle={this.toggle}
                          logintoggle={this.logintoggle}
                        />
                      </TabContent>
                    </ModalBody>
                  </Modal>
                  <div className="col-12">
                    <div className="mobile-menu" id="mobileMenu" />
                  </div>
                </Row>
              </div>
            </div>
          </div>
        ) : (
          <div id="preloader">
            <Loader type="Puff" color="#04d39f" height={100} width={100} />
          </div>
        )}
      </header>
    );
  }
}
export default Header;
