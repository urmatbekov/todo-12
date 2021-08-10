import Item from "./Item"


const ItemGroup = ({setItems,items}) => {

    const onClickDelete = (work) => {
        const filterWork = items.filter((item) => item.work !== work)
        setItems(filterWork)
    }

    const onClickImportant = (work) => {
        const itemIndex = items.findIndex((item) => item.work === work)
        const currentItem = { ...items[itemIndex] }
        const newItems = [...items]

        currentItem.important = !currentItem.important
        newItems[itemIndex] = currentItem

        setItems(newItems)
    }

    const onClickComplated = (work) => {
        const itemIndex = items.findIndex((item) => item.work === work)
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
                    important={item.important}
                    completed={item.completed} />
            ))}
        </ul>
    )
};

export default ItemGroup;