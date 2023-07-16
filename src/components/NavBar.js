import { useRef } from "react"; 
import { FaTimes, FaBars } from "react-icons/fa"; 
import "../styles/main.css"; 

function NavBar() {
    const navRef = useRef(); 
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");

    };
        
    return (
        <header>
            <h3> The Brightside Productions, LLC </h3>
            <nav ref={navRef}>
                <a href="/#">Shows</a>
                <a href="/#">Audios</a>
                <a href="/#">Characters</a>
                <a href="/#">Store</a>
                <button
                    className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button
                className="nav-btn"onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}
export default NavBar; 