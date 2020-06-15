import React, { Component } from "react";
import Header from "./components/Header";
import SubHeader from "./components/Sub-header";
import Main from "./components/Main";
import images from "./images.json";
import Footer from "./components/Footer";


class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images,
    score: 0
  };
  clickFunction = id => {
    console.log("its clicking")
    console.log(id)

    const updatedScore = this.state.score + 1
    // // Filter this.state.friends for friends with an id not equal to the id being removed
    //  const friends = this.state.friends.filter(friend => friend.id !== id);
    // // Set this.state.friends equal to the new friends array
    this.setState({ score: updatedScore });
    console.log(this.state.score)
  };
  render() {
    return (
      <div>
        <Header />
        <SubHeader />
        <div className="main">
          {this.state.images.map(newImage =>
            <Main image={newImage.image}
              id={newImage.id}
              clickListener={this.clickFunction} />)}
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;

