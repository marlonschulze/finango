document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('voltarInicio').addEventListener('click', function(){
    window.location.href = 'finango.html';
  })
})

//abrir cards
function verConteudo(topico){
  switch (topico){
    case 'orcamento':
      window.location.href = 'html/orcamento.html';
      break;
    
    case 'reserva':
      window.location.href = 'html/reserva.html';
      break;

    case 'organizacao':
      window.location.href = 'html/organizacao.html';
      break;

    case 'gastos':
      window.location.href = 'html/gastos.html';
      break;

    case 'investimentos':
      window.location.href = 'html/investimentos.html';
      break;

    case 'educfinan':
      window.location.href = 'html/ef.html';
      break;

    case 'planejamento':
      window.location.href = 'html/planejamento.html';
      break;

    case 'renda':
      window.location.href = 'html/renda.html'
  }
}