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
  }

  componentDidMount() {
    this.timer = setInterval(() => {}, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
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
