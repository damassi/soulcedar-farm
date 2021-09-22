import React from "react";

export function withLineBreaks(str) {
  return str.split("\n").map((content, key) => {
    return (
      <React.Fragment key={key}>
        <span>{content}</span>
        <br />
      </React.Fragment>
    );
  });
}
