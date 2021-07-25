import React from 'react';
import './App.css';
import { useState } from 'react';

function Page() {
    const [nome, setNome] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [preco, setPreco] = useState("");
   
    const handleNome = (e) => {
        setNome(e.target.value);
    }
    const handleQuantidade = (e) => {
        setQuantidade(e.target.value);
    }
    const handlePreco = (e) => {
        setPreco(e.target.value);
    }
   

    const onSubmit = (e) => {
        e.preventDefault();

        const data = {
            nome,
            quantidade,
            preco,
       };

        localStorage.setItem("lead", JSON.stringify(data));
    };

    return(
        <div class="App-color">
            <div class="App-cliente">
                <h6>CADASTRE O CLIENTE</h6> 
                <form class="App-form" onSubmit={onSubmit}>
                    <input value={nome} onChange={handleNome} placeholder="Descrição do produto"/>
                    <input value={quantidade} onChange={handleQuantidade} placeholder="Quantidade" />
                    <input value={preco} onChange={handlePreco} placeholder="Preço" />
                    <button>ENVIAR DADOS</button>
                </form>
            </div>
        </div>
    );
}


export default Page;