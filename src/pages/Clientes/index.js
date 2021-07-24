import React from 'react';
import './App.css';
const Page = () => {
    return(
        <div class="App-color">
            <div class="App-cliente">
                <h6>CADASTRE O CLIENTE</h6> 
                <form class="App-form" id="formCliente">
                    <input type="text" placeholder="Name" id="nome"/>
                    <input type="text" placeholder="Cpf" id="cpf"/>
                    <input type="text" placeholder="Endereço" id="endereco"/>
                    <input type="text" placeholder="Telefone" id="telefone"/>
                    <input type="text" placeholder="Email" id="email"/>
                    <input type="submit" value="Cadastrar"/>
                </form>
            </div>
        </div>
    );
}
const form = document.getElementById('formCliente')
form.addEventListener('submit', (e) => {

    e.preventDefault();
    let nome = document.getElementById('nome').value
    let cpf = document.getElementById('cpf').value
    let endereco = document.getElementById('endereco').value
    let telefone = document.getElementById('telefone').value
    let email = document.getElementById('email').value
    let data = {
        nome,
        cpf,
        endereco,
        telefone,
        email,
    }
    let convertData = JSON.stringify(data)

    localStorage.setItem('lead', convertData)
    
})

export default Page;
