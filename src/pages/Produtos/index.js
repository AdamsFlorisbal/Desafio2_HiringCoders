import React from 'react';
import './App.css';
const Page = () => {
    return(
        <div class="App-cliente">
        <form id="form">
            <input type="text" placeholder="Name" id="nomeProdutp"/>
            <input type="text" placeholder="Quantidade" id="quantidade"/>
            <input type="text" placeholder="Preço" id="preço"/>
            <input type="submit" value="Cadastrar"/>
        </form>
        </div>
    );
}

export default Page;
