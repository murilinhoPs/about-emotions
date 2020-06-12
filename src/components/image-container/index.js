import React, { useState } from "react";
import "./styles.css";

export default function ImageContent({ url, content }) {
  const [state, setState] = useState({ description: false });

  const ShowDescription = () => {
    setState({ description: !state.description });
  };

  return (
    <div className="Content">

      <div className="Content-Image-Display">
        <div className="Content-Image">
          <img src={url} alt="medo" onClick={ShowDescription}></img>
        </div>
      </div>

      {state.description ? (
        <div className="Content-Description">
          <text>{content}</text>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
