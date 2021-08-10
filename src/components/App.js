import AddForm from "./AddForm";
import ItemGroup from "./ItemGroup";
import { useState } from "react";


const App = () => {
    const [items, setItems] = useState([
        { work: "Play game", completed: true, important: true },
        { work: "Cleen home", completed: false, important: false },
        { work: "Go to sleep", completed: true, important: false },
        { work: "Do home work", completed: false, important: true },
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