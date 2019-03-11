import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import BookList from "./BookList";

// Logo
import logo from "./assets/theindex.svg";

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <img src={logo} className="logo" alt="the index logo" />
        <section>
          <h4 className="menu-item">
            <NavLink to="/authors">AUTHORS</NavLink>
            <NavLink to="/books">books</NavLink>
          </h4>
        </section>
      </div>
    );
  }
}

export default Sidebar;
