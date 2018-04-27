import React from 'react';
import ReactDOM from 'react-dom';

function GroceryHeader({title}) {
    return <h1>{title}</h1>;
}

function GroceryItem({item}) {
    return <li>{item}</li>;
}

function GroceryList({items}) {
    return (
        <ol>
            {items.map((item, i) => <GroceryItem key={i} item={item} />)}
        </ol>
    )
}

const groceryItems = [
    'Eggs',
    'Bacon',
    'Cheese',
    'Biscuits',
    'Ham'
];

const list = (
    <div>
        <GroceryHeader title="My Grocery List!" />
        <GroceryList items={groceryItems}/>
    </div>
);

ReactDOM.render(
    list,
    document.getElementById('app')
);








