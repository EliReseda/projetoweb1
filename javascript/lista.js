function adicionar(){
	

	/*declara o item no texto.*/
	var date = document.getElementById('data').value;
	var texto1 = document.getElementById('item').value;
	var texto = document.getElementById('nome').value;
	var lista = document.getElementById('minhaLista');/*Fazer a ligação da lista*/
	var novoItem = document.createElement('li');/*vai cria um elemento li */

/*colocar o texto na lis */

var novotexto1 = document.createTextNode(texto); /*Pega o texto do item no primeiro paragrafo*/
var novotexto = document.createTextNode(date);
var novotexto2 = document.createTextNode(texto1);



	/*lista.appendChild(novoItem);*/
	lista.appendChild(novoItem);/*ele está (criando as lis chamando a li da lista acima*/

	novoItem.appendChild(novotexto );
	novoItem.appendChild(novotexto1 );
	novoItem.appendChild(novotexto2 );
	
}

function limpar(){
	document.getElementById('item').value='';
	document.getElementById('data').value='';
	document.getElementById('nome').value='';

}
function removerItem(){

	var lista= document.getElementById('minhaLista');
	var item= document.getElementsByTagName('li');
	var itens = document.getElementsByTagName('li').length;
	lista.removeChild(item[itens-1]);
}