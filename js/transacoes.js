//botao voltar pagina inicial do sistema
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('voltarInicio').addEventListener('click', function(){
    window.location.href = 'finango.html';
  })
});

//entrada e saida

let entrada = 0;
let saida = 0;
let transacoes  =[]


function salvarStorage(){
  const dados = {
    entrada,
    saida,
    transacoes
  };
  sessionStorage.setItem('dadosFinanceiros', JSON.stringify(dados));
}


function carregarStorage(){
  const dados = JSON.parse(sessionStorage.getItem('dadosFinanceiros'));
  if(dados){
    entrada = dados.entrada;
    saida = dados.saida;
    transacoes = dados.transacoes;
  }
}

function atualizarValores(){
  document.getElementById('entrada-valor').textContent = `R$ ${entrada.toFixed(2)}`;
  document.getElementById('saida-valor').textContent = `R$ ${saida.toFixed(2)}`;
  const saldo = entrada - saida;
  document.getElementById('saldo-valor').textContent = `R$ ${saldo.toFixed(2)}`;

  const lista = document.getElementById('listaTransacoes');
    lista.innerHTML = '';
    transacoes.forEach(t => {
      const li = document.createElement('li');
      li.textContent = t;
      lista.appendChild(li);
  });
  
}

function adicionarValor(){
  const valor = parseFloat(prompt("Digite o valor da entrada: "));
  if (!isNaN(valor) && valor > 0){
    entrada += valor;
    transacoes.push(`Entrada: +R$ ${valor.toFixed(2)}`);
    salvarStorage();
    atualizarValores(); 
  }
}

function removerValor(){
  const valor = parseFloat(prompt("Digite o valor da saída: "));
  if(!isNaN(valor) && valor > 0){
    saida += valor;
    transacoes.push(`Saída: -R$ ${valor.toFixed(2)}`);
    salvarStorage();
    atualizarValores(); 
  }
}

document.addEventListener('DOMContentLoaded', () => {
  carregarStorage();
  atualizarValores();
})
