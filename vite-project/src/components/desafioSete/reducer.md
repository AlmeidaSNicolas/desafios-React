🤺 Desafio 1: O Formulário Dinâmico (Foco em Payload Flexível)
Cenário: Você está criando a tela de configurações de perfil de um usuário. Em vez de ter um useState para cada campo, você usará um único useReducer para gerenciar tudo.

O Estado Inicial deve conter:

nome (texto)

email (texto)

notificacoesAtivas (booleano)

tema (pode ser apenas 'claro' ou 'escuro')

As Ações necessárias:

ALTERAR_CAMPO: Esta é a grande sacada. Em vez de uma ação para cada campo (ex: MUDAR_NOME, MUDAR_EMAIL), crie uma única ação onde o payload informa qual campo deve ser alterado e qual é o novo valor.

RESETAR: Volta o estado para as configurações originais.

O Desafio TypeScript:

Crie as interfaces/types para o Estado.

Tipar a ação ALTERAR_CAMPO de forma que o TypeScript te dê erro se você tentar alterar um campo que não existe no estado (Dica avançada: pesquise sobre tipos genéricos ou utilitários para propriedades de um objeto, se quiser ir além, ou apenas mapeie os tipos de payload possíveis).



Passo 1: Materialize o Estado Inicial
Você já tem o "Molde" (a sua Interface). Agora, crie uma variável constante (fora do seu componente) que será o valor inicial real do seu formulário.

O que fazer: Crie um const estadoInicial que seja um objeto contendo nome, email, notificacoesAtivas e tema com valores iniciais vazios ou padrão. Diga ao TypeScript que essa variável é do tipo da sua Interface.

Passo 2: A Tipagem das Ações (O Contrato do Dispatch)
Antes de criar o reducer, o TypeScript precisa saber quais mensagens (actions) ele vai aceitar.

O que fazer: Crie um type (ex: ActionType). Ele será uma união (|) de duas possibilidades:

Possibilidade A: Um objeto onde o type é literalmente a string 'RESETAR'. (Não precisa de payload).

Possibilidade B: Um objeto onde o type é 'ALTERAR_CAMPO', e o 
payload é outro objeto contendo duas informações cruciais: o nome do campo que vai mudar e o novo valor dele.

Passo 3: O Esqueleto da Função Reducer
Agora vamos montar a máquina que processa essas ações. Lembre-se: ela fica fora do componente!

O que fazer: Crie a function reducer(state, action).

A Tipagem aqui: O state tem o tipo da sua Interface (Passo 1). A action tem o tipo que você acabou de criar (Passo 2).

O Corpo: Coloque um bloco switch (action.type) vazio dentro dela por enquanto.

Passo 4: A Lógica do ALTERAR_CAMPO (A Grande Sacada)
É aqui que a mágica de usar um único caso para múltiplos campos acontece.

O que fazer: Dentro do switch, crie o case 'ALTERAR_CAMPO':.

Como você atualiza o estado sem apagar o resto? Você vai retornar um novo objeto. Primeiro, espalhe o estado antigo usando o spread operator (...state).

O Truque: Para atualizar dinamicamente o campo certo, use a sintaxe de chaves computadas do JavaScript: [action.payload.campo]: action.payload.valor. Isso diz ao JavaScript: "pegue o nome do campo que veio no payload e use isso como a chave deste objeto".


Passo 5: A Lógica do RESETAR
Essa é a parte relaxante.

O que fazer: Crie o case 'RESETAR':. O que ele deve retornar? Simplesmente devolva o seu estadoInicial intacto. (Não esqueça do default: retornando o state atual para evitar erros).

Passo 6: Conectar tudo no Componente
As regras do jogo estão prontas. Hora de jogar.

O que fazer: Dentro da função do seu componente React, chame o const [state, dispatch] = useReducer(...). Passe a função reducer (Passo 3) e o estadoInicial (Passo 1) para ele.


Passo 7: Disparar (Dispatch) no HTML
O que fazer: Crie um <input> para o nome. No onChange dele, chame o dispatch. O type será 'ALTERAR_CAMPO', e o payload será um objeto dizendo que o campo é 'nome' e o valor é evento.target.value.