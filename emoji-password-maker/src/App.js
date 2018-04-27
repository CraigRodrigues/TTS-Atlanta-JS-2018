import React from 'react';
import emojis from './data/emoji.json';

console.log(emojis);

const App = () => {
    return (
        <div>
            <h1>Hello, world!</h1>
            <i className="twa twa-dragon-face"></i>
        </div>
    );
};

export default App;