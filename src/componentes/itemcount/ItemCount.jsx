import { useState } from "react";
import './ItemCount.scss'

function ItemCount({ stock,onAdd }) {
    const [contador, setContador] = useState(0)


    const aumentoContador = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const resto = () => {
        if(contador>0){
        setContador(contador - 1);
        }
    }

    const reestablecer = () => {
        setContador(1)
    }
    return (
        <div className="itemcount">
            <div className="count">
                <button onClick={resto}className="btn-contador">-</button>
            <p>
                {contador}
            </p>
            <button onClick={aumentoContador}className="btn-contador">+</button>
            </div>
            
            <button onClick={reestablecer}className="btn-contador">Reestablecer</button>
            {/* <button onClick={confirmar}>Agregar al carrito</button> */}
        </div>
    )
}
export default ItemCount