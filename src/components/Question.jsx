import React from 'react';

export default function Question({
  question = `Hi, how are you?`,
  choices = [`good`, `bad`, `better`, `meh`],
  onClick,
}) {
  return (
    <div>
      <h2>{question}</h2>
      <div>
        {choices.map((choice, index) => (
          <button key={index} value={choice} onClick={onClick}>
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
}
