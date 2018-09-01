import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const myName = 'Anibal';

const sum = (a, b) => {
  return a + b;
};

export function Hi() {
  return (
    <div>
      Hello <strong>{myName}</strong>!
      <div>
        <ul>
          <li> Item 1 </li>
          <li> Item 2 </li>
          <li> Item {sum(1, 2)} </li>
          <li> Item ... </li>
          <li> Item ... </li>
          <li> Item n </li>
        </ul>
      </div>
    </div>
  );
}

ReactDOM.render(<Hi />, document.querySelector('#root'));
