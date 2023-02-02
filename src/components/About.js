import { Outlet } from "react-router";
import React from "react";
import ProfileClass from "./ProfileClass";

// const About = () => {
//   return (
//     <>
//       <h1>this is about page</h1>
//       {/* <Outlet /> */}
//       <ProfileClass name="yaten" />
//     </>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("parent constructor");
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("about page");
    }, 1000);
    console.log("parent componentDidMount");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    console.log("parent render");
    return (
      <>
        <h2>this is about Component</h2>
        <ProfileClass name="yatendra" />
        <ProfileClass name="tushar" />
      </>
    );
  }
}

export default About;

/**
 * parent constructor
 * parent render
 *    child constructor1
 *    child render1
 *    child constructor2
 *    child render
 * child compDidMount yatendra
 * child compDidMount tushar
 * parent componentDIdMOunt
 */
