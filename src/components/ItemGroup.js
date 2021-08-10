import Item from "./Item"
import { useState } from "react";

const ItemGroup = () => {

    const [items, setItems] = useState([
        { work: "Play game", completed: true, important: true },
        { work: "Cleen home", completed: false, important: false },
        { work: "Go to sleep", completed: true, important: false },
        { work: "Do home work", completed: false, important: true },
    ])

    const onClickDelete = (work) => {
        const filterWork = items.filter((item)=>item.work !== work)
        setItems(filterWork)
    }

    const onClickImportant = (work) => {
        const itemIndex = items.findIndex((item)=>item.work === work)
        const currentItem = {...items[itemIndex]}
        const newItems = [...items]
        
        currentItem.important = !currentItem.important
        newItems[itemIndex] = currentItem

        setItems(newItems)
    }

    return (
        <ul className="list-group">
            {items.map((item) => (
                <Item onClickImportant={onClickImportant} onClickDelete={onClickDelete} work={item.work} important={item.important} completed={item.completed} />
            ))}
        </ul>
    )
};

export default ItemGroup;