import './NavBar.scss'
import CartWidget from '../cartwidget/CartWidget'

const NavBar = (params) => {

    if (params.type == "footer") {
        return (
            <>
                <div className='footer'>
                    <ul>
                        <li>Contacto</li>
                        <li><p>Manuel Achaval </p>
                            <p>©Copyright 2023</p></li>
                        <li>Sobre nosotros</li>
                        
                    </ul>

                </div>
            </>
        )
    }
    else {
        return (
            <nav>
                <ul>
                    <li><h1>La Cantina</h1></li>
                    <li><a href="#">Accesorios</a></li>
                    <li><a href="#">Ropa</a></li>
                    <li><a href="#">Coleccionables</a></li>
                    <li><a href="#">Replicas</a></li>
                    <CartWidget />
                </ul>

            </nav>
        )
    }

}
export default NavBar