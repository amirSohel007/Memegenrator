import React from "react";
import MemeGeneratorComponent from './MemeGenerator.component'

class MemeGenrator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImageUrl: "https://i.imgflip.com/3pnmg.jpg",
      memesArray: []
    };
  }

  changeText = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes").then(res => res.json())
      .then(res => {
        const mems = res.data.memes;
        this.setState({memesArray: mems});
      });
  }

  handleSubmit = e => {
    e.preventDefault();
    let memeNumber = Math.floor(Math.random() * this.state.memesArray.length);
    let randomImage = this.state.memesArray[memeNumber].url;
    this.setState({
      randomImageUrl: randomImage
    });
  };

  render() {
    return (
      <MemeGeneratorComponent
        handleSubmit={this.handleSubmit}
        changeText={this.changeText}
        data={this.state}
      />
    );
  }
}

export default MemeGenrator;
