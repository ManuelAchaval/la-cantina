import Item from "../item/Item"

const ItemList = () => {
    return (
        <div><h3>Lista de items</h3>
            <ul>
                <li>
                    <Item />
                </li>
            </ul>
        </div>
    )
}
export default ItemList