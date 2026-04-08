O App de Clima (Consumo de API)

Crie um novo componente chamado Clima.tsx.

Use a função fetch() para pegar dados desta URL gratuita: https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.63&current_weather=true (são as coordenadas de SP).

O que o Junior precisa fazer:

Criar um estado para os dados do clima.

Criar um estado de loading (ex: true enquanto a API não responde).

Exibir a temperatura na tela.

Usar o useEffect para buscar os dados assim que o componente abrir.


O seu roteiro para o Desafio 2:
Tente montar a estrutura assim:

No topo: Seus dois useState.

No meio: Seu useEffect com o fetch dentro.

No return (HTML): * Se carregando for verdade, mostre <span>Carregando...</span>.

Se não, mostre a temperatura que está salva no estado.