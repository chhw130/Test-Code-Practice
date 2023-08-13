import React, { useState } from "react";

const Greeting = () => {
  const [changeText, setChangeText] = useState();

  const textChangeHandler = () => {
    setChangeText(true);
  };
  return (
    <div>
      <h2>Hello world</h2>
      {changeText ? <p>It's good today</p> : <p>Change!</p>}
      <button onClick={() => textChangeHandler()}>Change text</button>
    </div>
  );
};

export default Greeting;
