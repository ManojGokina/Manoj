import React, { Component } from "react";
import Navbar from "reactjs-navbar";
import "reactjs-navbar/dist/index.css";
// import {img} from '../../constants/img';
import {
  faHome,
  faUser,
  faGlobe,
  faChartPie,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <Navbar
        // logo={img.logo}
        helpCallback={() => {
          alert("I need help... and coffee...");
        }}
        menuItems={[
          {
            title: "Home",
            icon: faHome,
            isAuth: true,
            onClick: () => {
              alert("Its coffee time...");
            }
          },
          {
            title: "About Me",
            icon: faUser,
            isAuth: true
          },
          {
            title: "Connect",
            icon: faGlobe,
            isAuth: true
          },
          {
            title: "My Projects",
            icon: faCogs,
            isAuth: true,
          },
          {
            title: "My Skills",
            icon: faChartPie,
            isAuth: true
          }
        ]}
      />
    );
  }
}

export default Header
