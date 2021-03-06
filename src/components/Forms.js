import React, { useState } from "react";

export default function Forms(props) {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const handleOnchangeEvent = (event) => {
    setText(event.target.value);
    console.log("Onchange called !");
  };
  const changeToUpperText = () => {
    console.log("Uppercase clicked!");
    let newText = text.toUpperCase();
    setText(newText);
    setCount(count + 1);
  };
  const changeToLowerCase = () => {
    console.log("Lowercase clicked!");
    let newText = text.toLowerCase();
    setText(newText);
    setCount(count + 1);
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <div className="container my-3" >
          <h3>{props.Heading}</h3>
          {/* <h3>Button clicked {count} times</h3> */}
          <div className="mb-3">
            <textarea
              className="form-control"
              id="myBox"
              value={text}
              onChange={handleOnchangeEvent}
              rows="8"
              style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
            ></textarea>
          </div>
          <button
            className="btn btn-info mx-2"
            onClick={changeToUpperText}
          >
            Upper case
          </button>
          <button
            className="btn btn-info mx-2"
            onClick={changeToLowerCase}
          >
            Lower case
          </button>
          {/* <h3>Button clicked {count} times</h3> */}
        </div>
        <div className="container ">
          <h4>Text Reports</h4>
          <p>
            {text.split(" ").length} Words {text.length} Characters
            <br />
            {0.008 * text.split(" ").length} mins read
          </p>
          <h4>Preview</h4>
          <p>{text.length > 0 ? text : "No input provided till now"}</p>
        </div>
      </div>

    </>
  );
}
