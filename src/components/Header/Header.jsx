import { Link } from 'react-router-dom'
// import Logo from './assets/LOGO.png'

function Header() {
    return (
        <Header>
            {/* <img src={Logo} alt="logo Kasa" /> */}
            
                <Link to="/">Accueil!</Link>
                <Link to="/aPropos">A Propos</Link>
            
        </Header>
    )
}



export default Header
