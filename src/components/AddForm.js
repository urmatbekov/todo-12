import { useState } from "react"
const AddForm = ({ setItems, items }) => {
    const [value, setValue] = useState("")

    const onSubmitForm = (e) => {
        e.preventDefault()
        if (value.trim().length > 0) {

            const newItem = {
                work: value,
                completed: false,
                important: false,
                id:parseInt(Math.random()*1000000000)
            }

            const newItems = [...items, newItem]
            setItems(newItems)
            alert("Todo succes added")
            setValue("")
        }
    }

    const onChangeInput = (e) => {
        setValue(e.currentTarget.value)
    }

    return (
        <form onSubmit={onSubmitForm} className="mb-3 d-flex">
            <input value={value} onChange={onChangeInput} placeholder="Write work" className="form-control me-3" type="text" />
            <button className="btn btn-primary">Add</button>
        </form>
    )
}

export default AddForm;