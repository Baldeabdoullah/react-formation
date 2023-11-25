import React, { useState } from "react";

const MyButton = ({ count, onClick }) => {
  return (
    <div>
      <button onClick={onClick}>Cliqué {count} fois</button>
    </div>
  );
};

export default MyButton;
