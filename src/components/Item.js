
const Item = ({ work, completed }) => {



    return (
        <li className={"list-group-item " + (completed ? "bg-success" : "")}>
            <span className="text-danger">{work}</span>
            <span className="btn btn-danger float-end ms-2">x</span>
            <span className="btn btn-warning float-end">!</span>
        </li>
    )
}

export default Item;