import Experience from "../experience";

function Navbar(){
    return(
        <div>
            <nav className = 'navbar'>
                <div className="links">
                    <a href="/">Home</a>
                    <a href="/About">About</a>
                    <a href="/Experience">Experience</a>
                    <a href="/Projects">Projects</a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;