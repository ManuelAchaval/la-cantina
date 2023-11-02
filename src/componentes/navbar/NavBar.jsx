import './NavBar.scss'
import CartWidget from '../cartwidget/CartWidget'

const NavBar = (params) => {

    if (params.type === "footer") {
        return (
            <>
                <div className='footer'>
                    <p>Contacto</p>
                    <p>Manuel Achaval</p>
                    <p>Sobre nosotros</p>
                    <p className='footer__p'>©Copyright 2023</p>
                </div>
            </>
        )
    }
    else {
        return (
            <nav className='nav'>
                <ul className='nav__ul'>
                    <li className='nav__li'><h1>La Cantina</h1></li>
                    <li className='nav__li'><a href="#">Accesorios</a></li>
                    <li className='nav__li'><a href="#">Ropa</a></li>
                    <li className='nav__li'><a href="#">Coleccionables</a></li>
                    <li className='nav__li'><a href="#">Replicas</a></li>
                    <CartWidget />
                </ul>

            </nav>
        )
    }

}
export default NavBar