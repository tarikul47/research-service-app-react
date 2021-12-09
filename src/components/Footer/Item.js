import React from 'react';

const Item = (props) => {
    return (
        <li className="item-wrap">{props.name}</li>
    );
};

export default Item;