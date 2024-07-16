// Carregando o objeto json com os livros do localStorage
let livros = JSON.parse(localStorage.getItem('livros')) || []
console.log(livros)

// Função para salvar os livros no localStorage
function saveBooks() {
    localStorage.setItem('livros', JSON.stringify(livros))
}

function addBook() {
    const titulo = document.querySelector('#titulo')
    const autor = document.querySelector('#autor')
    const genero = document.querySelector('#genero')
    const ano = document.querySelector('#ano')

    // Criando um objeto para representar o livro
    const book = {
        titulo: titulo.value,
        autor: autor.value,
        genero: genero.value,
        ano: Number(ano.value)
    }
    // Atualizando o array com o novo livro
    livros.push(book)
    //Salvando no localStorage
    saveBooks()
}

function listarLivros(arrayLivros) {
    const catalogo = document.querySelector('#catalogo')
    catalogo.innerHTML = ''

    for (const livro of arrayLivros) {
        const div = document.createElement('div')
        div.classList.add('book')
        div.innerHTML = `<h3>Título: ${livro.titulo}</h3>
        <p>Autor: ${livro.autor}</p>
        <p>Gênero: ${livro.genero}</p>
        <p>Ano: ${livro.ano}</p>
        `
        catalogo.append(div)
    }
}

function searchBook() {
    const termo = document.querySelector('#termo').value
    const resultados = livros.filter((book) => {
        return book.autor === termo || book.titulo === termo || book.genero === termo
    })
    listarLivros(resultados)
}

listarLivros(livros)