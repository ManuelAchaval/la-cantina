import NavBar from '../navbar/NavBar'
import './Header.scss';
const Header = ({contador}) => {
    return (
        <header>
            <NavBar />
            <p>el contador es : {contador}</p>
        </header>
    )
}
export default Header