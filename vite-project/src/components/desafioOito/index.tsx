// 1. IMPORTS (Sempre no topo)
import { useReducer } from "react";
import { carrinhoReducer, itensIniciais, ValorTotal, ShopActions } from "./cardReducer";

// 6. O COMPONENTE PRINCIPAL
export default function DesafioOito () {
    
    // 6.1 Inicialização dos Hooks (Sempre a primeira coisa do componente)
    const [state, dispatch] = useReducer(carrinhoReducer, itensIniciais);

    // 6.2 O Retorno Visual (O que vai para a tela)
    return (
        <>
           <h1>o valor total é {ValorTotal(state)}</h1>


            
            <button type='submit' onClick={() => dispatch({type: ShopActions.ADD_ITEM, payload: { ...itensIniciais[0]}})}>Adicionar itens</button>

            <button type='submit' onClick={() => dispatch({type: ShopActions.REMOVE_ITEM, payload: { ...itensIniciais[0]}})}>Remover itens</button>'
        
            <button type="submit" onClick={() => dispatch({type: ShopActions.CLEAR_CART})}>Limpar carrinho</button>

        </>

    )
}