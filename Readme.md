# 🚀 Desafios de Frontend: React + TypeScript

Este repositório contém uma série de exercícios práticos focados em situações reais do dia a dia de um desenvolvedor Frontend Junior/Estagiário. O objetivo aqui é dominar a tríade: **Estado, Efeito e Tipagem.**

## 🧠 O que estou praticando?

* **React Hooks:** Uso estratégico de `useState` para reatividade e `useEffect` para sincronização com APIs.
* **TypeScript:** Tipagem rigorosa de interfaces, eventos de formulário e retornos de API (adeus, `any`!).
* **Manipulação de Dados:** Filtros, mapeamentos e transformações de arrays em tempo real.
* **Consumo de APIs:** Integração com serviços externos usando `fetch` e tratamento de estados de loading.
* **Renderização e Componentização:** Criação de componentes reutilizáveis, passagem de `props` e renderização condicional (`true`/`false`).

---

## 🛠️ Desafios Concluídos

### 1. Lista de Compras Inteligente (Filtro Dinâmico)
* **Conceito:** Manipulação de estado local e filtros em memória.
* **Funcionalidade:** Uma listagem de produtos que reage instantaneamente ao que o usuário digita e permite filtrar por categorias (Eletrônicos, Móveis, etc).
* **Aprendizado:** Diferença entre variáveis comuns e estado reativo.

### 2. App de Clima Real-Time (Consumo de API)
* **Conceito:** Sincronização de efeitos colaterais.
* **Funcionalidade:** Busca automática da temperatura e velocidade do vento via Open-Meteo API assim que o componente é montado.
* **Aprendizado:** Ciclo de vida do componente e tratamento de promessas (Promises).

### 3. Localizador de Usuários (Search as you type)
* **Conceito:** `useEffect` com dependências.
* **Funcionalidade:** Busca de usuários na API JSONPlaceholder disparada automaticamente apenas quando o input atinge um número mínimo de caracteres.
* **Aprendizado:** Como o React "observa" mudanças em variáveis específicas para disparar novas ações.

### 4. Cartão de Visita Reutilizável (Props e Componentização)
* **Conceito:** Reutilização de componentes e passagem de propriedades.
* **Funcionalidade:** Um cartão de visita dinâmico que recebe dados (nome, cargo, empresa) de um componente pai e os exibe de forma estruturada na tela.
* **Aprendizado:** Como fragmentar a interface em pedaços menores, independentes e dinâmicos usando `props`.

### 5. Contador Inteligente com Trava (State e Eventos)
* **Conceito:** Gerenciamento de estado local (`useState`) e eventos de clique.
* **Funcionalidade:** Um contador com botões para incrementar e decrementar, incluindo uma regra de negócio simples de segurança para impedir a exibição de números negativos.
* **Aprendizado:** Atualização segura de estados e aplicação de regras de validação (condicionais) atreladas à interação do usuário.

### 6. Esconde-Esconde Dinâmico (Renderização Condicional)
* **Conceito:** Renderização condicional baseada em estados booleanos (`true`/`false`).
* **Funcionalidade:** Um botão que alterna a visibilidade de uma área secreta na tela, alterando seu próprio texto e seu ícone (Lucide-React) dinamicamente com base no estado atual.
* **Aprendizado:** Como fazer a interface modificar sua estrutura e reagir visualmente em tempo real através de lógicas booleanas, base para criar modais e menus dropdown.

---

## 🚀 Como rodar o projeto

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/SEU_USUARIO/NOME_DO_REPO.git](https://github.com/SEU_USUARIO/NOME_DO_REPO.git)
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

---

## 👨‍💻 Autor

Desenvolvido com foco em aprendizado contínuo e boas práticas.

---
> "Não é sobre saber tudo, é sobre saber onde procurar e como conectar as peças." 🧩