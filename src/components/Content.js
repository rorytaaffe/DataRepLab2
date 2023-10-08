import React from 'react';

function Content() {
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div>
      <h1>Hello World!</h1>
      <h2>It is {currentTime}.</h2>
    </div>
  );
}

export default Content;
