Objetivo: Entender como trabalhar com estados booleanos (true ou false) para mostrar ou esconder elementos da tela, e como fazer a interface reagir a essa mudança.

Requisitos de Interface e Comportamento:

Crie um componente que tenha um título simples (ex: "Área Secreta").

Crie um estado (useState) que vai guardar a informação se o segredo está visível ou não. Ele deve começar obrigatoriamente como false (escondido).

Adicione um botão na tela.

Regra do Botão: O texto do botão precisa ser dinâmico. Se o estado estiver false, o botão deve mostrar o texto "Mostrar Segredo". Se o estado estiver true, o texto do botão deve mudar automaticamente para "Esconder Segredo".

A Ação: Ao clicar no botão, ele deve inverter o valor do estado atual (se for true, vira false; se for false, vira true).

A Renderização: Abaixo do botão, você deve exibir um parágrafo de texto com a "mensagem secreta". Porém, esse parágrafo só pode existir na tela se o estado for true. Se for false, o parágrafo deve sumir completamente.