
const Item = ({onClickComplated, work, completed,important,onClickDelete,onClickImportant }) => {

    return (
        <li className={"list-group-item " + (completed ? "bg-success" : "")}>
            <span type="button" onClick={()=>onClickComplated(work)} className={important?"text-warning":""}>{work}</span>
            <span onClick={()=>onClickDelete(work)} className="btn btn-danger float-end ms-2">x</span>
            <span onClick={()=>onClickImportant(work)} className="btn btn-warning float-end">!</span>
        </li>
    )
}

export default Item;