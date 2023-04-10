const form = document.getElementById('form-contato');
const nome = [];
const tel = [];


let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha () {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelContato = document.getElementById('tel-contato');


        nome.push(inputNomeContato.value);
        tel.push(parseFloat(inputTelContato.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelContato.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    

    inputNomeContato.value = '';
    inputTelContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
