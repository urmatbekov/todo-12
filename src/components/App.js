import AddForm from "./AddForm";
import ItemGroup from "./ItemGroup";
import { useState } from "react";


const App = () => {
    const [items, setItems] = useState([
        {id:12, work: "Play game", completed: true, important: true },
        {id:23, work: "Cleen home", completed: false, important: false },
        {id:45, work: "Go to sleep", completed: true, important: false },
        {id:58, work: "Do home work", completed: false, important: true },
    ])
    return (
        <main>
            <div className="container mt-5">
                <div className="col-4 m-auto border shadow-sm rounded p-4">
                    <h1 className="text-center mb-4">Todo list</h1>
                    <AddForm items={items} setItems={setItems} />
                    <ItemGroup items={items} setItems={setItems} />
                </div>
            </div>
        </main>
    )
}

export default App;