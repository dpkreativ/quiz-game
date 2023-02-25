import React from 'react';

export default function ThanksForPlaying({ onClick }) {
  return (
    <div>
      <h2>Thanks for playing!</h2>
      <button onClick={onClick}>Play new game</button>
    </div>
  );
}
