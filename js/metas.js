document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('voltarInicio').addEventListener('click', function(){
    window.location.href = 'finango.html';
  })

  carregarStorage();
  carregaMetaStorage();
  exibirMetaSalva();
});


//dados
let valorMeta = 0;
let valorPoupado = 0;
let nameMeta = "";
let dataMeta = "";

//criar meta
function criarMeta(){
  nameMeta = document.getElementById('nameMeta').value;
  dataMeta = document.getElementById('dataMeta').value;
  valorMeta = parseFloat(document.getElementById('valorMeta').value);
  valorPoupado = 0;

  if(!nameMeta || isNaN(valorMeta) || valorMeta <= 0 ){
    alert("Preencha os dados corretamente!");
    return;
  }

  salvarMetaStorage();
  exibirMetaSalva();
}

function exibirMetaSalva(){
  if(!nameMeta || valorMeta <= 0) return;


  document.getElementById('tituloMeta').textContent = nameMeta;
  document.getElementById('valorTotal').textContent = valorMeta.toFixed(2);
  document.getElementById('dataLimite').textContent = dataMeta;
  document.getElementById('valorPoupado').textContent = valorPoupado.toFixed(2);
  document.getElementById('valorResta').textContent = (valorMeta - valorPoupado).toFixed(2);
}

//contribuir meta
function contribuirValorMeta(){
  const valorContribuir = parseFloat(document.getElementById('valorContribuir').value);

  if(isNaN(valorContribuir) || valorContribuir <= 0){
    alert("digite um valor válido para contribuir!");
    return;
  }

  //atualizadar dados, puxando da trasacoes.js
  carregarStorage();
  const saldo = entrada - saida;

  if(valorContribuir > saldo){
    document.getElementById('alerta').style.display = 'block';
    return;
  }

  //se tiver saldo suficiente add na lista
  valorPoupado += valorContribuir;
  saida += valorContribuir;
  transacoes.push(`Meta: -R$ ${valorContribuir.toFixed(2)} (Contribuição)`);

  salvarStorage();
  salvarMetaStorage();
  exibirMetaSalva();

  document.getElementById('valorContribuir').value = "";

  if(valorPoupado >= valorMeta){
    alert("🎉 Parabéns! Você atingiu sua meta!");
    removerMeta();
  }
}

function fecharAlerta(){
    document.getElementById('alerta').style.display = 'none';
}

//salvar Meta do storage
function salvarMetaStorage(){
  const meta = {
    nameMeta,
    dataMeta,
    valorMeta,
    valorPoupado
  };
  sessionStorage.setItem('metaUsuario', JSON.stringify(meta));
}

//carregar meta
function carregaMetaStorage(){
  const meta = JSON.parse(sessionStorage.getItem('metaUsuario'));
  if (meta){
    nameMeta = meta.nameMeta;
    dataMeta = meta.dataMeta;
    valorMeta = meta.valorMeta;
    valorPoupado = meta.valorPoupado;
  }
}

//remover a meta quando ela for atingida
function removerMeta(){
  sessionStorage.removeItem('metaUsuario');

  //limpar dados
  nameMeta = "";
  dataMeta = "";
  valorMeta = 0;
  valorPoupado = 0;

  //limpar o visual
  document.getElementById('tituloMeta').textContent = "";
  document.getElementById('valorTotal').textContent = "";
  document.getElementById('dataLimite').textContent = "";
  document.getElementById('valorPoupado').textContent = "0";
  document.getElementById('valorResta').textContent = "";
}