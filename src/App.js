import React, { Component } from "react";
import Navbar from "./components/Nav";
import Header from "./components/Header";
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
    this.setState({ score: updatedScore });
    console.log(this.state.score)
  };
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <div className="main">
          {this.state.images.map(clickedImage =>
            <Main image={clickedImage.image}
              id={clickedImage.id}
              clickListener={this.clickFunction} />)}
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;

