// Função para adicionar um contato à tabela
function addContact() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;

    // Criar uma nova linha na tabela
    var table = document.getElementById('contactTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    // Inserir células na nova linha
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    // Preencher as células com os dados do contato
    cell1.innerHTML = name;
    cell2.innerHTML = phone;

    // Limpar os campos do formulário
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
}

// Adicionar um listener para o evento submit do formulário
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que o formulário seja submetido
    addContact(); // Adicionar o contato à tabela
});