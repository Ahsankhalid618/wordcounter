import React, { useState } from "react";

export default function Main(props) {
  const handleClick = () => {
    console.log("event clicked");
    const Newtext = text.toUpperCase();
    setText(Newtext);
  };
  const handleClick1 = () => {
    console.log("event clicked");
    const Newtext = text.toLowerCase();
    setText(Newtext);
  };
  const handleClear = () => {
    console.log("event clicked");
    const Newtext = "";
    setText(Newtext);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };
  const HandleOnchange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
        <h1 className="z-10" >{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={HandleOnchange}
            style={{backgroundColor : props.mode==='dark'?'#3F4E4F':'white', color : props.mode==='dark'?'white':'black'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
      </div>
      <div className="container my-3">
      <button className="btn btn-primary mx-1 my-1" onClick={handleClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary mx-1 " onClick={handleClick1}>
        Convert to LowerCase
      </button>
      <button className="btn btn-primary mx-1 " onClick={handleClear}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-1 " onClick={handleCopy}>
        Copy Text
      </button>
      </div>
      <div className="container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>
          <b>{text.split(" ").length}</b> Words and <b>{text.length}</b> Characters
        </p>
        <p>This text Will take <b>{0.008 * text.split(" ").length}</b> Minutes to Read</p>
        <h2>Preview</h2>
        <p><b>{text}</b></p>
      </div>
    </>
  );
}
