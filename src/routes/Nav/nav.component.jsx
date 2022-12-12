
import './nav.styles.css'
import '../../assets/grid/css/2cols.css'


const Nav = () => {
    return (
        <nav>
            <div className='nav-container' >
                <div className="span_1_of_2" ></div>
                <div className='span_1_of_2'>
                    <ul className='nav-links-container ' >
                        <li><a href='#about'>About</a></li>
                        <li><a href='#projects'>Projects</a></li>
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        
        
        // <div className='nav-container'>
        //     <div>

        //     </div>
        //     <div className='nav-links-container'>
        //         <Link className="nav-link" to='#about' >
        //             About
        //         </Link>
        //         <Link className="nav-link" to='#projects' >
        //             Projects
        //         </Link>
        //         <Link className="nav-link" to='#contact' >
        //             Contact
        //         </Link>
        //     </div>
        // </div>
    )
}

export default Nav;