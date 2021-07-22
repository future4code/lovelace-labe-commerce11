import React from 'react';
import './App.css';

export default function App() {
    
    function adiciona1(){
    
    let res = document.getElementById('resultado')
    let total = document.getElementById('total')
    let butao = '<input type="button" value="Remover" />'
    let qnt = 0
    
    res.innerHTML = `1x Produto 1 ${butao}`
    total.innerHTML = 12.750
               
}

function adiciona2(){
    
    let res = document.getElementById('resultado2')
    let total = document.getElementById('total')
    let butao = '<input type="button" value="Remover" />'
    
    res.innerHTML = `\n1x Produto 2 ${butao}`
    total.innerHTML = 10.400
}

function adiciona3(){
    
    let res = document.getElementById('resultado3')
    let total = document.getElementById('total')
    let butao = '<input type="button" value="Remover" />'
    
    res.innerHTML = '\n1x Produto 3'+' '+butao
    total.innerHTML = 249.00
}

  return (
    <div className="App">
    <section class="filtro">
        <h3>Filtros</h3>        
        
            Valor mínimo:
            <input type="number" /><br/><br/>
            Valor máximo:
            <input type="number" /><br/><br/>
            Busca por nome:
            <input type="text" placeholder="Produto" />
        
    </section>
        <section class="produtos">
        <h3 class="titulo2">Quantidade de produtos:</h3>
            <div class="itens">
                <div class="box-pagina-principal" id="btn1">
                <img src="https://i.ebayimg.com/images/g/ckwAAOxymiVQ97pR/s-l500.jpg" />
                Produto 1<br/>
                US $12.750,00<br/><br/>
                <input type="button" value="Adicionar ao carrinho" onClick={adiciona1} />
            </div>
            <div class="box-pagina-principal" id="btn2">
                <img src="https://i.ebayimg.com/images/g/KkEAAOSw56Fc0gTq/s-l500.jpg" />
                Produto 2<br/>
                US $10 400,00<br/><br/>
                <input type="button" value="Adicionar ao carrinho" onClick={adiciona2} />
            </div>
            <div class="box-pagina-principal" id="btn3">
                <img src="https://i.ebayimg.com/images/g/9uoAAOSwZTNg8z-p/s-l1600.jpg" />
                Produto 3<br/>
                US $249,99<br/><br/>
                <input type="button" value="Adicionar ao carrinho" onClick={adiciona3} />
            </div>
            </div>
        </section>
        <section class="carrinho">
            <h3>Carrinho:</h3>
            <div class="carrinho-itens" id="resultado"></div>
            <p class="carrinho-itens" id="resultado2"></p>
            <div class="carrinho-itens" id="resultado3"></div>
            <p>Valor total: $ <span id="total">0,00</span></p>
        </section>
      
    </div>
  );
}


