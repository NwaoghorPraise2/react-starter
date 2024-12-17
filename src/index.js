import React from 'react';
import ReactDOM from 'react-dom/client';

const Greeting = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <h2>My name is Praise</h2>
    </div>
  );
};
const rootElement = ReactDOM.createRoot(document.getElementById('root'));

rootElement.render(<Greeting />);
export default Greeting;
