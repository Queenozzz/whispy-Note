import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useRef } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

function NotePad(props) {
  const date = new Date().toLocaleDateString();
  const [show, setShow] = useState(true);
  const ref = useRef(null);

  function handleClick() {
    props.onDelete(props.id);
  }
  function handleUndo() {
    setShow(false);
  }

  return (
    <div className="note">
      <div className="top">{show && <h1 ref={ref}> {props.title}</h1>}</div>
      {show && (
        <div className="bottom">
          <hr />
          <p type="text" ref={ref}>
            {props.content}
          </p>
        </div>
      )}
      <br />
      <br />
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? <VisibilityOffIcon /> : <VisibilityIcon onClick={handleUndo} />}
      </button>
      <>
        <h4>{props.title}</h4>
        {date}
      </>
    </div>
  );
}

export default NotePad;
