import React from "react";

function MemeGeneratorComponent(props) {
  return (
    <div>
      <header>
        <img src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" />
        <h3>Random Memes Generator</h3>
      </header>

      <form onSubmit={props.handleSubmit}>
        <input
          placeholder="Text caption"
          name="topText"
          value={props.data.topText}
          onChange={props.changeText}
        />
        <input
          placeholder="Bottom caption"
          name="bottomText"
          value={props.data.bottomText}
          onChange={props.changeText}
        />
        <button>Generate</button>
      </form>

      <div className="generator-area">
        <img src={props.data.randomImageUrl} />
        <h2 className="topText text">{props.data.topText}</h2>
        <h2 className="bottomText text">{props.data.bottomText}</h2>
      </div>
    </div>
  );
}

export default MemeGeneratorComponent;
