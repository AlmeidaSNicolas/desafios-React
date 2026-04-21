// 2. INTERFACES (O formato dos seus dados)
export interface Produto { 
    id: number;
    nome: string;
    preco: number;
    quantidade: number
 }

// 3. CONSTANTES E ESTADO INICIAL (Dados fixos)
 const ShopActions = { 
    UPDATE_ITEM: 'UPDATE_ITEM',
    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
    CLEAR_CART: 'CLEAR_CART',
 } as const;


export type CarrinhoAction = 
    
    | { type: typeof ShopActions.ADD_ITEM; payload: Produto } 
    
    
    | { type: typeof ShopActions.CLEAR_CART } 
    
    | {type: typeof ShopActions.REMOVE_ITEM; payload:  Produto}

    | {type: typeof ShopActions.UPDATE_ITEM; payload: Produto}

    
;

const itensIniciais: Produto[] = [ 
    {id: 1, nome: 'Arroz', preco: 5.99, quantidade: 1},
    {id: 2, nome: 'Feijão', preco: 6.99, quantidade: 1},
    {id: 3, nome: 'Óleo', preco: 4.99, quantidade: 1},
    {id: 4, nome: 'Macarrão', preco: 3.99, quantidade: 1},
    {id: 5, nome: 'Leite', preco: 2.99, quantidade: 1},
    {id: 6, nome: 'Café', preco: 7.99, quantidade: 1},
    {id: 7, nome: 'Açúcar', preco: 3.49, quantidade: 1},
    {id: 8, nome: 'Sal', preco: 1.99, quantidade: 1},
    {id: 9, nome: 'Farinha', preco: 2.49, quantidade: 1},
    {id: 10, nome: 'Molho de tomate', preco: 2.99, quantidade: 1}
];

const carrinhoVazio: Produto[] = [];

// 4. FUNÇÕES AUXILIARES PURAS (Lógica matemática isolada)
function ValorTotal(itens: Produto[]) { 
    const soma = itens.reduce((acumulador, itemAtual) =>{
        return acumulador + (itemAtual.preco * itemAtual.quantidade)
    }, 0)
    return soma.toFixed(2);
 }

// 5. O REDUCER
// AGORA VEM A MÁGICA: Troque o "action: any" pelo "action: CarrinhoAction"
function carrinhoReducer(state: Produto[], action: CarrinhoAction ) {
    switch(action.type) { 
        case ShopActions.ADD_ITEM:
            // O TS agora SABE que se caiu aqui, action.payload é um Produto perfeito!
            return [...state, action.payload]
            
        case ShopActions.REMOVE_ITEM:
            return state.filter(item => item.id !== action.payload.id)
            
        case ShopActions.CLEAR_CART:
            return carrinhoVazio
            
        case ShopActions.UPDATE_ITEM:
            return state.map(item => item.id === action.payload.id ? action.payload : item)    
     }
     
     return state; 
}

export { carrinhoReducer, itensIniciais, ValorTotal, ShopActions }