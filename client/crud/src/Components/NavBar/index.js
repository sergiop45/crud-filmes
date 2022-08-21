import React, {Component} from 'react';
import { 
    BrowserRouter as Router,
    Routes , Route, Link
       }
 from 'react-router-dom';
 import Home from '../Home';
import Cadastrar from '../Cadastrar';
import Editar from '../Editar';
import Filmes from '../Filmes';
import './style.css'


class NavBar extends Component {    
    render() {

        return(
            <Router>
                <div>
                    <nav className='navbar'>

                        <ul>
                            <li>

                                <Link to="/">Home</Link>

                            </li>

                            <li>
                                <Link to="/filmes">Filmes</Link>
                            </li>

                            <li>
                                <Link to="/cadastro">Cadastrar</Link>
                            </li>

                            <li>
                                <Link to="/editar">Editar</Link>
                            </li>
                        </ul>

                    </nav>

                    <Routes>

                        <Route path="/" element={<Home/>} />
                          
                        <Route path="/cadastro" element={<Cadastrar/>} />

                        <Route path="/editar" element={<Editar/>} />

                        <Route path="/Filmes" element={<Filmes/>} />
                        
                    </Routes>

                </div>

               
            </Router>
        );

    }    
}


export default NavBar;