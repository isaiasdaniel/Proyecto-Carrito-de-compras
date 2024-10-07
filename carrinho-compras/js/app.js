//zerando carrinho
let totalGeral;
limpar();
function adicionar(){
//recuparar valores nome produto, quantidade e valor
let produto = document.getElementById('produto').value;
let nomeProduto = produto.split('-')[0];
let valorunitario = produto.split('R$')[1];
let quantidade = document.getElementById('quantidade').value;
//calcular o preco, o nosso sbtotal
let preco = quantidade * valorunitario;
let carrinho = document.getElementById('lista-produtos');
// adicionar no carrinho
carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span> ${nomeProduto}Celular <span class="texto-azul">R$${preco}</span>
        </section>`;
//atualizar o valor total e zerar quantidade
totalGeral = totalGeral + preco;
let campototal = document.getElementById('valor-total');
campototal.textContent = `R$ ${totalGeral}`;
document.getElementById('quantidade').value = '-';
}

function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = '0';

}