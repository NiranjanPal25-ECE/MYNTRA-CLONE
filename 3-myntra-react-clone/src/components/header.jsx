import { IoPersonCircle } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { IoBagCheckSharp, IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"

function Header() {
  const bag = useSelector((store) => store.bag);

  return (
    <div>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </Link>
        </div>
        <nav className="nav_bar">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">
            Studio <sup>New</sup>
          </a>
        </nav>
        <div className="search_bar">
          <IoSearch className="search_icon" aria-hidden="true" />
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <div className="action_container">
          <IoPersonCircle className="action_icon" aria-hidden="true" />
            <span className="action_name">Profile</span>
          </div>

          <div className="action_container">
            <FaHeart className="action_icon" aria-hidden="true" />
            <span className="action_name">Wishlist</span>
          </div>

          <Link className="action_container" to="/bag">
            <IoBagCheckSharp className="action_icon" aria-hidden="true" />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{bag.length}</span>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
