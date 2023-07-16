import { FaBars, FaTimes } from "react-icons/fa"; 
import { useRef } from "react"; 
import "../styles/main.css"; 

function NavBar() {
    const navRef = useRef(); 
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav"); 

    }
        
    return (
        <header> 
            <h3> Logo </h3>
            <nav ref= {navRef}> 
                <a href="/#">Shows</a>
                <a href="/#">Audios</a>
                <a href="/#">Characters</a>
                <a href="/#">Store</a>
                <button className= "nav-btn nav-close-btn" onClick={showNavbar}> 
                    <FaTimes/> 
                </button>
                <button className="nav-btn" onClick={showNavbar}> 
                    <FaBars/> 
                </button>
            </nav>
        </header>
    )
}
export default NavBar; 