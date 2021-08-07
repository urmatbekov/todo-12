import AddForm from "./AddForm";
import ItemGroup from "./ItemGroup";


const App = () => {
    return (
        <main>
            <div className="container mt-5">
                <div className="col-4 m-auto border shadow-sm rounded p-4">
                    <h1 className="text-center mb-4">Todo list</h1>
                    <AddForm />
                    <ItemGroup />
                </div>
            </div>
        </main>
    )
}

export default App;