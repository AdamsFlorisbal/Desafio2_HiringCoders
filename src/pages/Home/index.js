
import {Link} from 'react-router-dom'
import React from 'react';
import './App.css';
const Page = () => {
    return(
        <div class="App App-header">     
            <div class="button button-size">
                <li >
                    <Link  to="/Clientes">Clientes</Link>
                </li>
            </div>
            <div class="button button-size">
                <li>
                <Link  to="/Produtos">Produtos</Link>
                </li>
            </div>                 
        </div>  
    );
}

export default Page;
