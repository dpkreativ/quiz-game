import React from 'react';

export default function Question({
  question = `Hi, how are you?`,
  options = [`good`, `bad`, `better`, `meh`],
}) {
  return (
    <div>
      <h2>{question}</h2>
      <div>
        {options.map((option, index) => (
          <button key={index}>{option}</button>
        ))}
      </div>
    </div>
  );
}
