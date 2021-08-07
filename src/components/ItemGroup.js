import Item from "./Item"
import { useState } from "react";

const ItemGroup = () => {

    const [items, setItems] = useState([
        { work: "Play game", completed: true,danger:true },
        { work: "Cleen home", completed: false },
        { work: "Go to sleep", completed: true },
        { work: "Do home work", completed: false },
    ])


    return (
        <ul className="list-group">
            {items.map((item) => (
                <Item work={item.work} completed={item.completed}  />
            ))}
        </ul>
    )
};

export default ItemGroup;