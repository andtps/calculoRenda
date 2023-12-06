document.addEventListener('DOMContentLoaded', function(){

    const formElement = document.getElementById('form');
    const energiaElement = document.getElementById('energia');
    const aguaElement = document.getElementById('agua');
    const gasElement = document.getElementById('gas');
    const netElement = document.getElementById('net');
    const telefoneElement = document.getElementById('telefone');
  
    const parcelaCarroElement = document.getElementById('parcelaCarro');
    const combustivelElement = document.getElementById('combustivel');
    const seguroElement = document.getElementById('seguro');
  
    const faculElement = document.getElementById('facul');
    const escolaElement = document.getElementById('escola');
    const idiomaElement = document.getElementById('idioma');
  
    const cartao1Element = document.getElementById('cartao1');
    const cartao2Element = document.getElementById('cartao2');
    const cartao3Element = document.getElementById('cartao3');
    const cartao4Element = document.getElementById('cartao4');
  
    const botaoElement = document.getElementById('submit-button');
  
    let resultCasa;
    let resultVei;
    let resultEsc;
    let resultCatao;
  
    document.getElementById('submit-button').addEventListener('click', function(e){
      e.preventDefault();
  
      casa();
      veiculo();
      escol();
      cartao();
  
      const soma = resultCasa + resultVei + resultEsc + resultCatao;
  
      const mensagemResultado = document.getElementById('resultado');
      const mensagem = `O seu gasto fixo desse mês é de <b>${soma}</b>`;
  
      mensagemResultado.innerHTML = mensagem;
      mensagemResultado.style.display = 'block';
    });
  
    function casa() {
      let formValue = parseFloat(formElement.value) || 0;
      let energiaValue = parseFloat(energiaElement.value) || 0;
      let aguaValue = parseFloat(aguaElement.value) || 0;
      let gasValue = parseFloat(gasElement.value) || 0;
      let netValue = parseFloat(netElement.value) || 0;
      let telefoneValue = parseFloat(telefoneElement.value) || 0;
  
      resultCasa = formValue + energiaValue + aguaValue + gasValue + netValue + telefoneValue;
    }
  
    function veiculo() {
      let parcela = parseFloat(parcelaCarroElement.value) || 0;
      let combustivel = parseFloat(combustivelElement.value) || 0;
      let seguro = parseFloat(seguroElement.value) || 0;
  
      resultVei = parcela + combustivel + seguro;
    }
  
    function escol() {
      let faculdade = parseFloat(faculElement.value) || 0;
      let escola = parseFloat(escolaElement.value) || 0;
      let idioma = parseFloat(idiomaElement.value) || 0;
  
      resultEsc = faculdade + escola + idioma;
    }
  
    function cartao() {
      let cartao1 = parseFloat(cartao1Element.value) || 0;
      let cartao2 = parseFloat(cartao2Element.value) || 0;
      let cartao3 = parseFloat(cartao3Element.value) || 0;
      let cartao4 = parseFloat(cartao4Element.value) || 0;
  
      resultCatao = cartao1 + cartao2 + cartao3 + cartao4;
    }
  
  });
  