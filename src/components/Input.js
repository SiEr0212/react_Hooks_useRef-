import React from "react";

function Input({ placeholder, style }, ref) {
  return (
    <input
      onKeyDown={onKeyDown}
      ref={ref}
      type="text"
      placeholder={placeholder}
      style={style}
    />
  );
}
const ForwardedInput = React.forwardRef(Input);

export default ForwardedInput;
