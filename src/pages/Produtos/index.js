import React from 'react';
import './App.css';
const Page = () => {
    return(
        
        <div class="App-color">
            <div class="App-produto">
                <h6>CADASTRE SEUS PRODUTOS</h6>
                <form class="App-form" id="formProduto">
                <input type="text" placeholder="Descrição do produto" id="nomeProduto"/>
                <input type="text" placeholder="Quantidade" id="quantidade"/>
                <input type="text" placeholder="Preço" id="preço"/>
                <input type="submit" value="Cadastrar"/>
                </form>
            </div>    
        </div>
    );
}

const form = document.getElementById('formProduto')
form.addEventListener('submit', (e) => {

    e.preventDefault();
    let nomeProduto = document.getElementById('nomeProduto').value
    let quantidade = document.getElementById('quantidade').value
    let preco = document.getElementById('preço').value
    
    let data = {
        nomeProduto,
        quantidade,
        preco,
        
    }
    let convertData = JSON.stringify(data)

    localStorage.setItem('lead', convertData)
    
})

export default Page;
