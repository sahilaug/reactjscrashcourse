import React, { Component } from "react";
import Card from "./Card";

class Home extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="p20 card-container">
        {data.length
          ? data.map(d => (
              <Card
                cardData={d}
                toggleLike={this.props.toggleLike}
                showLikeButton={true}
              />
            ))
          : null}
      </div>
    );
  }
}

export default Home;
