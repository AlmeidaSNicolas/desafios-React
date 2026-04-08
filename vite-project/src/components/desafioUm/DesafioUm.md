Tente refatorar seu código seguindo estas diretrizes (sem eu te dar o código pronto):

Crie uma Interface: Defina um interface Produto { ... } com os campos id, nome, preco e categoria.

Use dois Estados:

Um para a lista original (ou use a constante fora da função do componente).

Um estado chamado produtosFiltrados (usando useState) que começa com a lista cheia.

Atualize a função de filtro: Em vez de dar console.log, use a função de "set" do seu estado para guardar os itens filtrados.

Renderize o Estado: No seu .map(), em vez de percorrer a variável estática objetos, percorra o estado produtosFiltrados.


🏆 Desafio de "Level Up" (Opcional)
Você se sente confortável para adicionar um botão para cada categoria?

Um botão "Eletrônicos", um "Livros" e um "Roupas".

Ao clicar no botão "Livros", a lista deve mostrar apenas os livros.

Um botão "Limpar Filtros" que volta a mostrar tudo.