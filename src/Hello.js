import React from 'react';

export function Hello(props) {
  return (
    <h2>
      Hello {props.name}! Tu as {props.age} ans
    </h2>
  );
}

export function Greeting() {
  return <h2>Greetings</h2>;
}
