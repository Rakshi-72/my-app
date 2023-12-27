import { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState("");

  /**
   * It takes the value of the task input, and then performs the task on the text.
   */
  var temp = "";
  const performTask = () => {
    let task = document.getElementById("task").value;
    if (task === "upper") {
      setText(text.toUpperCase());
    } else if (task === "lower") {
      setText(text.toLowerCase());
    } else if (task === "book") {
      let dummy = "";

      text.split(" ").forEach((e) => {
        dummy +=
          e[0].toUpperCase() + e.substring(1, e.length).toLowerCase() + " ";
      });

      setText(dummy);
    } else {
      setText(text.replaceAll(" ", ""));
    }
  };

  const onChange = (event) => {
    setText(event.target.value);
  };

  const clearText = () => {
    setText("");
  };

  const copyToClipBoard = () => {
    let text = document.getElementById("mytxt");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const removeExtraSpace = () => {
    setText(text.split(/[ ]+/).join(" "));
  };

  return (
    <>
      <div className="back text-center">
        <br />
        <h3>{props.heading}</h3>
        <div className="card col-6 mx-auto mt-3">
          <div className="card-body mt-2">
            <div className="form-group">
              <textarea
                className="form-control"
                id="mytxt"
                rows="8"
                value={text}
                onChange={onChange}
                placeholder="enter your text here"
              ></textarea>
            </div>
            <div className="form-group">
              <select className="form-control form-control-sm option" id="task">
                <option value="default">Select taks to perform</option>
                <option value="lower">To Lowercase</option>
                <option value="upper">To Uppercase</option>
                <option value="book">To BookCase</option>
                <option value="remove">Remove space</option>
              </select>
            </div>
            <div className="span">
              <button
                className="btn btn-success mx-1"
                onClick={performTask}
                id="mybtn"
              >
                SUBMIT
              </button>
              <button
                className="btn btn-danger mx-1"
                onClick={clearText}
                id="mybtn"
              >
                CLEAR
              </button>
              <button
                className="btn btn-warning mx-1"
                onClick={copyToClipBoard}
                id="mybtn"
              >
                COPY TEXT
              </button>
              <button
                className="btn btn-dark mx-1"
                onClick={removeExtraSpace}
                id="mybtn"
              >
                Remove Spaces
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="my-3">
          <h3>Text Summery</h3>
          <b>
            <p>
              total '{text.split(" ").length == 1 ? 0 : text.split(" ").length}'
              words, or '{text.length}' characters, '
              {Math.round(0.008 * text.split(" ").length)}' minutes to read
            </p>
          </b>
        </div>
      </div>
    </>
  );
}

Form.defaultProps = {
  heading: "welcome to Text-Utils",
};
