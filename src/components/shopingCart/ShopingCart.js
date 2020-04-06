import React from "react";
import { Link } from "react-router-dom";

const ShopingCart = (props) => {
  const { ReadCartItems, ShowCart, removeFromCart, HideCart } = props;

  return (
    <li className="ciya-tools-action ciya-tools-cart">
      <Link
        className="cart-link"
        to={
          ReadCartItems() == null || ReadCartItems().length === 0
            ? "#"
            : "/ShopingCart"
        }
        onClick={() => ShowCart()}
      >
        <span className="cart-icon">
          <i className="glyph-icon pgsicon-ecommerce-empty-shopping-cart" />
        </span>
        <span className="cart-count count">
          {ReadCartItems() == null ? 0 : ReadCartItems().length}
        </span>
      </Link>

      {ReadCartItems() != null && ReadCartItems().length > 0 ? (
        <div className="cart-contents" id="DivCartContent">
          <div className="widget ciyashop widget-shopping-cart">
            <div className="widget-shopping-cart-content">
              <div className="pgs-product-list-widget-container has-scrollbar">
                <ul className="ciyashop-mini-cart cart-list">
                  {ReadCartItems().map((CartItem, index) => (
                    <li className="ciya-mini-cart-item">
                      <Link
                        onClick={() => removeFromCart(index)}
                        id={`Product_${CartItem.ProductID}`}
                        className="remove remove_from_cart_button"
                      >
                        ×
                      </Link>
                      <div className="media">
                        <Link to="#">
                          <img
                            width={60}
                            height={76}
                            src={require(`../../assets/images/${CartItem.ProductImage}`)}
                            className="img-fluid"
                            alt=""
                          />
                        </Link>
                        <div className="media-body">
                          <Link to="#" className="product-title">
                            {CartItem.ProductName}
                          </Link>
                          <span className="quantity">
                            {CartItem.Qty} ×
                            <span className="woocs-special_price_code">
                              <span className="ciya-Price-amount amount">
                                <span className="ciya-Price-currencySymbol">
                                  $
                                </span>
                                {CartItem.Rate.toLocaleString(
                                  navigator.language,
                                  {
                                    minimumFractionDigits: 0,
                                  }
                                )}
                              </span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="ciyashop-mini-cart__total total">
                <strong>Subtotal:</strong>
                <span className="woocs_special_price_code">
                  <span className="ciyashop-Price-amount amount">
                    <span className="ciyashop-Price-currencySymbol">$</span>
                    {ReadCartItems()
                      .reduce(
                        (fr, CartItem) => fr + CartItem.Qty * CartItem.Rate,
                        0
                      )
                      .toLocaleString(navigator.language, {
                        minimumFractionDigits: 0,
                      })}
                  </span>
                </span>
              </p>
              <p className="ciyashop-mini-cart__buttons buttons">
                <Link
                  onClick={() => HideCart()}
                  to="/ShopingCart"
                  className="button wc-forward"
                >
                  View cart
                </Link>
                <Link
                  onClick={() => HideCart()}
                  to="/CheckOut"
                  className="button checkout wc-forward"
                >
                  Checkout
                </Link>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart-contents" id="DivCartContent">
          <div className="widget ciyashop widget-shopping-cart">
            <div className="widget-shopping-cart-content">
              <p className="ciyashop-mini-cart__total total">
                <img
                  src={require(`../../assets/images/empty-cart.png`)}
                  className="img-fluid mr-3"
                  alt=""
                />
                <strong>Your cart is currently empty.</strong>
                <span className="woocs_special_price_code">
                  <span className="ciyashop-Price-amount amount">
                    <span className="ciyashop-Price-currencySymbol"></span>
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default ShopingCart;
