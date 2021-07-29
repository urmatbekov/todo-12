const App = () => {
    return (
        <main>
            <div className="container mt-5">
                <h1 className="text-center">Todo list</h1>
                <div className="col-4 m-auto border shadow-sm rounded p-4">
                    <form className="mb-4 d-flex">
                        <input placeholder="Write work" className="form-control me-4" type="text" />
                        <button className="btn btn-primary">Add</button>
                    </form>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <span>work1</span>
                            <span className="btn btn-danger float-end ms-2">x</span>
                            <span className="btn btn-warning float-end">!</span>
                        </li>
                        <li className="list-group-item">
                            <span>work1</span>
                            <span className="btn btn-danger float-end ms-2">x</span>
                            <span className="btn btn-warning float-end">!</span>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default App;