import React, { Component } from "react";
import Card from "./Card";

class Home extends Component {
  render() {
    const { data } = this.props;
    return (
      <div
        className="p20"
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly"
        }}
      >
        {data.length ? data.map(d => <Card cardData={d} />) : null}
      </div>
    );
  }
}

export default Home;
