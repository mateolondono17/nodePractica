import {Link} from 'react-router-dom'
import React from 'react';

const Header = () =>{
    return(
        <header>
            <nav>
                <Link>Inicio</Link>
                <Link>Clientes</Link>
                <Link to={'/productos'}>Productos</Link>
            </nav>
        </header>
    )
}


export default Header;