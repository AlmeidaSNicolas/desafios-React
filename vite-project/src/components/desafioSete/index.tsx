import { useReducer } from "react";

interface Tarefa {
    nome: string;
    email: string;
    notificacoesAtivas: boolean;
    tema: 'claro' | 'escuro';
}

const estadoInicial: Tarefa = {
    nome: '',
    email: '',
    notificacoesAtivas: true,
    tema: 'claro',
}

type ActionReset = {
    type: 'RESETAR'
}

type ActionAtt = {
    type: 'ATUALIZAR_CAMPO'
    payload: {
        campo: keyof Tarefa;
        valor: Tarefa[keyof Tarefa];
    }
}

export type ActionType = ActionReset | ActionAtt;

function reducer (state:Tarefa, action: ActionType){
    switch (action.type){
        case 'ATUALIZAR_CAMPO':
            return {
                ...state,
                [action.payload.campo]: action.payload.valor,
            }
        case 'RESETAR':
            return estadoInicial
        default:
            return state
    }
}

export function DesafioSete(){

    const [tarefa, dispatch] = useReducer(reducer, estadoInicial);

    return(
        <>
            <h1>Desafio 7 - useReducer</h1>

            <input type="text" value={tarefa.nome} onChange={(e) => dispatch({type: 'ATUALIZAR_CAMPO', payload: {campo: 'nome', valor: e.target.value}})} />
            <input type="email" value={tarefa.email} onChange={(e) => dispatch({type: 'ATUALIZAR_CAMPO', payload: {campo: 'email', valor: e.target.value}})} />

            <input type="checkbox" checked={tarefa.notificacoesAtivas} onChange={(e) => dispatch({type: 'ATUALIZAR_CAMPO', payload: {campo: 'notificacoesAtivas', valor: e.target.checked}})} />

            <select value={tarefa.tema} onChange={(e) => dispatch({type: 'ATUALIZAR_CAMPO', payload: {campo: 'tema', valor: e.target.value as Tarefa['tema']}})}>
                <option value="claro">Claro</option>
                <option value="escuro">Escuro</option>
            </select>

            <button onClick={() => dispatch({type: 'RESETAR'})}>Resetar</button>


        </>
    )
}