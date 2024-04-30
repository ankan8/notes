import "./NavbarStyles.css";
import { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <Avatar im="data:image/jpeg;base64,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" />
        <h1 className="navbar-logo">Drizzy</h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? ".nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          {/* <button className="kiki">Sign up</button> */}
        </ul>
      </nav>
    );
  }
}
export default Navbar;
