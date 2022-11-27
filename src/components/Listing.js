import React from "react";
import Item from "./Item";

export default function Listing({items}) {
    return (
        <div className="item-list">
            {items.map(item => (
                <Item item={item} key={Math.random()}/>
            ))}
        </div>
    );
};



