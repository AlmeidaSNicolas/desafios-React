import { useState } from "react";

interface Produtos{
    id: number;
    nome: string;
    preco: number;
    categoria: string;
  }

export function DesafioUm() {

  const objetos: Produtos[] = [
    { id: 1, nome: 'Celular', preco: 1800, categoria: 'Eletrônico' },
    { id: 2, nome: 'Notebook', preco: 3500, categoria: 'Eletrônico' },
    { id: 3, nome: 'Estande', preco: 150, categoria: 'Móveis' },
    { id: 4, nome: 'Fone de Ouvido', preco: 200, categoria: 'Eletrônico' },
    { id: 5, nome: 'Mesa de Escritório', preco: 600, categoria: 'Móveis' },
    { id: 6, nome: 'Cadeira de Escritório', preco: 400, categoria: 'Móveis' },
    { id: 7, nome: 'Relógio', preco: 150, categoria: 'Acessórios' },
    { id: 8, nome: 'Tênis', preco: 120, categoria: 'Calçados' },
    { id: 9, nome: 'Bolsa', preco: 250, categoria: 'Acessórios' },
    { id: 10, nome: 'Camiseta', preco: 80, categoria: 'Acessórios' },
    { id: 11, nome: 'Tenis Gamer', preco: 800, categoria: 'Calçados' },
    { id: 12, nome: 'Nike air', preco: 1200, categoria: 'Calçados' }
    ,
  ];

  const [mostrar, setMostrar] = useState<Produtos[]>(objetos)



  function filterByname(event: React.ChangeEvent<HTMLInputElement>) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredObjects = objetos.filter((objeto) =>
      objeto.nome.toLowerCase().includes(searchTerm)
    );
    setMostrar(filteredObjects);
  }


  return (
    <>
      <h2>Desafio 1</h2>
      <ul>
        {mostrar.map((item) => (
          <li key={item.id}>{item.nome} - RS {item.preco}</li>
        ))}
      </ul>

      <input type="text" placeholder="Pesquisar por nome" onChange={filterByname} id="Pesquisar item" aria-label="Pesquisar item">
      </input>

      <button  style={{marginLeft: '10px'}} onClick={() => setMostrar(objetos)}>Limpar Filtro</button>

      <button style={{marginLeft: '10px'}} onClick={() => setMostrar(objetos.filter((item) => item.categoria === 'Eletrônico'))}>Eletrônicos</button>

      <button style={{marginLeft: '10px'}} onClick={() => setMostrar(objetos.filter((item) => item.categoria === 'Móveis'))}>Móveis</button>

      <button style={{marginLeft: '10px'}} onClick={() => setMostrar(objetos.filter((item) => item.categoria === 'Calçados'))}>Calçados</button>

      <button style={{marginLeft: '10px'}} onClick={() => setMostrar(objetos.filter((item) => item.categoria === 'Acessórios'))}>Acessórios</button>
    </>
  );
}

export default DesafioUm;