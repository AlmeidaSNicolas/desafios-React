O Desafio: Customizador de Card de Perfil
Você deve criar uma tela onde o usuário edita as informações de um cartão de visita e vê as mudanças em tempo real.

1. O Estado (No Reducer)
O estado deve ser um objeto único representando as configurações do card.

Campos: nome, cargo, corDeFundo, corDoTexto, e alinhamento (esquerda, centro, direita).

2. Ações (Actions)
UPDATE_FIELD: Uma ação genérica que recebe o nome do campo e o novo valor para atualizar o estado.

RESET_DEFAULTS: Volta o card para as cores e textos originais.

3. O Componente (Visual)
Divida a tela em duas partes (pode usar Flexbox):

Lado Esquerdo (Painel de Controle):

Um input de texto para o nome.

Um select com algumas opções de cargos.

Dois input type="color" (um para o fundo e outro para a fonte).

Botões de rádio (Radio Buttons) para escolher o alinhamento do texto.

Lado Direito (O Preview):

Um elemento visual (uma div que pareça um cartão) que aplica as cores e o alinhamento que estão no seu estado do Reducer através da propriedade style do React.