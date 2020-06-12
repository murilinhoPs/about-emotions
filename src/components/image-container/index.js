import React, { useState } from "react";

export default function ImageContent({ url, content }) {
  const [state, setState] = useState({ description: false });

  const ShowDescription = () => {
    setState({ description: !state.description });
  };

  return (
    <div className="Content">
      <div className="Content-Image">
        <img src={url} alt="medo" onClick={ShowDescription}></img>
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
