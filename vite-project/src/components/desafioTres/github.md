Desafio 3: Localizador de Usuários (Github ou JSONPlaceholder)
O Cenário: Você precisa buscar usuários em uma API externa, mas a busca deve acontecer automaticamente enquanto o usuário digita, sem precisar de um botão "Buscar".

O que você vai precisar fazer:
Dois Estados (useState):

Um para o texto do input (ex: pesquisa).

Um para a lista de usuários que vem da API (ex: usuarios).

O Robô (useEffect):

Desta vez, o array de dependências não será vazio. Ele deve "vigiar" o seu estado de pesquisa.

useEffect(() => { ... }, [pesquisa]);

Isso significa: "Toda vez que o usuário digitar uma letra e o estado pesquisa mudar, rode o código aqui dentro".

A Lógica dentro do Effect:

Se a pesquisa tiver pelo menos 3 letras, faça um fetch para: https://jsonplaceholder.typicode.com/users.

Quando os dados chegarem, use o .filter() para salvar no seu estado de usuarios apenas quem tem o nome parecido com o que foi digitado.

Estrutura sugerida:
// 1. useState para o input
// 2. useState para o array de usuários
// 3. useEffect vigiando o input [input]
// 4. Input com onChange atualizando o estado
// 5. Map na tela mostrando os usuários filtrados