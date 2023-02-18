import React from "react";
class ProfileClass extends React.Component {
  constructor(props) {
    super(props);

    console.log("child - constructor");
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("child - after render" + this.props.name);
  }

  componentWillUnmount() {
    console.log("unmounting" + this.props.name);
  }

  render() {
    console.log("child - render");
    return (
      <div className="mt-12">
        <h1>name: {this.props.name}</h1>
        <h2>{this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          set
        </button>
      </div>
    );
  }
}

export default ProfileClass;
