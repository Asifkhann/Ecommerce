import React from "react";
import { Link } from "react-router-dom";

const WishList = (props) => {
  const { ReadWishListItems } = props;

  return (
    <li className="ciya-tools-action ciya-tools-wishlist">
      <Link to="/wishlist">
        <i className="glyph-icon pgsicon-ecommerce-like" />
        <span className="wishlist ciyashop-wishlist-count">
          {ReadWishListItems() == null ? 0 : ReadWishListItems().length}
        </span>
      </Link>
    </li>
  );
};

export default WishList;
