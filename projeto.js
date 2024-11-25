


var icone = document.getElementById("logo");
var sub = document.getElementById("sublogo");
var icon2 = document.getElementById("icon2");
var list = document.getElementById("list");
  var container = document.getElementById("logoContainer")
  
  var text  = document.getElementById("noResults")
	    list.style.opacity = "0"; // Show the list
	
	container.style.display ="none"

sub.addEventListener("click", () => {
    // Toggle visibility of the search and close icon
    sub.style.opacity = "0";  // Hide the search icon
    icon2.style.opacity = "1"; // Show the close icon
    icone.style.width = "200px"; // Expand input field when search is clicked
    icone.style.opacity = "1"; // Make the input visible
    list.style.opacity = "1"; // Show the list
		container.style.display ="block"

	text.style.display= "block"


});

icon2.addEventListener("click", () => {
    // When the close icon is clicked, revert the changes
    sub.style.opacity = "1"; // Show the search icon again
    icon2.style.opacity = "0"; // Hide the close icon
    icone.style.width = "0"; // Shrink the input field
    icone.style.opacity = "0"; // Hide the input field
    list.style.opacity = "0"; // Hide the list
	container.style.display ="none"
		text.style.display= "none"

});









function filter() {
    var input = document.getElementById("logo"); // Certificando-se de que está pegando o input correto
    var valueof = input.value.trim().toUpperCase().replace(/\s+/g, ''); // Remover espaços extras e colocar o texto em maiúsculas

    var items = document.getElementsByClassName("lista"); // Pegando os itens da lista
    var found = false; // Flag para saber se algum item foi encontrado

    // Loop para verificar os itens da lista
    for (let i = 0; i < items.length; i++) {
        var item = items[i]; // Item atual da lista
        var text = item.innerText.trim().toUpperCase().replace(/\s+/g,""); // Removendo espaços extras do texto do item e transformando em maiúsculas

        // Verificando se o item contém o texto de busca
        if (text.includes(valueof)) {
            item.style.display = ""; // Mostra o item
            found = true;
        } else {
            item.style.display = "none"; // Esconde o item
        }
    }
			  
    // Exibe ou esconde a mensagem de "Nenhum item encontrado"
    var noResults = document.getElementById('noResults');
    if (!found) {
        noResults.style.display = "block"; // Mostra a mensagem de "Nenhum item encontrado"
    } else {
        noResults.style.display = "none"; // Esconde a mensagem se houver resultados
    }
}

// Adiciona o evento para filtrar sempre que o usuário digitar algo
document.getElementById("logo").addEventListener("input", filter);
