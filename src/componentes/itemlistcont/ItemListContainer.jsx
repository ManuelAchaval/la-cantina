import { useEffect, useState } from "react";
import ItemCount from "../itemcount/ItemCount";
import ItemList from "../itemlist/ItemList";

const ItemListContainer = ({greeting}) => {
    const[mostrar, setMostrar]=useState([])
    const[loading, setLoading]=useState(true)

    return (
        <div>
            <div>
                <ItemList/>
            </div>
            
        </div>
    )
}
export default ItemListContainer