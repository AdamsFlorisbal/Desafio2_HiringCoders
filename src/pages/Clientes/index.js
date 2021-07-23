import React from 'react';
import './App.css';
const Page = () => {
    return(
        <div class="App-cliente">
        <form id="form">
            <input type="text" placeholder="Name" id="nome"/>
            <input type="text" placeholder="Cpf" id="Email"/>
            <input type="text" placeholder="Email" id="email"/>
            <input type="submit" value="Cadastrar"/>
        </form>
        </div>
    );
}

export default Page;
