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
    const clickedImages = images.filter(match => match.id === id);

    if (clickedImages[0].clicked) {
      this.setState({ score: 0, gameMessage: "You were shot down! Try to get them all next time!" })

      for (let i = 0; i < images.length; i++) {
        images[i].clicked = false;
      }

      this.setState({ images });

    } else if (this.state.score < 11) {
      clickedImages[0].clicked = true;

      this.setState({
        score: this.state.score + 1,
      },

        () => {
          console.log(this.state.score, this.state.topScore)

          if (this.state.score > this.state.topScore) {
            console.log(this.state.score, this.state.topScore)
            this.setState({
              topScore: this.state.score
            },
              () => console.log(this.state.score, this.state.topScore)
            );
          }
        }

      );

      images.sort(function (a, b) { return 0.5 - Math.random() });

      this.setState({ images });

    } else {
      clickedImages[0].clicked = true;

      this.setState({
        score: 0,
        topScore: 12
      })

      for (let i = 0; i < images.length; i++) {
        images[0].clicked = false;
      }

      images.sort(function (a, b) { return 0.5 - Math.random() });

      this.setState({ images });

    }
  }

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

