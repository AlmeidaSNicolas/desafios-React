Exercício 1: Carrinho de Compras (Complexidade: Iniciante/Intermediária)
O objetivo é criar um gerenciador de carrinho de e-commerce, lidando com quantidades e cálculos dinâmicos.

Estrutura do Estado (State):

items: Um array de objetos, onde cada objeto representa um produto (id, nome, preço, quantidade).

total: Um número representando o valor total do carrinho.

Ações (Actions):

ADD_ITEM: Recebe o item. Se ele já existir no carrinho, apenas incrementa a quantidade. Se não, adiciona o novo item com quantidade 1.

REMOVE_ITEM: Recebe o ID do item e o remove completamente do array.

UPDATE_QUANTITY: Recebe o ID do item e a nova quantidade. Se a quantidade chegar a zero, o item deve ser removido.

CLEAR_CART: Retorna o carrinho ao estado inicial (vazio e total zerado).

Regra de Negócio: O valor total do estado deve ser recalculado automaticamente a cada vez que um item for adicionado, removido ou tiver sua quantidade alterada no reducer.


