import React from "react";

const TextWithLineBreaks: React.FC<{ text: string }> = ({ text }) => {
  return (
    <>
      {text.split("\n").map((line, index) => (
        <React.Fragment key={`${line}-${index}`}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </>
  );
};

export default TextWithLineBreaks;