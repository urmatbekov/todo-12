import Item from "./Item"


const ItemGroup = ({setItems,items}) => {

    const onClickDelete = (id) => {
        const filterWork = items.filter((item) => item.id !== id)
        setItems(filterWork)
    }

    const onClickImportant = (id) => {
        const itemIndex = items.findIndex((item) => item.id === id)
        const currentItem = { ...items[itemIndex] }
        const newItems = [...items]

        currentItem.important = !currentItem.important
        newItems[itemIndex] = currentItem

        setItems(newItems)
    }

    const onClickComplated = (id) => {
        const itemIndex = items.findIndex((item) => item.id === id)
        const currentItem = { ...items[itemIndex] }
        const newItems = [...items]
        currentItem.completed = !currentItem.completed
        newItems[itemIndex] = currentItem
        setItems(newItems)
    }

    return (
        
        <ul className="list-group">
            {items.map((item) => (
                <Item
                    onClickComplated={onClickComplated}
                    onClickImportant={onClickImportant}
                    onClickDelete={onClickDelete}
                    work={item.work}
                    id={item.id}
                    important={item.important}
                    completed={item.completed} />
            ))}
            <li className="finaly list-group-item">
                <span>Important- 
                    {items.filter((item)=>item.important === true).length}
                </span>, <br/>
                <span>
                    Completed- 
                    {items.filter((item)=>item.completed === true).length}
                </span>, <br/>
                <span>
                    All- 
                    {items.length}
                </span>
            </li>
        </ul>
    )
};

export default ItemGroup;