import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import CharacterCard from "./components/CharacterCard";
import images from "./images.json";
import Footer from "./components/Footer";


class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images,
    score: 0,
    topScore: 0
  };
  clickFunction = id => {
    console.log("its clicking")
    console.log(id)
    const updatedScore = this.state.score + 1
    this.setState({ score: updatedScore });
    const updatedTopScore = this.state.score + 1
    this.setState({ score: updatedTopScore });
    console.log(this.state.topScore)
  };
  render() {
    return (
      <div>
        <Header score={this.state.score} topScore={this.state.topScore} />
        <Main>
          {this.state.images.map(clickedImage => (
            <CharacterCard
              id={clickedImage.id}
              key={clickedImage.id}
              name={clickedImage.name}
              image={clickedImage.image}
              clickListener={this.clickFunction}
            />
          ))}
        </Main>
        <Footer />
      </div>
    )
  }
}

export default App;

